import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PostVideoDetailComponent } from './post-video-detail.component'

describe('PostVideoDetailComponent', () => {
  let component: PostVideoDetailComponent
  let fixture: ComponentFixture<PostVideoDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostVideoDetailComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PostVideoDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
