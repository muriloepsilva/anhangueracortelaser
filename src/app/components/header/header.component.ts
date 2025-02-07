import { Component, OnInit } from '@angular/core';
import { Tab } from './utils/interfaces';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  currentUrl: string = '';
  tabs: Tab[] = [
    {
      name: 'Home',
      path: '/',
      isActive: false,
    },
    {
      name: 'Quem Somos',
      path: '/quem-somos',
      isActive: false,
    },
    {
      name: 'Serviços',
      path: '/servicos',
      isActive: false,
    },
    {
      name: 'Sustentabilidade',
      path: '/sustentabilidade',
      isActive: false,
    },
    {
      name: 'Contato',
      path: '/contato',
      isActive: false,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentPath = event.url;
        this.verifyActiveRoute(currentPath);
      }
    });
  }

  verifyActiveRoute(currentPage: string) {
    this.tabs.forEach((tab) => (tab.isActive = tab.path === currentPage));
  }
}
