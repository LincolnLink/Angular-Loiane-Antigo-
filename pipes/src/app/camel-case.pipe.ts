import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    // O split está separando com base no espaço vazio, e botando em uma array!
    let values = value.split(' ');
    let result = '';

    // O for está modificando cada palavra com o método
    for (let v of values){
      result += this.capitalize(v);
    }

    return result;
  }

  // Esse método pega a palabra e deixa apenas a primeira letra maiuscula!
  capitalize(value: string){
    return value.substr(0,1).toUpperCase() +
    value.substr(1).toLowerCase() + " ";
  }
}
