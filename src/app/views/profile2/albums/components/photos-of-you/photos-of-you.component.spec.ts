import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PhotosOfYouComponent } from './photos-of-you.component'

describe('PhotosOfYouComponent', () => {
  let component: PhotosOfYouComponent
  let fixture: ComponentFixture<PhotosOfYouComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosOfYouComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PhotosOfYouComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
