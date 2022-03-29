import {
  Observable,
  fromEvent,
  of,
  range,
  from,
  interval,
  timer,
  concat,
  merge,
  EMPTY,
} from 'rxjs';
import {
  map,
  pluck,
  filter,
  reduce,
  take,
  tap,
  scan,
  takeUntil,
  distinctUntilChanged,
  debounceTime,
  sample,
  switchMap,
  mergeMap,
  concatMap,
  exhaustMap,
  startWith,
  endWith,
  catchError,
  delay,
  concatWith,
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
const observer = {
  next: (val) => console.log(val),
  error: (err) => console.log(err),
  complete: () => console.log('Completed'),
};

// of(1, 2, 3, 4, 5).subscribe(observer);

// range(1, 5).subscribe(observer);

// from([1, 2, 3, 4, 5]).subscribe(observer);
// from('Enver').subscribe(observer);

// from(fetch('https://jsonplaceholder.typicode.com/users')).subscribe(observer);

// interval(1000).subscribe(observer);

// timer(2000, 1000).subscribe(observer);

// OPERATORS

// MAP

// of(1, 2, 3, 4, 5)
//   .pipe(map((val) => 10 * val))
//   .subscribe(observer);

// const keyup$ = fromEvent(document, 'keyup');

// const keyCode$ = keyup$.pipe(map((val) => val.key));
// keyCode$.subscribe(observer);

// The same with

// const keyCodeWithPluck$ = keyup$.pipe(pluck('key'));
// keyCodeWithPluck$.subscribe(observer);

// FILTER

// const valuesBiggerThan3$ = of(1, 2, 3, 4, 5).pipe(filter((val) => val > 3));
// valuesBiggerThan3$.subscribe(observer);

// keyCode$
//   .pipe(
//     filter((val) => val === 'Enter'),
//     map((val) => 'Done!')
//   )
//   .subscribe(observer);

//REDUCE

//const numbers = [1, 2, 3, 4, 5];
// from(numbers)
//   .pipe(reduce((acc, val) => acc + val, 0))
//   .subscribe(console.log);

// interval(1000)
//   .pipe(
//     take(3),
//     tap(console.log),
//     reduce((acc, val) => acc + val, 0)
//   )
//   .subscribe(console.log);

//SCAN

// interval(1000)
//   .pipe(
//     take(3),
//     scan((acc, val) => acc + val, 0)
//   )
//   .subscribe(console.log);

// const users = [
//   { name: 'Enver', loggedIn: false, token: null },
//   { name: 'Enver', loggedIn: true, token: 'abc' },
//   { name: 'Enver', loggedIn: true, token: '123' },
// ];

// const state$ = from(users).pipe(scan((acc, curr) => ({ ...acc, ...curr }), {}));

// state$.pipe(pluck('name')).subscribe(console.log);

// takeUntil
// const counter$ = interval(1000);
// const click$ = fromEvent(document, 'click');

// counter$
//   .pipe(takeUntil(click$))
//   .subscribe({
//     next: (val) => console.log(val),
//     complete: () => console.log('You ve clicked the button!'),
//   });

// DISTINC  VALUES

// const numbers = [1, 1, 2, 2, 2, 3, 3, 3, 3, 4];
// from(numbers).pipe(distinctUntilChanged()).subscribe(console.log);

// TIME RELATED OPERATORS

// const click$ = fromEvent(document, 'click');
// const timer$ = interval(1000);

// click$.pipe(debounceTime(500)).subscribe(console.log);

// const input = document.querySelector('.input');
// fromEvent(input, 'keyup')
//   .pipe(
//     debounceTime(1000),
//     map((val) => val.target.value),
//     distinctUntilChanged()
//   )
//   .subscribe(console.log);

// SAMPLE

// timer$.pipe(sample(click$), take(5)).subscribe(console.log);

// AJAX

// const input = document.querySelector('.input');
// fromEvent(input, 'keyup')
//   .pipe(
//     debounceTime(1000),
//     map((val) => val.target.value),
//     distinctUntilChanged(),
//     switchMap((val) =>
//       ajax(`https://jsonplaceholder.typicode.com/users/${val}`)
//     ),
//     map((val) => val.response)
//   )
//   .subscribe(console.log);

// MergeMAP

// const clicks$ = fromEvent(document, 'click');
// const interval$ = interval(500);
// const mouseDown$ = fromEvent(document, 'mousedown');
// const mouseUp$ = fromEvent(document, 'mouseup');
// clicks$.pipe(mergeMap(() => interval$)).subscribe(console.log);

// mouseDown$
//   .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseUp$))))
//   .subscribe(console.log);

// START WITH
// END WITH

// Queue observable

const interval$ = interval(1000);
const delayed$ = EMPTY.pipe(delay(1000));

// concat(interval$.pipe(take(3)), interval$.pipe(take(5))).subscribe(console.log);

delayed$
  .pipe(
    concatWith(
      EMPTY.pipe(startWith('3...'), delay(1000)),
      EMPTY.pipe(startWith('2...'), delay(1000)),
      EMPTY.pipe(startWith('1...'), delay(1000)),
      EMPTY.pipe(startWith('GO !!!'), delay(1000))
    ),
    startWith('Let`s do it!')
  )
  .subscribe(console.log);
