import { UploadFileService } from './../upload-file.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit, OnDestroy {


  // Lista de nomes de arquivos
  lisNameFiles: string[] = [];

  // Os arquivos selecionados
  selectedFiles

  // Lista que reune os arquivos para ser salvo!
  // Tem um filtro para não ter repetidos
  files: Set <File>

  // Variavel usada para se desinscrever!
  sub: Subscription;

  constructor(private serviceUpload: UploadFileService) { }

  ngOnInit(){ }

  // Método de Evento que pega os arquivos e trata eles!
  onChange(event){

    // Pega os arquivos pelo DOM!
    //const selectedFiles = <FileList>event.target.files;
    this.selectedFiles = <FileList>event.srcElement.files;

    //console.log(this.selectedFiles);

    // Instancia a lista!
    this.files = new Set();

    // Cria uma lista de apenas NOMES dos arquivos, para exibição!
    for (let i = 0; i < this.selectedFiles.length; i++) {

      this.lisNameFiles.push(this.selectedFiles[i].name);
      this.files.add(this.selectedFiles[i]);
    }

    //this.fildFile = document.getElementById('customFile');
    //document.getElementById('customFile').innerHTML = fileNames.join(', ');
    //const valueFild = [...event.srcElement.files].map((file) => `${file.name}`).join(', ');

  }

  // Método que faz p upload, chamando o serviço personalizado de upload de arquivos!
  onUpload(){

    if(this.files && this.files.size > 0){

      this.sub = this.serviceUpload.upload(this.files, 'http://localhost:8000/upload')
      .subscribe(response => console.log('upload concluido!' + response));
    }
  }


  // Método que ativa quando o component é destruido
  // Esta se desinscrevendo para não gerar erro de memoria!
  ngOnDestroy(){
    this.sub.unsubscribe();
  }


  // Remove o arquivo da lista! NÃO É POSSIVEL REMOVER OQUE FOI SELECIONADO!
  //onRemoveList(itemList: string){
    //const index = this.lisNameFiles.indexOf(itemList)

    //this.lisNameFiles.splice(index, 1);

    //console.log(this.selectedFiles);
    //console.log("Lista depois de ser deletado: " + this.selectedFiles);

    /*<button type="button" class="close" aria-label="Close" (click)="onRemoveList(item)">
            <span aria-hidden="true">&times;</span>
          </button> */

  //}



}
