import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {

  ngOnInit(): void {
    document.body.style.overflow = 'hidden'; 
  }

  ngOnDestroy(): void {
    document.body.style.overflow = 'auto'; 
  }
}
