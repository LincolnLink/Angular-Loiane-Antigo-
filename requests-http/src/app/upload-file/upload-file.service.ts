import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private httpService: HttpClient) { }


  // Alem do Set<File> pode ser o FormValue !
  upload(files: Set<File>, url: string){

    // Instanciando e criando o FormData!
    const formData = new FormData();
    files.forEach(file => formData.append('file', file, file.name));


    // Criando o request!
    //const resquest = new HttpRequest('POST', url, formData);

    // Chama o metodo Http do Angular
    //return this.httpService.request(resquest);

    // POST feito de uma forma mais simples!
    return this.httpService.post(url, formData);

  }
}
