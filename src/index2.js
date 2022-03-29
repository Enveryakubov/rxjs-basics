import { interval, fromEvent, merge, EMPTY } from 'rxjs';
import {
  map,
  scan,
  startWith,
  endWith,
  take,
  takeWhile,
  takeUntil,
  switchMap,
  sample,
  repeat,
} from 'rxjs/operators';

const counter = document.querySelector('.counter');
const msg = document.querySelector('.message');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

const startClick$ = fromEvent(startBtn, 'click');
const startDBLClick$ = fromEvent(startBtn, 'dblclick');
const stopClick$ = fromEvent(stopBtn, 'click');

const START_VALUE = 10;

merge(startClick$.pipe(map(() => true)), stopClick$.pipe(map(() => false)))
  .pipe(
    switchMap((val) => {
      return val ? interval(1000) : EMPTY;
    }),
    map((val) => -1),
    scan((acc, curr) => acc + curr, START_VALUE),
    startWith(START_VALUE),
    takeWhile((val) => val >= 0)
  )
  .subscribe({
    next: (val) => (counter.innerHTML = val),
    complete: () => {
      //   counter.style.display = 'none';
      msg.style.display = 'inherit';
    },
  });
