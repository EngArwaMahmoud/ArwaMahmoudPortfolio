import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills implements OnInit {
  constructor(private router: Router) {}

  skills = [
    { name: 'HTML', level: 95, icon: '🌐' },
    { name: 'CSS', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 88, icon: '⚙' },
    { name: 'TypeScript', level: 90, icon: '💻' },
    { name: 'Angular', level: 85, icon: '🅰️' },
    { name: 'C++', level: 90, icon: '🔧' },
    { name: 'Python', level: 95, icon: '🐍' },
    { name: 'OOP', level: 88, icon: '🧠' },
  ];

  disableScrollIfNeeded() {
    const isMobile = window.innerWidth <= 768; 
    const isSkillsPage = this.router.url.includes('/skills');

    if (isSkillsPage && !isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  ngOnInit(): void {
    this.disableScrollIfNeeded();
  }

  @HostListener('window:resize')
  onResize() {
    this.disableScrollIfNeeded();
  }

  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';
  }
}
