let begin = Date.now();

const output = (x) => console.log(`${x} \n elapsed: ${Date.now() - begin}`);

const blocking = () => {
  let i = 0;
  while (i < 100000000) {
    i++;
  }
  return "all done";
};

output("syncrhonous 1");
output(blocking()); // note how passed in function
output("synchrnous 2");
