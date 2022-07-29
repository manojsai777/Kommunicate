let rev = 0; 
let n= 1234563
let lastDigit;

while(n!= 0){
       lastDigit =n % 10;
rev= rev*10+ lastDigit;
n=Math.floor(n/10);
}
console.log("Reverse number : "+rev);
