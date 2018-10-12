import { Component, Input} from '@angular/core';
import {LoggingService} from '../shared/logging.service';
import {AccountService} from '../shared/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountService: AccountService) { }

  onSetTo(status: string) {
    this.accountService.updateAccountStatus(this.id, status);
    this.loggingService.logStatusChange('----A server status changed, new status: ' + status);
  }
}
