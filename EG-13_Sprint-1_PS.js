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

function findLCM(a, b){
    if(a==0 || b==0) return 0;

    sub_a = a;
    sub_b = b;

    while(sub_a != sub_b){
        if(sub_a<sub_b){
            sub_a+=a;
        }else{
            sub_b+=b;
        }
    }
    return sub_a;
}
// const result = findLCM(12,18)
// console.log(result);

function isPrime(num){
    if(num<=1) return false;
    if(num === 2) return true;
    if(num%2===0) return false;

    for(let i=3; i*i<=num;i+=2){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
// const result = isPrime(30);
// console.log(result);




function mergeSortedArrays(arr1, arr2){
    let merge = [...arr1,...arr2]
    return merge;
}
// const result = mergeSortedArrays([1, 3, 5], [2, 4, 6]);
// console.log(result);



function findMedian(nums){
    let sorted = nums.sort((a,b)=> a-b)
    const mid = Math.floor(sorted.length / 2);
    return sorted[mid]
}
// const result = findMedian([7, 1, 3, 4, 9]);
// console.log(result);










