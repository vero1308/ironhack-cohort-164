const myModule = require("./6-my-module");
// process.argv[2]; given folder path (haystack)
//process.argv[3]; extension we are looking for (needle)

const myCallback = (err, res) => {
  if (err) console.log(err);
  res.forEach(file => console.log(file));
};

myModule(process.argv[2], process.argv[3], myCallback);


// (async function doItLikeCoolKidsDo() {
//     const res = await myModule(process.argv[2], process.argv[3]);
//     console.log("Kool Kidz say => \n");
//     console.log(res);
// }());

function a(n, cb) {
    return cb(n);
}

function b(x) {
    return x > 0 ? 42 : -42;
}

const x = a(10, b);
const xx = a(-20, b);


  

