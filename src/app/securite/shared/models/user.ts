export interface User {
  id?:number
  login?:string
  password?:string
  ['hydra:member']?: [{}]
}

export interface Token{
  token:string
  id:number
}
