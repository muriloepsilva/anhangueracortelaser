import { Component, OnInit, HostListener } from '@angular/core';
import { Tab } from './utils/interfaces';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  currentUrl: string = '';
  isMobile: boolean = false;
  menuOpen: boolean = false;

  tabs: Tab[] = [
    { name: 'Home', path: '/', isActive: false },
    { name: 'Quem Somos', path: '/quem-somos', isActive: false },
    { name: 'Serviços', path: '/servicos', isActive: false },
    { name: 'Sustentabilidade', path: '/sustentabilidade', isActive: false },
    { name: 'Contato', path: '/contato', isActive: false },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkScreenSize();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.verifyActiveRoute(event.url);
      }
    });
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  verifyActiveRoute(currentPage: string) {
    this.tabs.forEach((tab) => (tab.isActive = tab.path === currentPage));
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
