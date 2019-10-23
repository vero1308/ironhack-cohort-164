// NOOB BEWARE : this will sting a little bit ... ^^ (WAX ON, WAX OFF)


// A / A closure is a function containing at least one nested function
// B / The nested function should use part of the closure's scope
// C / A part of the function should be eityher returned or passed as a callback

const myModule = (function myClosure() {
  // the "module" pattern ...
  var publicState = "i'am publiiic";
  var privateState = "i'am privaaate";
  var myPassword = "123Sunshine";

  function getPublicInfos() {
    return publicState;
  }

  function getSensitiveInfos(password) {
    if (password === myPassword) {
      return (
        privateState +
        " : i'm giving up this information because i'm really nice with you guys"
      );
    } else return "sorry dude :/";
  }

  return {
    getSensitiveInfos: getSensitiveInfos, // ES6 SYNTACTICAL SUGAR : SAME AS BELOW ....
    getPublicInfos,
    publicState
  };
}());

console.log(myModule); // typeof ??? yeeeah object !
console.log(myModule.privateState); // typeof ??? undefined
console.log(myModule.getPublicInfos());
console.log(myModule.getSensitiveInfos("123Sunshine"));
