function xo(str) {
  // you can only write your code here!
  str = str.toLowerCase();
  panjangXo = str.length;
  var jumlahX = 0;
  var jumlahO = 0;

  for(panjangXo;panjangXo>=0;panjangXo--)
  {
    if(str.charAt(panjangXo)=='x')
    {
      jumlahX = jumlahX + 1;
    }else if(str.charAt(panjangXo)=='o')
    {
      jumlahO = jumlahO + 1;
    }
  }
  //console.log(jumlahX)
  //console.log(jumlahO)
  if(jumlahX==jumlahO)
  {
    return true;
  }else return false;

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true