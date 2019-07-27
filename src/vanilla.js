import debug from './debugger'

const rangeListGenarator = (length, max) => (center) => Array
  .from({ length }, (v, i) => [ center + i, center - i])
  .flat()
  .filter((x, i, self) => self.indexOf(x) === i && x > 0 && x <= max)
  .sort((a,b) => (Math.abs(center - a) < Math.abs(center - b) ? -1 : 1))
  .filter((_, i) => i < 5)
  .sort((a, b) => (a > b ? 1 : -1))

const getPagerListMax20 = rangeListGenarator(5, 20)
const getPagerListMax3 = rangeListGenarator(5, 3)
debug({ getPagerListMax20, getPagerListMax3 })
