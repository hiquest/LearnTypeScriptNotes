// #########################
// ~~~ Learn TypeScript ~~~
// 06. Compiler Options
// #########################

// Where to look for compiler arguments: https://www.typescriptlang.org/docs/handbook/compiler-options.html

// 💡 always aim for a stricter setup. New poject: make it as strict as possible, legacy projects: start with vague and then adjust, and make it stricter.

// #################
// 💡 Strict checks
// #################
//                                     --|
// --noImplicitAny                       |
// --strictNullChecks                    |
// --strictBindCallApply                 |
// --alwaysStrict                        | => --strict
// --strictFunctionTypes                 |
// --strictPropertyInitialization        |
// --noImplicitThis                      |
//                                     --|
// --noImplicitReturns
// --noFallthroughCasesInSwitch
// --noUnusedLocals
// --noUnusedParameters

// --noImplicitAny (since 2.0)
// function hello(x: []) {
//   console.log(x.length)
// }
// hello(123)

// --strictNullChecks (since 2.6)
// More info: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#example
// let x: string | null = null

// --strictBindCallApply (since 3.2)
// function foo(a: number, b: string): string {
//     return a + b;
// }
// foo('string', 'string')
// foo.apply(null, ['string', 'string'])

// --alwaysStrict parses in strict mode and emits "use strict"
// More info: https://www.w3schools.com/js/js_strict.asp

// --strictFunctionTypes
// interface User {
//     name: string
// }
// interface UserWithEmail extends User {
//     email: string
// }

// function fetchUser(onSuccess: (user: User) => void) {}
// fetchUser((u: UserWithEmail) => { u.email })
  
// --strictPropertyInitialization (since 2.7)
// class User {
//     name: string
//     constructor(name) {
//         this.name = name
//     }
// }
// const user = new User('John')
// user.name.split(",")

// --noImplicitThis
// class Foo {
//     x = 5
//     bar() {
//         return () => {
//             console.log(this.x)
//         }
//     }
// }

// --noImplicitReturns
// function hello(name: string | null) {
//   if (name) {
//     return "Hello, " + name
//   }
// }

// --noFallthroughCasesInSwitch
// function sizeToPrice(size: 's' | 'm' | 'l') {
//     let price = 15
//     switch(size) {
//         case 's':
//             price = 10
//         case 'm':
//             price = 11
//             break;
//     }
//     return price
// }

// --noUnusedLocals & --noUnusedParameters
// function test(x: string, y: number) {
//     const test = y * 5
//     console.log('x', x)
// }
