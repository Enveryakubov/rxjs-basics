//Polling
import { interval, fromEvent, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  takeUntil,
  pluck,
  switchMap,
  delay,
  map,
  mergeMap,
  finalize,
  filter,
  exhaustMap,
} from 'rxjs/operators';

const url = 'https://random.dog/woof.json';

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const img = document.querySelector('img');

const startClicked$ = fromEvent(startBtn, 'click');
const stopClicked$ = fromEvent(stopBtn, 'click');

startClicked$
  .pipe(
    exhaustMap(() =>
      interval(1000).pipe(
        switchMap(() =>
          from(fetch(url).then((res) => res.json())).pipe(
            map((val) => val.url),
            filter((val) => val.endsWith('.jpg'))
          )
        ),
        takeUntil(stopClicked$),
        finalize(() => console.log('stopped'))
      )
    )
  )
  .subscribe({
    next: (val) => (img.src = val),
  });
