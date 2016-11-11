import { Component } from '@angular/core';

export class Ticket {
	id: number;
	name: string;
}

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
		<h2>{{ticket.name}} details!</h2>
		<div><label>id: </label>{{ticket.id}}</div>
		<div>
			<label>name: </label>
			<input [(ngModel)]="ticket.name" placeholder="name">
		</div>`
})

export class AppComponent {
	title = 'Cliente Off-line para Odoo';
	/* ticket = '0001-12345678'; */
	ticket: Ticket = {
		id: 1,
		name: '0001-87654321'
		};
	}

