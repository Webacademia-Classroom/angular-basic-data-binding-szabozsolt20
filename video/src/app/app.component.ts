import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isUnchanged = true;

  bindingInputValue = 'Sarah';

  getDOMPropertyValue(): void {
    console.warn('DOM property value: ' + this.bindingInputValue);
  }

  setBindingInputValue(ev: Event): void {
    this.bindingInputValue = (ev.target as HTMLInputElement).value;
    this.isUnchanged = false;
  }

  working(): any {
    console.warn('Test Button works!');
  }

}
