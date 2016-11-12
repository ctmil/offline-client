import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { TicketService } from './ticket.service';
import { Ticket } from './ticket';

@Component({
  moduleId: module.id,
  selector: 'my-ticket-detail',
  templateUrl: 'ticket-detail.component.html',
})

export class TicketDetailComponent implements OnInit {
	@Input()
	  ticket: Ticket;

	constructor(
	  private ticketService: TicketService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

	ngOnInit(): void {
	  this.route.params.forEach((params: Params) => {
	    let id = +params['id'];
	    this.ticketService.getTicket(id)
	      .then(ticket => this.ticket = ticket);
	  });
	}

	goBack(): void {
	  this.location.back();
	}

}

