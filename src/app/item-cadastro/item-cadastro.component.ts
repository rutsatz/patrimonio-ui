import { Component, OnInit } from '@angular/core';

import { ItemService } from './../item.service';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    // o listar retorna um observable. Então me inscrevo
    // para ser notificado quando a requisição, que é
    // assíncrona, for concluída.
     this.itemService.listar()
       .subscribe(dados => {
         this.itens = dados;
       });
  }

}
