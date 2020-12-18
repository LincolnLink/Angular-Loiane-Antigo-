import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { registerEscClick } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {


  lisNameFiles: string[] = [];

  selectedFiles

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event){

    //const selectedFiles = <FileList>event.target.files;
    this.selectedFiles = <FileList>event.srcElement.files;

    console.log(this.selectedFiles);

    for (let index = 0; index < this.selectedFiles.length; index++) {

      this.lisNameFiles.push(this.selectedFiles[index].name);
    }

    //this.fildFile = document.getElementById('customFile');
    //document.getElementById('customFile').innerHTML = fileNames.join(', ');
    //const valueFild = [...event.srcElement.files].map((file) => `${file.name}`).join(', ');

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
