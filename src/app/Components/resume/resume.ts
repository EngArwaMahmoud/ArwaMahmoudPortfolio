import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class Resume {

ngAfterViewInit() {
  AOS.init();
}

onTabChange(tabName: string) {
  if (tabName === 'resume') {
    setTimeout(() => {
      AOS.refresh(); // عشان يعيد حساب الأنيميشن
    }, 100);
  }
}

}
