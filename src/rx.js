import { from } from 'rxjs'
import { map, scan, take, takeLast } from 'rxjs/operators'

const absDeltaGenerator = function* (start, max, min) {
  let index = 0
  while (start + index + 1 <= max || start - index - 1 >= min) {
    index++
    if (start + index <= max) {
      yield start + index
    }
    if (start - index >= min) {
      yield start - index
    }
  }
}

const createPagerList = (center, max, min = 1) => from(absDeltaGenerator(center, max, min))
  .pipe(
    take(4),
    scan((acc, value) => [...acc, value], [ center ]),
    takeLast(1),
    map(list => list.sort((a, b) => (a > b ? 1 : -1))),
  )

// test
createPagerList(1, 20).subscribe(value => console.log(value))
createPagerList(2, 20).subscribe(value => console.log(value))
createPagerList(5, 20).subscribe(value => console.log(value))
createPagerList(10, 20).subscribe(value => console.log(value))
createPagerList(18, 20).subscribe(value => console.log(value))
createPagerList(20, 20).subscribe(value => console.log(value))

createPagerList(1, 3).subscribe(value => console.log(value))
createPagerList(3, 3).subscribe(value => console.log(value))

