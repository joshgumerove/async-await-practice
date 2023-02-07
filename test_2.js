let begin = Date.now();

const output = (x) => console.log(`${x} \n elapsed: ${Date.now() - begin}`);

const unblocking = () => {
  return new Promise((resolve, reject) => {
    resolve("this now should be last");
  })
    .then((resp) => {
      let i = 0;
      while (i < 100000000) {
        i++;
      }
      return "this will be logged at end";
    })
    .then((data) => console.log(data));
};

output("syncrhonous 1");
output(unblocking()); // note how passed in function
output("synchrnous 2");
