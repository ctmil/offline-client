import { Component, Input } from '@angular/core';
import { Ticket } from './ticket';

@Component({
  selector: 'my-ticket-detail',
  template: `
    <div *ngIf="ticket">
      <h2>{{ticket.name}} details!</h2>
      <div><label>id: </label>{{ticket.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="ticket.name" placeholder="name"/>
      </div>
    </div>
  `
})

export class TicketDetailComponent {
	@Input()
	  ticket: Ticket;
}

