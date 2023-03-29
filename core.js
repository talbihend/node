

const fs=require("fs");
// console.log(fs);
let hend=fs.writeFile("welcome.txt", "Hello Node", function (err) {
   if (err) throw err;
   console.log('File is created successfully.'); });
   //console.log(hend);
   let talbi=fs.readFileSync("hello.txt")
   // console.log(talbi.toString());


