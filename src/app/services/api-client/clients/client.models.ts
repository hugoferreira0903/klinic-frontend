export interface SaveClientRequest {
  name: string
  cpf: string
  phone: string
  email: string
  password: string
}



export interface UpdateClientRequest {
  name: string
  cpf: string
  phone: string
  email: string
  password: string
}

export interface SaveClientResponse {
  id: number
  name: string
  cpf: string
  phone: string
  email: string
  password: string
}

export interface UpdateClientResponse {
  id: number
  name: string
  cpf: string
  phone: string
  email: string
  password: string
}

export interface ListClientResponse {
  id: number
  name: string
  cpf: string
  phone: string
  email: string
  password: string
}

export interface DetailClientResponse {
  id: number
  name: string
  cpf: string
  phone: string
  email: string
  password: string
}

export interface LoginRequest {
email: string;
password: string;
}
