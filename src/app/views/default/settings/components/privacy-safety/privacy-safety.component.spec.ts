import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PrivacySafetyComponent } from './privacy-safety.component'

describe('PrivacySafetyComponent', () => {
  let component: PrivacySafetyComponent
  let fixture: ComponentFixture<PrivacySafetyComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacySafetyComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PrivacySafetyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
