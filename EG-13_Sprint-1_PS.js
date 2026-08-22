function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return true;
    }
    else return false;
}

// const result = isLeapYear(2029)
// console.log(result)




function generateFibonacci(n) {
    let first = 0
    let second = 1
    const arr = [first,second]
    for(let i=2;i<n;i++){
        let next = first+second;
        first = second;
        second = next;
        arr.push(next)
    }
    return arr;
}
// const result = generateFibonacci(7);
// console.log(result);


function findGCD(a, b){
    while(b!=0){
        let temp = b;
        b = a%b;
        a = temp;
    }
    return a;
}
// const result = findGCD(48,48)
// console.log(result);









