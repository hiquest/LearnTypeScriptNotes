// #########################
// ~~~ Learn TypeScript ~~~
// 02. Objects, interfaces and type aliases
// #########################

// 💡 Object types: the default behaviour
// => TypeScript infers the types from the provided values
// const obj = {
//     name: 'John',
//     age: 25,
// }
// obj.address = ""  // ⚠️ `address` does not exist on type

// 💡 Providing type information
// const obj: {
//     name: string,
//     age: number,
//     address?: string,  // optional parameter
// } = {
//     name: 'John',
//     age: 25,
// }
// obj.address = "my address"

// 💡 Interfaces
// interface IPerson {
//   name: string,
//   age: number,
//   address?: string,
// }

// const obj: IPerson = { name: "John", age: 28 }

// 💡 Type aliases
// type IPerson = {
//     name: string,
//     age: number,
//     address?: string,
// } | []

// const obj: IPerson = []

// type Keys = "name" | "address"
// type IPerson = {
//   [key in Keys]: string
// }
// const obj: IPerson = { name: 'John', address: "address" }

// 💡 Read-only properties: a way to ensure immutability
// interface IPerson {
//     readonly name: string,
//     readonly age: number,
//     readonly address?: string,
// }

// const obj: IPerson = { name: "John", age: 25 }
// obj.age = 20  // ⚠️ Can not assign a read-only property