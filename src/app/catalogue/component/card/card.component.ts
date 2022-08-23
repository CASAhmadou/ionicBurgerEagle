import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Produit } from 'src/app/shared/models/produits';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('catalogues') produit : Produit | undefined = undefined
  constructor(private sanitizier: DomSanitizer, private router:Router) { }

  ngOnInit() {}

  detailOuvert(): void{
    this.router.navigateByUrl(`produits/details/${this.produit?.type}/${this.produit?.id}`)
  }
}
