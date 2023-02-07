// async example

// const { resolve } = require("path");

// async function message() {
//   return "hello world";
// }

// // async ensures that the function returns a promise

// console.log(message().then(console.log));
// console.log("cool"); // note how this gets logged first

async function anotherMessage() {
  let firstWord = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  });

  let secondWord = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("world");
    }, 1000);
  });

  console.log(`Done: ${firstWord} ${secondWord}`);
}

function execute() {
  anotherMessage(); // yields control to the context which it is running in
  console.log("this should run first");
}

// anotherMessage();
execute();
console.log("will run second");

let josh;

async function foo() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Josh"), 1000);
  });

  let message = await promise; // wait until the promise above resloves with the word Josh
  josh = message;
  console.log("this is josh: ", josh);
}
