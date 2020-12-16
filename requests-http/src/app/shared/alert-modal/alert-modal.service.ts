import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { AlertModalComponent } from './alert-modal.component';

export enum AlertType{
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {


  // "modalService" serve para manipular o DOM, ele faz parte do NGX-Bootstrap!
  constructor(private modalService: BsModalService) { }


  private showAlert(message: string, type: AlertType, dismissTimeout? : number){

    // Pode ter valores iniciais!
    // está chamando o outro component que é o corpo da modal!
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);

    // Passando valores de input!
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    // Define um tempo de existencia da modal, caso seja uma de success
    if(dismissTimeout){
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }

  }

  //Criando uma modal(componente) usando NGX-Bootstrap!
  showAlertDanger(message: string){

    this.showAlert(message, AlertType.DANGER);

  }

  //Criando uma modal(componente) usando NGX-Bootstrap!
  showAlertSuccess(message: string){

    this.showAlert(message, AlertType.SUCCESS, 3000);

  }

  // Invoca uma modal generica de confirmação, alimentando os valores de input propert!
  showConfirm(title: string, msg: string, okTxt?: string, cancelText?: string){

    // bsModalService(modalService) tem um método chamada "show" que exibe ng-template ou component
    // Praticamente um DOM!
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);

    // Alimentando os valores do input propert
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if(okTxt){bsModalRef.content.okTxt = okTxt;}

    if(cancelText){bsModalRef.content.cancelText = cancelText;}

    // Retorna o valor que foi emitodo pelo componente de modal que confirma!(botão da modal)
    // Tipa o "bsModalRef.content" usando o "diamante" usando a modal como tipo!
    // Assim ele reconhece todos os valores!
    return (<ConfirmModalComponent>bsModalRef.content).confirmResult

  }

}
