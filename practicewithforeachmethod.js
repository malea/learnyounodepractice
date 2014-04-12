var arr = new Array();

for (var i = 1; i < 6; i++) {
    arr.push(i);
}

function double (integer) {
    integer = integer * 2;
    console.log(integer);
}

arr.forEach(double);
