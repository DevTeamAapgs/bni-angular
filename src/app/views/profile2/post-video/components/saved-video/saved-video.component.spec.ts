import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SavedVideoComponent } from './saved-video.component'

describe('SavedVideoComponent', () => {
  let component: SavedVideoComponent
  let fixture: ComponentFixture<SavedVideoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedVideoComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SavedVideoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
