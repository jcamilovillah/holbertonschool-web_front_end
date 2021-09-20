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
    setTimeout(function() {
     countPrimeNumbers();
  },1000);
}

let t1 = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (t1 - t0) + " milliseconds.");

/**
 * It's faster since countPrimeNumbers() doesn't execute while being in the event queue
 * Everything else does first
 * 
 * t0 is set
 * loop is entered -> setTimout in event loop while there is a delay
 * t1 is set
 * Execution time of printing countPrimeNumbers was " + (t1 - t0) + " milliseconds. is logged
 * delay is over -> callback gets added to event queue -> is callstack empty? ->
 *      callback gets added to callstack -> callback executes
 */
