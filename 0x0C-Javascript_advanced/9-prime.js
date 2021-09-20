const { performance } = require('perf_hooks');
let t0 = performance.now();
function countPrimeNumbers() {
    let prime = [];
    for (let i = 2; i < 100; i++) {
        if (i % 2 != 0)
            prime.push(i);
    }
    return prime;
}
let t1 = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (t1 - t0) + " milliseconds.");
