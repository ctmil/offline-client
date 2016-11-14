import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
        <nav class="navbar navbar-inverse navbar-fixed-top">
	      <div class="container">
	            <div id="navbar" class="collapse navbar-collapse">
		          <ul class="nav navbar-nav">
			      <li class="active"><a routerLink="/dashboard">Dashboard</a></li>
			      <li><a routerLink="/tickets">Tickets</a></li>
		          </ul>
	            </div>
	      </div>
	</nav>
	<div class="container">
	    <h1>{{title}}</h1>
	    <router-outlet></router-outlet>
	</div>
  `
})
export class AppComponent {
  title = 'Cliente off-line para Odoo';
}

