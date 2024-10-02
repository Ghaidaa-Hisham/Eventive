import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsResultsComponent } from './events-results.component';

describe('EventsResultsComponent', () => {
  let component: EventsResultsComponent;
  let fixture: ComponentFixture<EventsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
