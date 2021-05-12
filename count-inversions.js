/**
 * Convenções:
 * - As funções extendem a biblioteca Array do javascript
 * - Assim, this representa o array no qual é chamada a função
 * - Math.floor é a função de piso
 * - Os índices dos arranjos começam em 0, ou seja, A[0..length-1]
 * - i++ é a mesma coisa que i = i + 1
 */

Array.prototype.countInversions = function (first, last) {
    if (first === undefined) {
        first = 0;
        last = this.length - 1;
    }
    if (first < last) {
        let inversions = 0;
        let middle = Math.floor((first + last) / 2);
        inversions += this.countInversions(first, middle);
        inversions += this.countInversions(middle + 1, last);
        inversions = this.mergeInversions(first, middle, last);
        console.log(this)
        return inversions;
    } else {
        return 0;
    }
}

Array.prototype.mergeInversions = function (first, middle, last) {
    let n1 = middle - first + 1;
    let n2 = last - middle;
    let left = [],
        right = [];
    for (let i = 0; i < n1; i++) {
        left[i] = this[first + i];
    }
    for (let j = 0; j < n2; j++) {
        right[j] = this[middle + j + 1];
    }
    let i = 0;
    let j = 0;
    let inversions = 0;
    for (let k = first; k < last; k++) {
        if (i == n1) {
            this[k] = right[j++]
        } else if (j == n2) {
            this[k] = left[i++]
        } else if (left[i] <= right[j]) {
            this[k] = left[i++];
        } else {
            this[k] = right[j++];
            inversions += n1 - i;
        }
    }
    return inversions;
}