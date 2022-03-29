import { fromEvent, combineLatest, of } from 'rxjs';
import {
  forkJoin,
  map,
  filter,
  delay,
  mergeMap,
  tap,
  share,
} from 'rxjs/operators';

const amount = document.querySelector('#amount');
const rate = document.querySelector('#rate');
const length = document.querySelectorAll('.length');
const result = document.querySelector('#result');

function calcMorgage(interest, amount, length) {
  const calcInterest = interest / 1200;
  const total =
    (amount * calcInterest) / (1 - Math.pow(1 / (1 + calcInterest), length));
  return total.toFixed(2);
}

const toEventStream = (element) => {
  return fromEvent(element, 'input').pipe(
    map((val) => parseFloat(val.target.value)),
    tap(console.log)
  );
};
//Streams
const amount$ = toEventStream(amount);
const rate$ = toEventStream(rate);
const length$ = toEventStream(length);

const saveResponse = (amount) => {
  return of(amount).pipe(delay(1000));
};

const calcResult$ = combineLatest(amount$, rate$, length$).pipe(
  map(([amount, rate, length]) => calcMorgage(rate, amount, length)),
  tap(console.log),
  filter((val) => !isNaN(val)),
  share()
);

calcResult$.subscribe((val) => (result.innerHTML = val));

calcResult$.pipe(mergeMap((val) => saveResponse(val))).subscribe();
