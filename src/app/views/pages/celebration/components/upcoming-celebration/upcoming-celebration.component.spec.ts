import { ComponentFixture, TestBed } from '@angular/core/testing'

import { UpcomingCelebrationComponent } from './upcoming-celebration.component'

describe('UpcomingCelebrationComponent', () => {
  let component: UpcomingCelebrationComponent
  let fixture: ComponentFixture<UpcomingCelebrationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingCelebrationComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(UpcomingCelebrationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
