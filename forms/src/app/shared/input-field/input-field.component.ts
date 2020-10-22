import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


/*
provide: token para reconhecer que é um campo de imput.
useExisting: referenciando a propria classe.
multi: Informa que pode ter varias instancias.
*/
const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
}

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputFieldComponent implements ControlValueAccessor {

  @Input() classeCss;
  @Input() id: string;
  @Input() label: string;
  @Input() type = 'text';
  @Input() placeholder: string;
  @Input() control;

  @Input() isReadOnly = false;

  private innerValue: any;

  get value(){
    return this.innerValue;
  }

  set value(v: any){
    if (v !== this.innerValue){
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  constructor() { }

  // Funções falsa, para retornar nada!
  onChangeCb: (_:any) => void = () => {};
  onTouchedCb: (_:any) => void = () => {};

  // Setar um valor
  writeValue(v: any): void {

    this.value = v;

    /*if(v !== this.innerValue){
      this.innerValue = v;
      this.onChangeCb(v);
    }*/
  }

  // Fala para o Angular toda vez que um valor muda!
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  // Fala com o Angular toda vez que o campo ganha foco!
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  // Fala pro Angular quando o Campo está dezabilitado !
  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }



}
