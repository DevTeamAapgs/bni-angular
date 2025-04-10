import { AfterViewInit, Component } from '@angular/core'
import 'zuck.js'

import { ContactComponent } from './components/contact/contact.component'
import { ContentComponent } from './components/content/content.component'
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar.component'
import { TopbarComponent } from './components/topbar/topbar.component'

declare var Zuck: any

@Component({
    selector: 'app-classic',
    imports: [
        TopbarComponent,
        LeftsidebarComponent,
        ContentComponent,
        ContactComponent,
    ],
    templateUrl: './classic.component.html',
    styles: ``
})
export class ClassicComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initZuck()
    this.loadSwiper()
  }

  loadSwiper(): Promise<void> {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/swiper/swiper-bundle.min.js'
      script.onload = () => resolve()
      document.head.appendChild(script)
    })
  }

  initZuck() {
    const timestamp = () => {
      let timeIndex = 0
      const shifts = [
        35,
        60,
        60 * 3,
        60 * 60 * 2,
        60 * 60 * 25,
        60 * 60 * 24 * 4,
        60 * 60 * 24 * 10,
      ]

      const now = new Date()
      const shift = shifts[timeIndex++] || 0
      const date = new Date(now.getTime() - shift * 1000)

      return date.getTime() / 1000
    }

    new Zuck('stories', {
      backNative: false,
      previousTap: true,
      skin: 'snapgram',
      autoFullScreen: false,
      avatars: true,
      list: false,
      openEffect: true,
      cubeEffect: true,
      backButton: true,
      rtl: false,
      localStorage: true,
      stories: [
        Zuck.buildTimelineItem(
          'user-1',
          'assets/images/post/1by1/02.jpg',
          'Judy Nguyen',
          '',
          timestamp(),
          [
            [
              'user1-story1',
              'photo',
              5,
              'assets/images/albums/01.jpg',
              '',
              '',
              false,
              false,
              timestamp(),
            ],
            [
              'user1-story2',
              'video',
              0,
              'assets/images/videos/video-call.mp4',
              '',
              '',
              false,
              false,
              timestamp(),
            ],
          ]
        ),
        Zuck.buildTimelineItem(
          'user-2',
          'assets/images/post/1by1/03.jpg',
          'Billy Vasquez',
          '',
          timestamp(),
          [
            [
              'user2-story1',
              'photo',
              5,
              'assets/images/albums/03.jpg',
              '',
              '',
              false,
              false,
              timestamp(),
            ],
          ]
        ),
        Zuck.buildTimelineItem(
          'user-3',
          'assets/images/post/1by1/04.jpg',
          'Amanda Reed',
          '',
          timestamp(),
          [
            [
              'user3-story1',
              'photo',
              5,
              'assets/images/albums/04.jpg',
              '',
              '',
              false,
              false,
              timestamp(),
            ],
          ]
        ),
        Zuck.buildTimelineItem(
          'user-4',
          'assets/images/post/1by1/05.jpg',
          'Lori Stevens',
          '',
          timestamp(),
          [
            [
              'user4-story1',
              'photo',
              5,
              'assets/images/albums/05.jpg',
              '',
              '',
              false,
              false,
              timestamp(),
            ],
          ]
        ),
        Zuck.buildTimelineItem(
          'user-5',
          'assets/images/post/1by1/06.jpg',
          'Samuel Bishop',
          '',
          timestamp(),
          [
            [
              'user5-story1',
              'photo',
              5,
              'assets/images/albums/06.jpg',
              '',
              '',
              false,
              false,
              timestamp(),
            ],
          ]
        ),
        Zuck.buildTimelineItem(
          'user-6',
          'assets/images/post/1by1/07.jpeg',
          'Joan Wallace',
          '',
          timestamp(),
          [
            [
              'user6-story1',
              'photo',
              5,
              'assets/images/albums/06.jpg',
              '',
              '',
              false,
              false,
              timestamp(),
            ],
          ]
        ),
        {
          id: 'user-7',
          photo: 'assets/images/albums/05.jpg',
          name: 'Carolyn Ortiz',
          link: '',
          lastUpdated: timestamp(),
          seen: false,
          items: [
            {
              id: 'user7-story1',
              type: 'photo',
              length: 3,
              src: 'assets/images/albums/05.jpg',
              preview: '',
              link: '',
              linkText: '',
              time: timestamp(),
              seen: false,
            },
          ],
        },
      ],
    })
  }

  sidebarToggleStart() {
    const sidebar = document.getElementsByClassName('.sidebar-start-toggle')
    if (sidebar) {
      document.body.classList.toggle('sidebar-start-enabled')
    }
  }
}
