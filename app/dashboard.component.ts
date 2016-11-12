import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { TicketService } from './ticket.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
})

export class DashboardComponent implements OnInit {

  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketService.getTickets()
      .then(tickets => this.tickets = tickets.slice(1, 5));
  }
}
