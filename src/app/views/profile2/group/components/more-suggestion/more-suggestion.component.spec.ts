import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MoreSuggestionComponent } from './more-suggestion.component'

describe('MoreSuggestionComponent', () => {
  let component: MoreSuggestionComponent
  let fixture: ComponentFixture<MoreSuggestionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreSuggestionComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(MoreSuggestionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
