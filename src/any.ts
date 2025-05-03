// Example to test 'any' type enforcement
function testAny(input: any): any {
    return input;
}

const result1 = testAny("This should fail if 'any' is not allowed");
console.log(result1);
const result2 = testAny(12345);
console.log(result2);
const result3 = testAny(true);
console.log(result3);
const result4 = testAny({ name: "John", age: 30 });
console.log(result4);
const result5 = testAny([1, 2, 3, 4, 5]);
console.log(result5);


function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`) // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
  }

printStatusCode('200');