// #########################
// ~~~ Learn TypeScript ~~~
// 07. Advanced Types
// #########################

// #################
// 💡 Union types and intersection types
// #################

// == intersection types  == AND

// interface WithName {
//   name: string
// }

// interface WithEmail {
//   email: string
// }

// const user: WithName & WithEmail = {
//   name: 'John',
//   email: 'email@a.com'
// }

// == union types == OR

// function len(v: string | []) {
//   return v.length
// }

// len("hello")
// len([])

// - type assertion  `if ((pet as Fish).swim) {`
// -  a function whose return type is a *type predicate*
// ```
// **function** **isFish**(pet: Fish | Bird): **pet** **is** **Fish** {
//     **return** (pet as Fish).swim !== undefined;
// }
// ```

// - The **in** operator
// - **typeof** padding === “number” - TS recognises those
// - **instanceof**
// - With —strictNullChecks, an optional parameter automatically adds | undefined:
// - string literal types (~ like enums)
// - overloads like
// ```
// **function** **createElement**(tagName: “img”): **HTMLImageElement**;
// **function** **createElement**(tagName: “input”): **HTMLInputElement**;
// ```

// - Index types
// - Readonly<T>, Partial<T>
// - Conditions: `T extends U ? X : Y`