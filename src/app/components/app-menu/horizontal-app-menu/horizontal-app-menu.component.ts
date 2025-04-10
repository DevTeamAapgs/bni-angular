import { Component, Input, TemplateRef } from '@angular/core'
import {
  NgbCollapseModule,
  NgbDropdownModule,
  NgbOffcanvas,
} from '@ng-bootstrap/ng-bootstrap'
import { NavigationEnd, Router, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { filter } from 'rxjs'
import { MENU_ITEMS, MenuItemType } from '@/app/common/menu-items'
import { basePath, credits } from '@/app/common/constants'
import { MenuService } from '@/app/helpers/menu'
import { ProfileDropdownComponent } from '../../profile-dropdown/profile-dropdown.component'
import { FormBuilder } from '@angular/forms'

@Component({
    selector: 'app-horizontal-app-menu',
    imports: [
        NgbDropdownModule,
        RouterModule,
        CommonModule,
        NgbCollapseModule,
        ProfileDropdownComponent,
        RouterModule
    ],
    templateUrl: './horizontal-app-menu.component.html',
    styles: ``
})
export class HorizontalAppMenuComponent {
  @Input() showSearch?: boolean
  @Input() showIcon?: boolean
  @Input() headerClass?: string
  @Input() navClass?: string
  @Input() containerClass?: boolean
  @Input() navbarNav?: boolean
  credits = credits
  isCollapsed = true
  menuItems = MENU_ITEMS
  activeMenuItems: string[] = []
  trimmedURL = location?.pathname?.replaceAll(
    basePath !== '' ? basePath + '/' : '',
    '/'
  )
  modalReference:any;
  allNotifications: any


  constructor(
    private menuService: MenuService,
    private router: Router,private formBuild:FormBuilder ,private offcanvasService: NgbOffcanvas
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.trimmedURL = this.router.url
        this.initActiveMenu()
      })
    this.initActiveMenu()
  }

  hasSubmenu(menu: MenuItemType) {
    return menu.children ? true : false
  }

  initActiveMenu(): void {
    const matchingMenuItem = this.menuService.getMenuItemFromURL(
      this.menuItems,
      this.trimmedURL
    )
    if (matchingMenuItem) {
      const activeMt = this.menuService.findMenuItem(
        this.menuItems,
        matchingMenuItem.key
      )
      if (activeMt) {
        this.activeMenuItems = [
          activeMt.key,
          ...this.menuService.findAllParent(this.menuItems, activeMt),
        ]
      }
    }
  }

  getActiveClass(item: MenuItemType) {
    return this.activeMenuItems && this.activeMenuItems.includes(item.key)
      ? ' active'
      : ''
  }

   openTemplate(template:TemplateRef<null>, data?:any,className:string ='lead-canvas'){
        
        this.modalReference = this.offcanvasService.open(template, {
          animation: true,
          position: "end",
          backdrop: "static",
          panelClass: className
        });
    
        if (data) {
          this.allNotifications = data;
        }
      }

      closeModel(){
        this.modalReference.close();
      }
}
