
function hornerMethod(a, x) {
    let i = a.length - 1;
    let y = 0;
    while (i >= 0) {
        y = a[i] + (x * y)
        i--;
    }
    return y;
}

function horner(poly, x) {

    let n = poly.length;
    let result = poly[0];

    for (let i = 1; i < n; i++) {
        result = result *
            x + poly[i];
    }

    return result;
}

function recursiveHornerMethod(a, x, i) {
    if (i < a.length) 
    return a[i] + (x * recursiveHornerMethod(a, x, i + 1))
    return 0;
}

console.log(hornerMethod([1,3,2], -3));
