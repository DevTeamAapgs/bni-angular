import { ComponentFixture, TestBed } from '@angular/core/testing'

import { Profile2LayoutComponent } from './profile2-layout.component'

describe('Profile2LayoutComponent', () => {
  let component: Profile2LayoutComponent
  let fixture: ComponentFixture<Profile2LayoutComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profile2LayoutComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(Profile2LayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
