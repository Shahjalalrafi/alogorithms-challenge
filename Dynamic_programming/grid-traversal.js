// posibility of way to go in the right bottom node

function gridTraversal(m, n, memo = {}) {
    let key = m + ',' + n;

    if(key in memo) return memo[key]

    if(m === 1 && n === 1) {
        return 1;
    }
    if(m === 0 || n === 0) {
        return 0;
    }

    memo[key] = gridTraversal(m - 1, n, memo) + gridTraversal(m, n-1, memo);
    return memo[key]
}


console.log(gridTraversal(1, 1));
console.log(gridTraversal(2, 3));
console.log(gridTraversal(3, 2));
console.log(gridTraversal(3, 3));
console.log(gridTraversal(50, 18));