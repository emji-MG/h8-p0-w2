
function mengelompokkanAngka(arr) {
  // you can only write your code here!
  arrGenap = [];
  arrGanjil = [];
  arrKelipatan3 = [];
  arrResult = [];

  for(i=0; i<=arr.length-1;i++)
  {
    if(arr[i]%3 == 0)
    {
      arrKelipatan3.push(arr[i])
    }else if(arr[i]%2 == 0)
    {
      arrGenap.push(arr[i])
    }else if(arr[i]%2 == 1)
    {
      arrGanjil.push(arr[i])
    }
  }
  arrResult.push(arrGenap)
  arrResult.push(arrGanjil)
  arrResult.push(arrKelipatan3)
  return arrResult;
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]