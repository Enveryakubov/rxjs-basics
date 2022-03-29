import { from, fromEvent } from 'rxjs';
import { map, pluck, throttleTime, debounceTime } from 'rxjs/operators';

const progressBar = document.querySelector('.progressbar');

function calcScrollPercent(element) {
  const { scrollTop, scrollHeight, clientHeight } = element;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(
  debounceTime(30),
  map(({ target }) => calcScrollPercent(target.documentElement)),
  map((val) => Math.ceil(val))
);

progress$.subscribe((val) => (progressBar.style.width = `${val}%`));
