import { Component, HostListener, OnInit, ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  imports: [CommonModule]
})
export class About implements OnInit {
  students: number = 0;
  kids: number = 0;
  hours: number = 0;
  workshops: number = 0;

  animateCounts() {
    this.animateValue('students', 0, 200, 1500);
    this.animateValue('kids', 0, 100, 1500);
    this.animateValue('hours', 0, 180, 1500);
    this.animateValue('workshops', 0, 5, 1500);
  }

  animateValue(prop: keyof About, start: number, end: number, duration: number) {
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      (this as any)[prop] = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  images: string[] = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img4.jpg',
    'assets/img5.jpg',
    'assets/img6.jpg',
    'assets/img7.jpg',
  ];

  currentIndex = 0;
  isVisible = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.animateCounts();
    setInterval(() => {
      this.nextSlide();
    }, 3000); // كل 3 ثواني
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const section = this.el.nativeElement.querySelector('.gallery-section');
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      this.isVisible = true;
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

}
