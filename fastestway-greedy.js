function greedyFastestWay(a, t, e, x, n) {
    let t1 = new Array(n);
    let t2 = new Array(n);
    let i;

    t1[0] = e[0] + a[0][0];
    t2[0] = e[1] + a[1][0];

    for (i = 1; i < n; ++i) {
        t1[i] = min(t1[i - 1] + a[0][i],
            t2[i - 1] + t[1][i] + a[0][i]);
        t2[i] = min(t2[i - 1] + a[1][i],
            t1[i - 1] + t[0][i] + a[1][i]);
    }

    return min(t1[n - 1] + x[0],
        t2[n - 1] + x[1]);
}

let a = [[4, 5, 3, 2],
[2, 10, 1, 4]];
let t = [[0, 7, 4, 5],
[0, 9, 2, 8]];
let e = [10, 12], x = [18, 7];

console.log(greedyFastestWay(a, t, e, x, 4));

function min(a, b) {
    return a < b ? a : b;
}
