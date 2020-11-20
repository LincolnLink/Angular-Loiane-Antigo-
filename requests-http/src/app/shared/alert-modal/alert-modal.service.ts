import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal.component';

export enum AlertType{
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {


  constructor(private modalService: BsModalService) { }


  private showAlert(message: string, type: AlertType){

    // Pode ter valores iniciais!
    // está chamando o outro component que é o corpo da modal!
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);

    // Passando valores de input!
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

  }

  //Criando uma modal(componente) usando NGX-Bootstrap!
  showAlertDanger(message: string){

    this.showAlert(message, AlertType.DANGER);

  }

  //Criando uma modal(componente) usando NGX-Bootstrap!
  showAlertSuccess(message: string){

    this.showAlert(message, AlertType.SUCCESS);

  }
}
