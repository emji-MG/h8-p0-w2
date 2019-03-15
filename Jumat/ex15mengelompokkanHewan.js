function groupAnimals(animals) {
  // you can only write your code here!
  var huruf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
  arrHewan = [];
  arrTemp = [];
  arrHewanResult = [];
  
    for(j=0;j<26;j++){
      var i = 0;
      while(i<=animals.length-1){
       // console.log(animals[i][0],huruf[j]);
      if(animals[i][0]==huruf[j])
        {
        arrTemp.push(animals[i])
        i = i + 1;
        }else if(animals[i][0]!=huruf[j])
        {
          i = i + 1;
        }
      }
    }
    for(h=0;h<26;h++){
      var k = 0;
        while(k<=arrTemp.length-1){
         // console.log(arrTemp[k][0],huruf[h]);
        if(arrTemp[k][0]==huruf[h])
        {
          arrHewan.push(arrTemp[k])
         k = k + 1;
       }else if(arrTemp[k][0]!=huruf[h])
        {
          if(arrHewan.length>0){
          arrHewanResult.push(arrHewan);
          arrHewan = [];
          k = k + 1;}
          else if(arrHewan.length<1)
          {
          k= k + 1;}
       }
    }
  }return arrHewanResult;
}

// }
//groupAnimals();
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]