//contoh output
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
 
function pembandingSort(value1,value2){
  return value2-value1;
}

function dataHandling2(input){
  input.splice(1,4, input[1] + " Elsharawy", "Provinsi" + input[2], "21/05/1989", "Pria", "SMA Internasional Metro");
  var detail = input;
  console.log(detail);
  
  var tanggal = input[3].split("/");
  //console.log(tanggal)
  //return input;
  switch(tanggal[1]){
    case '01':console.log('Januari');break;
    case '02':console.log('Februari');break;
    case '03':console.log('Maret');break;
    case '04':console.log('April');break;
    case '05':console.log('Mei');break;
    case '06':console.log('Juni');break;
    case '07':console.log('Juli');break;
    case '08':console.log('Agustus');break;
    case '09':console.log('September');break;
    case '10':console.log('Oktober');break;
    case '11':console.log('November');break;
    case '12':console.log('Desember');break;
  }
  
  var tanggalSort = '';
  var tanggalJoin = '';

  var tanggalJoin =  tanggal;
  tanggalJoin = tanggalJoin.join('-');
  //console.log(tanggalJoin);

  var tanggalSort = tanggal;
  tanggalSort = tanggalSort.sort(pembandingSort);
  console.log(tanggalSort);

  console.log(tanggalJoin);
  var varSlice = input[1].slice(0,14);
  console.log(varSlice);
  //return input;
  
}

dataHandling2(input);