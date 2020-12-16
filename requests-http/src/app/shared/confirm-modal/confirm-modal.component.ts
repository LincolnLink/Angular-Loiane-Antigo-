import { Component, Input, OnInit } from '@angular/core';

import { Subject } from 'rxjs';

import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title: string;
  @Input() msg: string;
  @Input() cancelTxt = 'Cancelar';
  @Input() okTxt = 'Sim';

  // Variavel que emite valor!
  confirmResult: Subject<boolean>;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.confirmResult = new Subject();
  }

  // Método que emite o valor que foi definido dentro da modal
  // Ele emite e depois fecha!
  private ConfirmAnClose(value: boolean){
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }

  onClose(){
    this.ConfirmAnClose(false);
  }

  onConfirm(){
    this.ConfirmAnClose(true);
  }

}
