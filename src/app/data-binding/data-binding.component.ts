import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  /*styles: [
    `   
    .isMouseOn {
      background-color: yellow;
      font-weight: bold;
    }
  
    .isMouseOff {
      background-color: red;
      font-weight: bold;
    }
    
    `
  ] */
}) 
export class DataBindingComponent implements OnInit {

  url: string = 'http://google.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature';

  valorAtual: string = '';
  valorSalvo: '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;  

   getValor() {
     return 1;
   }

   getCurtirCurso() {
     return true;
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

  onMudouValor(evento){
     console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }


}
