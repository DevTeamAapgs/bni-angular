import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SignUpAdvanceComponent } from './sign-up-advance.component'

describe('SignUpAdvanceComponent', () => {
  let component: SignUpAdvanceComponent
  let fixture: ComponentFixture<SignUpAdvanceComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpAdvanceComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SignUpAdvanceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
