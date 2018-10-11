import { Component, OnInit } from '@angular/core';
import {BillingAccount} from "../model/billing-account";
import {BillingAccountService} from "../service/billing/billing-account.service";

@Component({
  selector: 'app-billing-accounts',
  templateUrl: './billing-accounts.component.html'
})
export class BillingAccountsComponent implements OnInit {

  billingAccounts: BillingAccount[];

  // Dependency injection for BillingAccountService into Billing
  constructor(private billingAccountService: BillingAccountService) { }

  // Calls on component init
  ngOnInit() {
    // Get data from BillingAccountService
    this.billingAccountService.getBillingAccounts().subscribe(accounts => {
      // Parse json response into local array
      this.billingAccounts = accounts as BillingAccount[];

      // Check data in console
      console.log(this.billingAccounts);
    });
  }

}
