function konversiMenit(menit) {
  // you can only write your code here!
  var addMenit = 0;
  var sisaDetik = 0;
  while(menit>=60)
  {
    menit = menit - 60;
    addMenit = addMenit +1;
  }
  sisaDetik = menit;

if(sisaDetik<10)
{
  sisaDetik.toString();
  sisaDetik = '0'+ sisaDetik;
}
return (addMenit+':'+sisaDetik);

}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00