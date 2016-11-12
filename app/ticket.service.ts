import { Injectable } from '@angular/core';

import { Ticket } from './ticket';
import { TICKETS } from './mock-tickets';

@Injectable()
export class TicketService {
	getTickets(): Promise<Ticket[]> {
		return Promise.resolve(TICKETS)
		} // stub

	getTicket(id: number): Promise<Ticket> {
	  return this.getTickets()
             .then(tickets => tickets.find(ticket => ticket.id === id));
}

}
