import { range } from 'rxjs'
import { filter, map } from 'rxjs/operators'

const rangeGenerator = function* (start, limit) {
  while (start <= limit) {
    yield start++
  }
}

const nearPage = (width, maxLimit, minLimit = 0) => value => {
  const min = value - width < minLimit ? minLimit : value - width
  const max = min + (width * 2 + 1) > maxLimit ? maxLimit : min + (width * 2 + 1)
  return Array.from([...rangeGenerator(min, max)])
    .filter((_, i) => i < 5)
}

const createPagerList = ({ max, min = 0, width }) => {
  const getPagerList = nearPage(width, max)

  console.log(getPagerList(0))
  console.log(getPagerList(1))
  console.log(getPagerList(19))
  console.log(getPagerList(20))

  return range(min, max)
    .pipe(
      map(value => ({
        center: value + 1,
        list: getPagerList(value + 1),
      })),
    )
}

const pagerList$ = createPagerList({
  max: 20,
  width: 2,
})

const getFilteredPageList = value => pagerList$.pipe(
  filter(({ center }) => center === value)
)

getFilteredPageList(20).subscribe(value => console.log(value.list))
// pagerList$.subscribe(value => console.log(value))


