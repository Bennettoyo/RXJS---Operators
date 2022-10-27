import { map, switchMap, tap } from 'rxjs/operators';
import { of, from, timer, interval } from 'rxjs';

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
const arr = [1, 2, 3];
const fromArr$ = from(arr);
fromArr$
  .pipe(tap((value) => console.log('Received value: ', value)))
  .subscribe((value) => console.log(`Emitted Values: `, value));
