// Implement Cahcing/Memoize function.

function myMemoize(fn, context) {
    const res = {};
    return function (...args) {
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache];
    }
}

const clumsyProduct = (num1, num2) => {
    for (let i = 1; i <= 1000000000; i++) { }

    return num1 * num2;
}

const myMemoizeClumsyProduct = myMemoize(clumsyProduct);

console.time("First Call");
console.log(myMemoizeClumsyProduct(9467, 7649));
console.timeEnd("First Call");

console.time("Second Call");
console.log(myMemoizeClumsyProduct(9467, 7649));
console.timeEnd("Second Call");
