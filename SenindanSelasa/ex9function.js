
console.log('SOAL PERTAMA FUNCTION');
/*
 BUATLAH KODE FUNCTION DISINI
*/
function shoutOut()
{
  return 'Halo Function!';
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console





console.log('\n\nSOAL KEDUA FUNCTION');
function calculateMultiply(num1, num2)
{
  return num1*num2;
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30


console.log('\n\nSOAL KETIGA FUNCTION');

function processSentence(name, age, address, hobby)
{
  var temp = ('Nama saya '+name+', Umur saya '+age+' tahun, alamat saya di '+address+', dan saya punya hobby yaitu '+hobby+'!');
	return temp;



}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);

















