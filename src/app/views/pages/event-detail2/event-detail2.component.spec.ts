import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EventDetail2Component } from './event-detail2.component'

describe('EventDetail2Component', () => {
  let component: EventDetail2Component
  let fixture: ComponentFixture<EventDetail2Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDetail2Component],
    }).compileComponents()

    fixture = TestBed.createComponent(EventDetail2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
