import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
    `   
       . highight {
         backgroud-color: yellow;
         font-weight: bold;
       }
    
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://google.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature';

  valorAtual: string = '';
  valorSalvo: '';

  isMouseOver: boolean = false;

   getValor() {
     return 1;
   }

   getCurtirCurso() {
     return true;
   }

  constructor() { }

  ngOnInit() {
  }

  botaoClicado() {
    alert('botao clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
     console.log();
     this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
     this.valorSalvo = valor;
  }

  onMouseOverOut() {
     this.isMouseOver = !this.isMouseOver;
  }

}
