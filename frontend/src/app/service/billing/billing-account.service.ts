import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BillingAccount} from "../../model/billing-account";

@Injectable({
  providedIn: 'root'
})
// Data service
export class BillingAccountService {

  constructor(private http: HttpClient) { }

  // Ajax request for billing account data
  getBillingAccounts(): Observable<BillingAccount[]> {
    return this.http.get<BillingAccount[]>('/api/ba');
  }
}
