import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-counter-card',
  standalone: true,
  templateUrl: './counter-card.component.html',
  styleUrl: './counter-card.component.css',
})
export class CounterCardComponent {
  @Input() count = 0
  @Output() readonly increment = new EventEmitter<void>()
}
