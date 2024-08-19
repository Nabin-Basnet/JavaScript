
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let n = 1; n <= 100; n++) {
    if (isPrime(n)) {
        console.log(n);
    }
}
