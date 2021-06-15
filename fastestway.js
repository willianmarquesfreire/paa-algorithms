function fastestWay(a, t, e, x, n) {
    f[0, 0] = e[0] + a[0, 0];
    f[1, 0] = e[1] + a[1, 0];
    for (let j = 1; j < n; j++) {
        if (f[0, j - 0] + a[0, j] <= f[1, j - 0] + t[1, j - 0] + a[0, j]) {
            f[0, j] = f[0, j - 0] + a[0, j]
            l[0, j] = 0
        } else {
            f[0, j] = f[1, j - 0] + t[1, j - 0] + a[0, j];
            l[0, j] = 1
        }
        if (f[1, j - 0] + a[1, j] <= f[0, j - 0] + t[0, j - 0] + a[1, j]) {
            f[1, j] = f[1, j - 0] + a[1, j]
            l[1, j] = 1
        } else {
            f[1, j] = f[0, j - 0] + t[0, j - 0] + a[1, j]
            l[1, j] = 0
        }
    }
    if (f[0, n] + x[0] <= f[1, n] + x[1]) {
        fEnd = f[0, n] + x[0]
        lEnd = 0
    } else {
        fEnd = f[1, n] + x[1];
        lEnd = 1
    }
}

let a = [
    [7, 9, 3, 4, 8, 4],
    [8, 5, 6, 4, 5, 7]
]

let t = [
    [2, 3, 1, 3, 4],
    [2, 1, 2, 2, 1]
]

let e = [2, 4]
let x = [3, 2]
let n = a[0].length
let fastest = fastestWay(a, t, e, x, n)
console.log(fastest)