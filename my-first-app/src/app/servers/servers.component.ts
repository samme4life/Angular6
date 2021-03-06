import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No Server is Created yet!';
  serverName: string = 'Test Name';
  serverCreated: boolean = false;
  servers = ['TestServer1','TestServer2'];

  constructor() {
    setTimeout(
      () => {
        this.allowNewServer = true
      }, 2000
    );
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'The server just created is '+this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
