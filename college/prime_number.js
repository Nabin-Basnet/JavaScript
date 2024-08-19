

for (let i = 2; i <= 10; i++) {  // Start from 2, as 1 is not considered a prime number
    let index = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {  // Count how many times i is divisible by j
            index++;
        }
    }
    // A prime number has exactly two divisors: 1 and itself
    if (index === 2) {
        console.log(i);
    }
}
