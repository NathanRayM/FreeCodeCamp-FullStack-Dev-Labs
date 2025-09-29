// build-a-sum-all-primes-calculator

function sumPrimes(num) {
  if (num < 2) return 0;
  let primes = [];
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let p of primes) {
      if (i % p === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}

console.log(sumPrimes(10));
console.log(sumPrimes(5));
console.log(sumPrimes(2));
console.log(sumPrimes(0));
console.log(sumPrimes(977));

/*
EXPECTED OUTPUT

17
10
2
0
73156

*/
