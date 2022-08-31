import { Injectable } from '@angular/core';
declare let alertify : any;

@Injectable({
  providedIn: 'root' // Servisin seevis olabilmesi için Injectable olması gerekiyor.
})

export class AlertService {

  constructor() { }

  success(message:string){
    alertify.success(message);

  }
  
}
