//Addition 
function addition(a :number, b :number) :number {
    return a + b;
}
console.log(addition(5, 10));

// function square of each number in an array
function array(a: number[]): number[] {
    return a.map(num => num * num);
}
console.log(array([1, 2, 3]));

//Function with void return type
function noretun(): void {
    console.log("This function does not return anything");
}
noretun();

function optional(a: number, b?: number): number {
    return a + (b || 0);
}

console.log(optional(5)); // Output: 5
console.log(optional(5, 10)); // Output: 15