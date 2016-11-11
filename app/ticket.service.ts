import { Injectable } from '@angular/core';

import { Ticket } from './ticket';
import { TICKETS } from './mock-tickets';

@Injectable()
export class TicketService {
	getTickets(): Promise<Ticket[]> {
		return Promise.resolve(TICKETS)
		} // stub
}
