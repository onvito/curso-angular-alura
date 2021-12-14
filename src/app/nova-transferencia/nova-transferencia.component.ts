import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter();

  valor: number;
  destino: number;

  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    console.log("Transferencia Solicitada")
    console.log("Valor: ", this.valor)
    console.log("Destino: ", this.destino)
    const valorEmitir = { valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir)
  }



}
