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
  menuList = [{ id: '#donate', name: "小額捐款" }, { id: '#mention', name: "候選主張" }, { id: '#news', name: "最新活動" }, { id: '#issue', name: "政策議題" }, { id: '#serveEmail', name: "服務信箱" }]
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
