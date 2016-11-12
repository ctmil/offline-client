import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { TicketDetailComponent } from './ticket-detail.component';
import { TicketService } from './ticket.service';



@Component({
  selector: 'my-tickets',
  templateUrl: 'tickets.component.html',
  styleUrls: [ 'tickets.component.css' ],
  providers: [TicketService]
})

export class TicketsComponent implements OnInit{
	title = 'Cliente Off-line para Odoo';
	tickets: Ticket[];
	selectedTicket: Ticket;

	constructor(
	    private router: Router,
	    private ticketService: TicketService
	) { }


	onSelect(ticket: Ticket): void {
	  this.selectedTicket = ticket;
	}

	ngOnInit(): void {
	    this.getTickets();
	  }


	getTickets(): void {
	    this.ticketService.getTickets().then(tickets => this.tickets = tickets);
	  }

	gotoDetail(): void {
	  this.router.navigate(['/detail', this.selectedTicket.id]);
	}

}

