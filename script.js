function fibonacci(num) {
function fibonacci(n) {
    if (n <= 1)
        return n;
    let fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
        // calculate the next fibonacci number
        // update the last two fibonacci numbers
    }
    return fibo[n];
}

}

module.exports = fibonacci;
