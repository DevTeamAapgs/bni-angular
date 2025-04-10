import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FrdGrpComponent } from './frd-grp.component'

describe('FrdGrpComponent', () => {
  let component: FrdGrpComponent
  let fixture: ComponentFixture<FrdGrpComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrdGrpComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FrdGrpComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
