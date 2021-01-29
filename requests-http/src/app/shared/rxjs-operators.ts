import { HttpEvent, HttpEventType, HttpResponse } from "@angular/common/http";
import { pipe } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

// Retorna o corpo da resposta do evento!
export function filterResponse<T>(){

  return pipe(
    filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
    map((res: HttpResponse<T>) => res.body)
  );
}

// O parametro que recebe é um função de Callback
export function uploadProgress<T>(cb: (progress: number) => void){
  return tap((event: HttpEvent<T>)=>{

    if(event.type === HttpEventType.UploadProgress){
      cb(Math.round((event.loaded * 100) / event.total))
    }
  });
}
