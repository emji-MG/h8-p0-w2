/*function balikKata(kata) {
  // you can only write your code here!
  var panjangKata = kata.length;
  //return panjangKata;
  var temp = '';
*/
function balikKata(kata){
    var temp = '';
    for (var i = kata.length - 1; i >= 0; i--) {
        temp = temp + kata[i];
    }
    return temp;
    
}
  /*for(panjangKata;panjangKata>=0;panjangKata--)
  {
   temp = temp + kata.charAt(panjangKata)
  }
  return temp;
}*/

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS