let firstName: string ="Ashok"
let lastName: string = "Maddineni"
let age: number = 31
let isMarried: boolean = true
let hobbies: string[] = ["Cricket", "Traveling", "Cooking","Tennis"]
let address: { street: string, city: string, state: string , zip: number} = {
    street: "10827 W Bronco Trail",
    city: "Peoria",
    state: "Arizona",
    zip: 85383
}

let person: { firstName: string, lastName: string, age: number, isMarried: boolean, hobbies: string[], address: { street: string, city: string, state: string , zip: number } } = {
    firstName,
    lastName,
    age,
    isMarried,
    hobbies,
    address
}
console.log(person)

let anotherPerson: { firstName: string, lastName: string, age: number, isMarried: boolean, hobbies: string[], address: { street: string, city: string, state: string , zip: number } } = {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    isMarried: false,
    hobbies: ["Reading", "Gaming", "Hiking"],
    address: {
        street: "123 Main St",
        city: "Phoenix",
        state: "Arizona",
        zip: 85001
    }
};

console.log(anotherPerson);
