import { Component } from '@angular/core';
import { Ticket } from './ticket';
import { TicketDetailComponent } from './ticket-detail.component';

const TICKETS: Ticket[] = [
  { id: 11, name: '0001-00000001' },
  { id: 12, name: '0001-00000002' },
  { id: 13, name: '0001-00000003' },
  { id: 14, name: '0001-00000004' },
  { id: 15, name: '0001-00000005' },
  { id: 16, name: '0001-00000006' },
  { id: 17, name: '0001-00000007' },
  { id: 18, name: '0001-00000008' },
  { id: 19, name: '0001-00000009' },
  { id: 20, name: '0001-00000010' }
];


@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
		<h2>My Tickets</h2>
		<ul class="heroes">
			<li *ngFor="let ticket of tickets" 
				[class.selected]="ticket === selectedTicket"
				(click)="onSelect(ticket)">
				<!-- each ticket goes here -->
				<span class="badge">{{ticket.id}}</span> {{ticket.name}}
			</li>
		</ul>
		<my-ticket-detail [ticket] = "selectedTicket"></my-ticket-detail>
		`,
styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
	title = 'Cliente Off-line para Odoo';
	tickets = TICKETS;
	selectedTicket: Ticket;

	onSelect(ticket: Ticket): void {
	  this.selectedTicket = ticket;
	}

	}

