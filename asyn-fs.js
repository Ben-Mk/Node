const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstTxt = data;

  readFile("./content/second.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const secondTxt = data;
    writeFile(
      "./content/result.txt",
      `Here is the result: ${firstTxt}, ${secondTxt}`,
      "utf8",
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task");
