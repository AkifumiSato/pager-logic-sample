import debug from './debugger'
import range from 'lodash/range'
import flow from 'lodash/fp/flow'
import take from 'lodash/fp/take'
import orderBy from 'lodash/orderBy'

const absSort = center => list => list.sort((a,b) => (Math.abs(center - a) < Math.abs(center - b) ? -1 : 1))

// 引数までの数列を生成する関数を返却
const getExpandList = (width, maxLimit, minLimit) => (center) => {
  const max = center + width >= maxLimit ? maxLimit : center + width
  const min = center - width < minLimit ? minLimit : center - width

  return flow(
    absSort(center),
    take(width),
    orderBy,
  )(range(min, max))
}

const getPagerListMax20 = getExpandList(5, 21, 0)
const getPagerListMax3 = getExpandList(5, 3, 0)
debug({ getPagerListMax20, getPagerListMax3 })
