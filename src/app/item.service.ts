import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemService {

  itensUrl = 'http://localhost:8080/itens';

  constructor(private http: HttpClient) { }

  listar(){
    // O angular retorna um observable.
    // A chamada é assíncrona e o retorno é 
    // atribuído ao observable.
    // uso o operador diamente para dizer que
    // recebo arrays de qualquer tipo.
    return this.http.get<any[]>(this.itensUrl);
  }

}
