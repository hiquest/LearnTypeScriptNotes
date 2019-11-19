// #########################
// ~~~ Learn TypeScript ~~~
// 05. GENERICS
// #########################

// #####################################################
// 💡 Most common usages of generics: An array of things
// #####################################################
// const names: string[] = []
// const names: Array<string> = []
// names.push('asdfasdf')
// names.push(5)  // ️️️️(!) ️️Argument of type '5' is not assignable to parameter of type 'string'
// const res = names[0]  // string

// #########################
// 💡 Generic types
// #########################
// - `extends` when you want to limit what type can it be
// - `= String` specifies the default generic type (when no generic is provided)
// type User<T extends string | string[] = String> = {
//   name: T
// }
// const john: User<string> = { name: 'John' }
// const erich: User<string> = {
//   name: ['Erich', 'Maria', 'Remarch']  // (!) Type 'string[]' is not assignable to type 'string'
// }
// const erich: User<string[]> = {
//   name: ['Erich', 'Maria', 'Remarch']  // 👍
// }

// #########################
// 💡 Generics with functions
// #########################
// function value<T>(x: T) {
//   return () => x
// }

// const five = value(5)  // is of type () => number
// const five = value("string")  // is of type () => string

// #########################
// 💡 Multiple generic types functions
// #########################
// function map<T, K>(arr: T[], mapper: (arg: T) => K) {
//     const res: K[] = []
//     arr.forEach(el => res.push(mapper(el)))
//     return res
// }

// const res = map(['1', '2', '3'], (x) => x * x)  // array of numbers

// #########################
// 💡 Generic classes
// #########################
// class ValueWrapper<T> {
//   constructor(private value: T) {}
//   getValue() {
//     return this.value
//   }
// }

// const wrapped = new ValueWrapper(5)
// const num = wrapped.getValue()

// ##############
// 🏋️Exercises 🏋️
// ##############

// 1. Implement the `filter` function
// function filter {
//   // TODO: Implement me
// }
// const res1 = filter([-1, 2, 3, 4], x => x > 0)  // should be of type `number`
// const res2 = filter(['a', 'abc', 'abcde'], x => x.length > 1)  // should be of type `string`

// 2. Implement a generic class called `Command<T>` that takes a function, runs it and returns the result
// class Command<T, K> {
//   // TODO: implement me
// }
// const command = new Command((x) => x * x, [5])
// const res = command.run()  // should be of type `number`