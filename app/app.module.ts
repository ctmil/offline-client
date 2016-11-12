import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';


import { AppComponent }   from './app.component';
import { TicketDetailComponent } from './ticket-detail.component';
import { TicketsComponent } from './ticket.component';
import { TicketService } from './ticket.service';

@NgModule({
  imports:      [ 
	BrowserModule,
	FormsModule,
	RouterModule.forRoot([
		  {
		    path: 'tickets',
		    component: TicketsComponent
		  }
		])
	],
  declarations: [ 
		AppComponent,
		TicketDetailComponent,
		TicketsComponent
		],
  providers:    [ TicketService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

