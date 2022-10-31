import {
  map,
  switchMap,
  tap,
  take,
  first,
  last,
  filter,
  startWith,
  withLatestFrom,
  catchError,
  distinctUntilChanged,
} from 'rxjs/operators';
import { of, from, timer, interval, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// OF - CREATION OPERATOR ----------------------------------------------------------------------

// const arr = [1, 2, '3'];
// const arr$ = of(arr);
// arr$.subscribe((values) => console.log(`Emitted Values: `, values));

// FROM - CREATION OPERATOR --------------------------------------------------------------------

// const arr = [1, 2, 3];
// const arr$ = from(arr);
// arr$.subscribe((values) => console.log(`Emitted Values: `, values));

// const fromString$ = from("Hello");
// fromString$.subscribe((value) => console.log(`Emitted Values: `, value));

// const examplePromise = new Promise((resolve, reject) => {
//   return resolve({ message: 'testing async code' });
// });

// const promise$ = from(examplePromise);
// promise$.subscribe((value) => console.log(`Emitted Values: `, value));

//MAP - PIPE OPERATOR --------------------------------------------------------------------------

// const arr = [1, 2, 3];
// const fromArr$ = from(arr);
// fromArr$
//   .pipe(map((value) => value + 10))
//   .subscribe((value) => console.log(`Emitted Values: `, value));

// const examplePromise = new Promise((resolve, reject) => {
//   return resolve({ message: 'why hello there' });
// });

// const promise$ = from(examplePromise);
// promise$
//   .pipe(map((obj: any) => obj.message))
//   .subscribe((value) => console.log(`Emitted Values: `, value));

//SWITCHMAP - PIPE OPERATOR --------------------------------------------------------------------------
// let text = of('Check this');
// let case1 = text.pipe(switchMap((value) => of(value + ' out')));
// case1.subscribe((value) => {console.log(value);});

//TAP - PIPE OPERATOR --------------------------------------------------------------------------------
// const arr = [1, 2, 3];
// const fromArr$ = from(arr);
// fromArr$
//   .pipe(tap((value) => console.log('Received value: ', value)))
//   .subscribe((value) => console.log(`Emitted Values: `, value));

//TAKE - PIPE OPERATOR ---------------------------------------------------------------------------------
// const arr = [1, 2, 3];
// const fromArr$ = from(arr);
// fromArr$
//   .pipe(take(2))
//   .subscribe((value) => console.log(`Emitted Values: `, value));

//FIRST - PIPE OPERATOR ---------------------------------------------------------------------------------
// const arr = [1, 2, 3];
// const fromArr$ = from(arr);
// fromArr$
//   .pipe(first())
//   .subscribe((value) => console.log(`Emitted Values: `, value));

//LAST - PIPE OPERATOR ---------------------------------------------------------------------------------
// const arr = [1, 2, 3];
// const fromArr$ = from(arr);
// fromArr$
//   .pipe(last())
//   .subscribe((value) => console.log(`Emitted Values: `, value));

// FILTER - PIPE OPERATOR ------------------------------------------------------------------------------
// const source = from([1, 2, 3, 4, 5, 6, 7, 8]);
// const example = source.pipe(filter((num) => num % 2 === 0));
// example.subscribe((val) => console.log(`Even number: ${val}`));

// const source = from([
//   { name: 'Joe', age: 31 },
//   { name: 'Bob', age: 25 },
// ]);
// const example = source.pipe(filter((person) => person.age >= 30));
// example.subscribe((val) => console.log(`Over 30: ${val.name}`));

//STARTWITH PIPE OPERATOR ---------------------------------------------------------------------------------
// const source = of(1, 2, 3);
// const example = source.pipe(startWith(0));
// example.subscribe((val) => console.log(val));

// WITHLATESTFROM PIPE OPERATOR -----------------------------------------------------------------------------
// const source = interval(5000);
// const secondSource = interval(1000);
// const example = source.pipe(
//   withLatestFrom(secondSource),
//   map(([first, second]) => {
//     return `First Source (5s): ${first} Second Source (1s): ${second}`;
//   })
// );
// example.subscribe(val => console.log(val));

// AJAX CREATION OPERATOR ----------------------------------------------------------------------------------
// const githubUsers = `https://api.github.com/users?per_page=2`;
// const users = ajax(githubUsers);
// const subscribe = users.subscribe(
//   res => console.log(res),
//   err => console.error(err)
// );

//CATCH/CATCHERROR CREATION/PIPE OPERATOR -------------------------------------------------------------------
// const source = throwError('This is an error!');
// const example = source.pipe(catchError((val) => of(`I caught: ${val}`)));
// const subscribe = example.subscribe((val) => console.log(val));

//DISTINCTUNTILCHANGED PIPE OPERATOR ------------------------------------------------------------------------
// const source$ = from([1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3]);
// source$.pipe(distinctUntilChanged()).subscribe(console.log);

// const sampleObject = { name: 'Test' };
// const sampleObject2 = { name: 'Test2' };
// const source$ = from([sampleObject, sampleObject, sampleObject2, sampleObject]);
// source$.pipe(distinctUntilChanged()).subscribe(console.log);
