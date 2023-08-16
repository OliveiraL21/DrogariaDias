import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drogaria_dias';
  year: number = new Date().getUTCFullYear();

  constructor() {
    window.addEventListener('scroll', (event) => {
      const page = document.querySelector('html');
      page?.classList.add('page--scroll');
    });
  }
}
