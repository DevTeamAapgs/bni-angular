import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DiscoverEventComponent } from './discover-event.component'

describe('DiscoverEventComponent', () => {
  let component: DiscoverEventComponent
  let fixture: ComponentFixture<DiscoverEventComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverEventComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DiscoverEventComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
