import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1><h2>{{ticket.name}} details!</h2>'
})

export class AppComponent {
	title = 'Cliente Off-line para Odoo';
	ticket = '0001-12345678';
 }
export class Ticket {
	id: number;
	name: string;
}

ticket: Ticket = {
	id: 1,
	name: '0001-12345678'
	}
