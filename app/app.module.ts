import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';


import { AppComponent }   from './app.component';
import { TicketDetailComponent } from './ticket-detail.component';
import { TicketsComponent } from './ticket.component';
import { TicketService } from './ticket.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:      [ 
	BrowserModule,
	FormsModule,
	RouterModule.forRoot([
		{
			path: '',
			redirectTo: '/dashboard',
			pathMatch: 'full'
		},
		  {
		    path: 'tickets',
		    component: TicketsComponent
		  },
		  {
		    path: 'dashboard',
		    component: DashboardComponent
		  },
		])
	],
  declarations: [ 
		AppComponent,
		DashboardComponent,
		TicketDetailComponent,
		TicketsComponent
		],
  providers:    [ TicketService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

