// 2x³ - 6x² + 2x - 1 for x = 3

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

function recursiveHornerMethod(as, x, y, i) {
    if (i === undefined) i = as.length - 1
    if (i >= 0) return as[i] + (x * recursiveHornerMethod(as, x, y, i - 1))
    return 0;
}

console.log(recursiveHornerMethod([2, -6, 2, -1], 3));