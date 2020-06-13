const fp = require('lodash/fp')
const { Maybe, Container } = require('./support')

// 练习 1

let maybe = Maybe.of([5, 6, 1])
let ex1 = maybe.map(fp.map(fp.add(1)))
console.log( ex1)

// 练习 2

let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
let ex2 = xs.map(fp.first)
console.log(ex2)

// 练习 3

let safeProp = fp.curry(function (x, o) {
  return Maybe.of(o[x])
})
let user = { id: 2, name: 'Albert' }
let ex3 = user => safeProp('name', user).map(fp.first)
console.log(ex3(user))

// 练习 4

let ex4 = n => Maybe.of(n).map(parseInt)
console.log(ex4('123'))
