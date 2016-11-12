import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';


import { AppComponent }   from './app.component';
import { TicketDetailComponent } from './ticket-detail.component';
import { TicketsComponent } from './ticket.component';
import { TicketService } from './ticket.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports:      [ 
	BrowserModule,
	FormsModule,
	AppRoutingModule
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

