const names: string[] = [];

names.push("Dylan"); // no error

names.push("Ashok"); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

names.sort(); // Sort the names array alphabetically

console.log(names);

const car: { type: string, mileage?: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car.mileage = 2000;