function balikString(input){
    var temp = '';
    for (var i = input.length - 1; i >= 0; i--) {
        temp = temp + input[i];
    }
    return temp;
    // sama dengan yang balik kata??
}

console.log(balikString('hello world!'));