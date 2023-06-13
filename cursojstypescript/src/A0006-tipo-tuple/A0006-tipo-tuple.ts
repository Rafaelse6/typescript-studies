//Tuple
const dadosCliente1: readonly [number, string] = [1, "Rafael"];
const dadosCliente2: [number, string, string] = [1, "Rafael", "Santos"];
const dadosCliente3: [number, string, string?] = [1, "Rafael"];
const dadosCliente4: [number, string, ...string[]] = [1, "Rafael", "Santos"];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = "Alexander";

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ["Rafael", "Santos"];
const array2: ReadonlyArray<string> = ["Rafael", "Santos"];

console.log(array1);
console.log(array2);
