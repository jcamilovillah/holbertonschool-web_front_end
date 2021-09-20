const { performance } = require('perf_hooks');
function countPrimeNumbers() {
    let prime = [];
    for (let i = 2; i < 100; i++) {
        if (i % 2 != 0)
            prime.push(i);
    }
    return prime;
}

let t0 = performance.now();

for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}

let t1 = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (t1 - t0) + " milliseconds.");
