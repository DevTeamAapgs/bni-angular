import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SignInAdvanceComponent } from './sign-in-advance.component'

describe('SignInAdvanceComponent', () => {
  let component: SignInAdvanceComponent
  let fixture: ComponentFixture<SignInAdvanceComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInAdvanceComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SignInAdvanceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
