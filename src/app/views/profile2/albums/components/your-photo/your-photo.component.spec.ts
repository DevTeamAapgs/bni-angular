import { ComponentFixture, TestBed } from '@angular/core/testing'

import { YourPhotoComponent } from './your-photo.component'

describe('YourPhotoComponent', () => {
  let component: YourPhotoComponent
  let fixture: ComponentFixture<YourPhotoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourPhotoComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(YourPhotoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
