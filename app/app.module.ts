import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { TicketDetailComponent } from './ticket-detail.component';

@NgModule({
  imports:      [ 
	BrowserModule,
	FormsModule
	],
  declarations: [ 
		AppComponent,
		TicketDetailComponent
		],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

