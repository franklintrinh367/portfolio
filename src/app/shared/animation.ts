import { trigger, style, state, transition, animate } from "@angular/animations";

export function scale() {
    return trigger('scale', [
        state('true', style({
            transform : 'rotate(0) scale(0.7)'
        })),

        state('false', style({
            transform: 'rotate(360deg)'
        })),

        transition('true <=> false', animate('1s ease')),
    ])
}