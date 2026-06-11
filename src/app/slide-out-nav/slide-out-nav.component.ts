import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-slide-out-nav',
  standalone: true,
  imports: [],
  templateUrl: './slide-out-nav.component.html',
  styleUrl: './slide-out-nav.component.scss',
  animations: [
    trigger('slideDrawer', [
      state('leftOpen', style({transform: 'translateX(0%)'})),
      state('leftClosed', style({transform: 'translateX(-100%)'})),
      transition('leftClosed <=> leftOpen', animate('300ms cubic-bezier(0.4,0,0.2,1)')),

      state('rightOpen', style({transform: 'translateX(0%)'})),
      state('rightClosed', style({transform: 'translateX(100%)'})),
      transition('rightClosed <=> rightOpen', animate('300ms cubic-bezier(0.4,0,0.2,1)')),

      state('topOpen', style({transform: 'translateY(0%)'})),
      state('topClosed', style({transform: 'translateY(-100%)'})),
      transition('topClosed <=> topOpen', animate('300ms cubic-bezier(0.4,0,0.2,1)')),

      state('bottomOpen', style({transform: 'translateY(0%)'})),
      state('bottomClosed', style({transform: 'translateY(100%)'})),
      transition('bottomClosed <=> bottomOpen', animate('300ms cubic-bezier(0.4,0,0.2,1)')),
    ])
  ]
})
export class SlideOutNavComponent {
  @Input() position: 'left' | 'right' | 'top' | 'bottom' = 'left';
  @Input({transform: booleanAttribute}) isOpen = false;
  @Input() className?: string;
  @Input() width: string = '300px';
  @Input() height: string = '100vh';
  @Output() close = new EventEmitter<void>();

  get animationState() {
    return this.position + (this.isOpen ? 'Open' : 'Closed');
  }

  onBackdropClick() {
    this.close.emit();
  }

  onHamburgerClick() {
    this.close.emit();
  }
}
