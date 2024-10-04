import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { DestinationComponent } from './components/destination/destination.component';
import { LoginComponent } from "./components/login/login.component";
import { SearchEventComponent } from "./components/search-event/search-event.component";
import { TicketsComponent } from "./components/tickets/tickets.component";
import { LikeComponent } from "./components/like/like.component";
import { EventsComponent } from "./components/events/events.component";
import { LocationComponent } from "./components/location/location.component";
import { CapacityComponent } from "./components/capacity/capacity.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { PopularCitiesComponent } from "./components/popular-cities/popular-cities.component";
import { CarouselComponent } from "./components/carousel/carousel.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent, DestinationComponent, LoginComponent, SearchEventComponent, TicketsComponent, LikeComponent, EventsComponent, LocationComponent, CapacityComponent, SignUpComponent, PopularCitiesComponent, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Eventive';
}
