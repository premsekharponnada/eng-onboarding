// program to print first n prime numbers

// take input from the user
const num = parseInt(prompt('Enter the number of primes required: '));


//define prime
const isPrime = (n) => {
    for(let i = 2; i <= n/2; i++){
       if(n % i === 0){
          return false;
       }
    };
    return true;
 };
 //generate n primes
 const generatePrime = num => {
    const arr = [];
    let i = 2;
    while(arr.length < num){
       if(isPrime(i)){
          arr.push(i);
       };
       i = i === 2 ? i+1 : i+2;
    };
    return arr;
 };
 //print n primes
 console.log('First '+ num +'prime numbers are:');
 console.log(generatePrime(num));