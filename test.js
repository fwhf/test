var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello" + person.firstName + ' ' + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(user);
//  结果如下
// 1. Student
//     1. firstName: "Jane"
//     2. fullName: "Jane M. User"
//     3. lastName: "User"
//     4. middleInitial: "M."
//     5. __proto__: Object
document.body.textContent = greeter(user); // HelloJane User
var tom;
tom = user;
