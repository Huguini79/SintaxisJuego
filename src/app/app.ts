import { Component, signal } from '@angular/core';
import { Preguntas } from './preguntas.component';

@Component({
  selector: 'app-root',
  imports: [Preguntas],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {
  readonly count = signal(0)

  increment() {
    this.count.update((value) => value + 1)
  }
}
