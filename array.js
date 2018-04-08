//This small code outputs an array of given range

function range(a, b){
  var array = [];
  for (var i = a; i <= b; i++) {
    array.push(i);
  }
  console.log(array);
}

range(1, 10);
