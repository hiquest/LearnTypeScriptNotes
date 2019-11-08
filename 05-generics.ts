// #########################
// ~~~ Learn TypeScript ~~~
// 05. Generics
// #########################

// 💡 Generics to types are what arguments to functions

// 💡 Array of strings
// const names: string[] = []
// const names: Array<string> = []
// names.push(5)  // ️️️️(!) ️️Argument of type '5' is not assignable to parameter of type 'string'

// 💡 How to implement `map`?
// function map<T, K>(arr: T[], mapper: (arg: T) => K) {
//   const res: Array<K> = []
//   arr.forEach((el) => {
//     res.push(mapper(el))
//   })
//   return res
// }

// const res = map([1, 2, 3], (x) => x * x)

// 💡 Generic types
// type User<T extends string | string[]> = {
//   name: T
// }

// const john: User<string> = { name: 'John' }
// const erich: User<string> = {
//   name: ['Erich', 'Maria', 'Remarch']  // (!) Type 'string[]' is not assignable to type 'string'
// }
// const erich: User<string[]> = {
//   name: ['Erich', 'Maria', 'Remarch']  // 👍
// }

// 💡Parametrized type with default generic type
// type User<T extends string | [] = string> = {
//   name: T
// }

// const john: User = { name: "John" }

// 💡 Generic classes
// class ValueWrapper<T> {
//   constructor(private value: T) {}
//   getValue() {
//     return this.value
//   }
// }

// const wrapped = new ValueWrapper(10)
// const num: number = wrapped.getValue()

// ##############
// 🏋️Exercises 🏋️
// ##############

// 1. Implement the `filter` function
// function filter {
// TODO: Implement me
// }
// const res1 = filter([-1, 2, 3, 4], x => x > 0)  // should be of type `number`
// const res2 = filter(['a', 'abc', 'abcde'], x => x.length > 1)  // should be of type `string`

// 2. Implement a generic class called `Command<T>` that takes a function, runs it and returns the result
// class Command<T, K> {
//   // TODO: implement me
// }
// const command = new Command((x) => x * x, [5])
// const res = command.run()  // should be of type `number`