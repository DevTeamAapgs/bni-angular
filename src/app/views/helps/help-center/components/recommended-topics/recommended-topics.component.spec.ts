import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RecommendedToicsComponent } from './recommended-topics.component'

describe('RecommendedToicsComponent', () => {
  let component: RecommendedToicsComponent
  let fixture: ComponentFixture<RecommendedToicsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedToicsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(RecommendedToicsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
