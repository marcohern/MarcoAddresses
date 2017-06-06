import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessagingService {
    private subject = new Subject<any>();

  constructor() { }

  public sendDisableCustomerField(customerId:number) {
    this.subject.next({disableCustomerField:true, customerId:customerId});
  }

  public clear() {
    this.subject.next();
  }

  public receiveDisableCustomerField():Observable<any> {
    return this.subject.asObservable();
  }

}
