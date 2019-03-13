function palindrome(kata) {
  // you can only write your code here!
	var temp = '';
    for (var i = kata.length - 1; i >= 0; i--) {
        temp = temp + kata[i];
    }
    //return temp;
    if(temp==kata){
    	return true
    }else if(temp!=kata){
    	return false
    }
    // sama dengan yang balik kata?
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
