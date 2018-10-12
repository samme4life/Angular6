import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    const loggingService = new LoggingService();
    loggingService.logStatusChange('halloooo A server status changed, new status: ' + accountStatus);
  }
}
