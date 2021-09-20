console.log("Start of the execution queue");
setTimeout(function(){ console.log("Final code block to be executed"); }, 0);

for (let i = 0; i < 100; i++) {
    console.log(i);
}

console.log("End of the loop printing");

/**
 * first log executes
 * setTimeout in call stack gets sent to event loop because Async API
 * delay ends and setTimeout's callback log gets added to event queue
 * in the meantime -> the rest of the code in call stack is executed
 * log inside loop executes
 * end log excecutes
 * is callstack empty? -> move event queue (setTimeout's callback log) to call stack
 * execute setTimeout's log
 */
