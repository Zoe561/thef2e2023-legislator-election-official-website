import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // @ViewChild('content') content?: ElementRef;
  menuVisible = false;
  menuClick = false;
  menuList = ["小額捐款", "候選主張", "最新活動", "政策議題", "服務信箱"]
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // 檢查視窗的新尺寸並適當地設置 menuVisible
    if (event.target.innerWidth > 1024) {
      this.menuVisible = true;
      this.menuClick = false;
    } else {
      this.menuVisible = false;

    }
  }
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    this.menuClick = true;
  }

  closeBurLayer() {
    this.menuClick = false;
  }
}
