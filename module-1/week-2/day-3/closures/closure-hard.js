function usePrivateUniverse() {
  var x = 0;

  if (x) return x;
  else
    return function(inc) {
      x += inc;
      return x;
    };
}

console.log(x)
const yo = usePrivateUniverse();
console.log(yo);
console.log(yo(1));
console.log(yo(2));
console.log(yo(3));
console.log(yo(4));
console.log(yo);
