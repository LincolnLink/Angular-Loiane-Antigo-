import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private httpService: HttpClient) { }


  // Alem do Set<File> pode ser o FormValue !
  upload(files: Set<File>, url: string){

    // Instanciando e criando o FormData!
    // Para poder enviar arquivos deve instancia o formData!
    const formData = new FormData();
    // Cada arquivo deve se fazer um append!
    // Passando as informações
    files.forEach(file => formData.append('file', file, file.name));


    // Criando o request, é um metodo http personalizado!
    // Poderia enviar um json, no lugar do formData!
    const resquest = new HttpRequest('POST', url, formData);

    // Chama o metodo Http do Angular
    //return this.httpService.request(resquest);

    // POST feito de uma forma mais simples!

    return this.httpService.post(url, formData,
        {
            observe: 'events',
            reportProgress: true
        }
    );
  }

  download(url: string){

      return this.httpService.get(url, {
        responseType: 'blob' as 'json', //Progresso de download!
        //reportProgress   <- rever para poder entender!
        // content -length
    });
  }

  handleFile(res: any, fileName: string)
  {

     // Criando o arquivo e informando o tipo dele!
     const file = new Blob([res], {

      type: res.type

    });

    // IE
    if(window.navigator && window.navigator.msSaveOrOpenBlob){
      window.navigator.msSaveOrOpenBlob(file)
    }

    /* Para funcionar no Internet Explore, deve criar um link usando o DOM
    e fazer o js clickar nele, para poder fazer download do arquivo */

    // Pega a janela do browser, setar a URL e cria um link
    // passa o objeto
    const blob = window.URL.createObjectURL(file);

    // Cria um link e seta o href, que é a URL no arquivo!
    const link = document.createElement('a');

    link.href = blob;
    link.download = fileName;

    //link.click();
    link.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window

    }));

    setTimeout(() =>{ //firefox

      window.URL.revokeObjectURL(blob);
      link.remove();

    }, 100);

  }
}
