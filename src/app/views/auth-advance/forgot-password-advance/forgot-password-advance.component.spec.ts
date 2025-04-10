import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ForgotPasswordAdvanceComponent } from './forgot-password-advance.component'

describe('ForgotPasswordAdvanceComponent', () => {
  let component: ForgotPasswordAdvanceComponent
  let fixture: ComponentFixture<ForgotPasswordAdvanceComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgotPasswordAdvanceComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ForgotPasswordAdvanceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
