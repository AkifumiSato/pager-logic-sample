export default ({ getPagerListMax20, getPagerListMax3 }) => {
  // test case1
  console.log(`length: 5, max: 20`)
  console.log(`center: 1`)
  console.log(getPagerListMax20(1))
  console.log(`center: 2`)
  console.log(getPagerListMax20(2))
  console.log(`center: 5`)
  console.log(getPagerListMax20(5))
  console.log(`center: 10}`)
  console.log(getPagerListMax20(10))
  console.log(`center: 18}`)
  console.log(getPagerListMax20(18))
  console.log(`center: 20}`)
  console.log(getPagerListMax20(20))

  // br
  console.log(``)

  // test case2
  console.log(`length: 5, max: 3`)
  console.log(`center: 1}`)
  console.log(getPagerListMax3(1))
  console.log(`center: 3}`)
  console.log(getPagerListMax3(3))
}
