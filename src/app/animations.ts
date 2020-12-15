import { trigger, style, transition, animate, state, stagger, query, keyframes } from '@angular/animations';

export let animobjectifs = trigger('animobjectifs', [
  state('void', style({ opacity: 0 })),

  transition(':enter, :leave', [
    animate(300)
  ])
])

export let objectifText = trigger('objectifText', [
  state('void', style({ opacity: 0 })),

  transition(':enter, :leave', [
    animate(2000)
  ])
])

export let animObject = trigger('animObject' ,[
  transition ( '*=>*' ,[
  query(':enter', style({opacity: 0}), {optional: true}),
  query(':enter', stagger('300ms',[ animate ( '.6s ease-in' , keyframes ([
  style({opacity: 0, transform: 'translateY(-75%)', offset: 0}), style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
  style({opacity: 1, transform: 'translateY(0)', offset: 1}), ]))]),{optional: true})
  ]) 
])