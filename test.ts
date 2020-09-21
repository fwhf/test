class Student {
    fullName: string;
    constructor (public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return "Hello" + person.firstName + ' ' + person.lastName;
}
let user = new Student("Jane", "M.", "User");
console.log(user);
//  结果如下
// 1. Student
//     1. firstName: "Jane"
//     2. fullName: "Jane M. User"
//     3. lastName: "User"
//     4. middleInitial: "M."
//     5. __proto__: Object
document.body.textContent = greeter(user);  // HelloJane User

interface Aa {
    firstName: string;
    lastName: string;
}
let tom: Aa;
tom = user