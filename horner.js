function hornerMethod(a, x) {
    let i = a.length - 1;
    let y = 0;
    while (i >= 0) {
        y = a[i] + (x * y)
        i--;
    }
    return y;
}

console.log(hornerMethod([-1, 2, -6, 2], 3));
// 2x³ - 6x + 2x - 1 for x = 3

function horner(poly, x) {

    let n = poly.length;
    let result = poly[0];

    for (let i = 1; i < n; i++) {
        result = result *
            x + poly[i];
    }

    return result;
}


console.log(horner([2, -6, 2, -1], 3))

function recursiveHornerMethod(a, x, y, i) {
    if (i === undefined) i = a.length - 1
    if (i >= 0) return a[i] + (x * recursiveHornerMethod(a, x, y, i - 1))
    return 0;
}

console.log(recursiveHornerMethod([2, -6, 2, -1], 3));