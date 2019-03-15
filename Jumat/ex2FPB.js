function fpb(angka1, angka2) {
  // you can only write your code here!
var arrAngka1 = [];
var arrAngka2 = [];
    if(angka1 >1){
      for(var i=2; i<=angka1; i++){
        if(angka1 % i == 0) {
            arrAngka1.push(i)
        }
      }//console.log(arrAngka1)
    }
    if(angka2 >1)
    {
      for(var i=2; i<=angka2; i++){
        if(angka2 % i == 0) {
            arrAngka2.push(i)
        }
      }//console.log(arrAngka2)
    }
if(arrAngka1.length == 1 && arrAngka2.length == 1)
{
  return 1;
}
var fbpTemp = 1;
for(x=0;x<arrAngka1.length;x++){
  for(y=0;y<arrAngka2.length;y++){
    if(arrAngka1[x]==arrAngka2[y] && arrAngka1[x] > fbpTemp)
        {
        fbpTemp = arrAngka1[x]
        }
    }
  }return fbpTemp;
}

// TEST CASES
 console.log(fpb(12, 16)); // 4
 console.log(fpb(50, 40)); // 10
 console.log(fpb(22, 99)); // 11
 console.log(fpb(24, 36)); // 12
 console.log(fpb(17, 23)); // 1