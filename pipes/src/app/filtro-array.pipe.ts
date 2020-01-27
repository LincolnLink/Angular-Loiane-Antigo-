import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    /* Esse codigo é uma gambiarra, não filtro arrays com pipes em projetos reais!!! */
    /* Foi criado apenas para mostrar um exemplo de pipe puro e impuro*/
    if (value.length === 0 || args === undefined){
      return value;
    }

    // Converte tudo em munisculo
    let filter = args.toLocaleLowerCase();

    /*  O método indexOf() retorna o primeiro índice em que o 
    elemento pode ser encontrado no array, retorna -1 
    caso o mesmo não esteja presente.*/

    // .filter() filtra uma lista de acondo com uma condição
    return value.filter(
      v => v.toLocaleLowerCase().indexOf(filter) != -1
    );

    
  }

}
