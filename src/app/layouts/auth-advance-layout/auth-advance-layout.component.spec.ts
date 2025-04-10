import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AuthAdvanceLayoutComponent } from './auth-advance-layout.component'

describe('AuthAdvanceLayoutComponent', () => {
  let component: AuthAdvanceLayoutComponent
  let fixture: ComponentFixture<AuthAdvanceLayoutComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthAdvanceLayoutComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AuthAdvanceLayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
