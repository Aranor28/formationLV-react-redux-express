const a = { foo: 0, bar: 3, baz: 1, qux: 10 }

const b = Object
  .entries(a)
  .reduce((acc, [id, quantity]) => quantity - 1 <= 0 ? acc : ({ ...acc, [id]: quantity - 1 }), {})

console.log(b)
s