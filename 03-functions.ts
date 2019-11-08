// #########################
// ~~~ Learn TypeScript ~~~
// 03. Function Types
// #########################

// 💡 A function without a type declaration
// function getName(user) {     // (!) implicit parameter type `any`
//   return user.name
// }

// const res = getName({ name: "John" })
// const res = getName({ hello: 'hsdfaf' })

// 💡 No need to provide the return value
// function getName(user: { name: string }): string {
//   return user.name
// }
// console.log(getName({ name: "John" }))

// 💡 Variable declaration
// const s: string = "John"
// const getName: (user: { name: string }) => string =
//   function (user) { return user.name }

// 💡 Using an interface
// interface getNameF {
//   (user: { name: string }): string
// }
// const getName: getNameF = (x) => x.name

// // 💡 Number of arguments matter
// getName({ name: "John"}, 10)

// 💡 Optional arguments
// function getName(user: { name: string }, surname?: string): string {
//   return user.name + surname
// }
// getName({ name: 'Xxx' })
// getName({ name: 'Xxx' }, "Extra")

// 💡 REST params
// function fullName(name: string, ...otherNames: string[]) {
//   return [name, ...otherNames].join(" ")
// }
// console.log(fullName("Erich", "Maria", "Remarque"))

// 💡 Overloading a function type.
// Type declaration / implementation separation
// function double(a: number): number;
// function double(a: string): string;
// function double(a: number | string) {
//   if (typeof a === 'number') {
//     return a * 2;
//   } else {
//     return `${a}${a}`
//   }
// }

// const res = double(4)
// const res = double("string")
