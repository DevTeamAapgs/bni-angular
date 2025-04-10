import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RecentleAddedComponent } from './recentle-added.component'

describe('RecentleAddedComponent', () => {
  let component: RecentleAddedComponent
  let fixture: ComponentFixture<RecentleAddedComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentleAddedComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(RecentleAddedComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
