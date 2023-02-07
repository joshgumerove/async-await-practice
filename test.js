// macro tasks and micro tasks

console.log("synchronous 1");

// macro task: setTimeout is a macro task
setTimeout(() => console.log("first timeout"), 0);

// note: a promise is a micro task (and therefore added to mirco task queue and executed before start of next event loop)

Promise.resolve().then((_) => console.log("first promise")); // gets logged before the setTimeout
console.log("synchronous 2");
