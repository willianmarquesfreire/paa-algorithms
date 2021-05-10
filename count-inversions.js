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
        let middle = Math.floor((first + last) / 2);
        let left = this.countInversions(first, middle);
        let right = this.countInversions(middle + 1, last);
        return this.mergeInversions(first, middle, last) + left + right;
    }
    return 0;
}

Array.prototype.mergeInversions = function (first, middle, last) {
    let n1 = middle - first;
    let n2 = last - middle - 1;
    let left = [], 
    right = [];
    for (let i = 0; i <= n1; i++) {
        left[i] = this[first + i];
    }
    for (let j = 0; j <= n2; j++) {
        right[j] = this[middle + j + 1];
    }
    let i = 0;
    let j = 0;
    let inversions = 0;
    for (let k = first; k < last; k++) {
        if (left[i] && left[i] <= right[j]) {
            this[k] = left[i];
            i++;
        } else if (right[j]) {
            inversions = inversions + n1 - i + 1;
            this[k] = right[j];
            j++;
        }
    }
    return inversions;
}