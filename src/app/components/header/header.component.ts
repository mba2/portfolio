import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  private isMenuOpened = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {}

  private toogleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
