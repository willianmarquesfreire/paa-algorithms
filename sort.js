Array.prototype.insertionSort = function () {
    for (let j = 1; j < this.length; j++) {
        let key = this[j];
        let i = j - 1;
        console.log(`The key value is ${key} from position A[${j}]`)
        while (i >= 0 && this[i] > key) {
            console.log(` - The A[${i + 1}] receive the value ${this[i]} `)
            this[i + 1] = this[i];
            i--;
        }
        console.log(` - Finally the A[${i + 1}] receive the value ${key} `)
        this[i + 1] = key;
    }
    return this;
}

Array.prototype.mergeSort = function (first, last) {
    if (first === undefined) {
        first = 0;
        last = this.length - 1;
        console.log(`|mergeSort| The First was initialized with ${first} and the last with ${last}`)
    }
    if (first < last) {
        console.log(`|mergeSort|   The first ${first} is less than last ${last}`)
        let middle = Math.floor((first + last) / 2);
        console.log(`|mergeSort|      The middle is ${middle}:: DIVIDING PROBLEM NOW ::`)
        this.mergeSort(first, middle);
        this.mergeSort(middle + 1, last);
        this.merge(first, middle, last)
    }
    return this;
}

Array.prototype.merge = function (first, middle, last) {
    console.log(`    |merge|          Merge:: First: ${first} Middle: ${middle} Last: ${last}`)
    let n1 = middle - first;
    let n2 = last - middle - 1;
    console.log(`    |merge|          -> The N1 is ${n1} and the N2 is ${n2}`)
    let left = [];
    let right = [];
    for (let i = 0; i <= n1; i++) {
        left[i] = this[first + i];
    }
    for (let j = 0; j <= n2; j++) {
        right[j] = this[middle + j + 1];
    }
    console.log("    |merge|          -> The left is ", left, " and the right is ", right)
    let i = 0;
    let j = 0;
    for (let k = first; k < last; k++) {
        if (left[i] && left[i] <= right[j]) {
            this[k] = left[i];
            console.log(`    |merge|             The A[${k}] receive the left value ${left[i]}`);
            i++;
        } else if (right[j]) {
            this[k] = right[j];
            console.log(`    |merge|             The A[${k}] receive the right value ${right[i]}`);
            j++;
        }
    }
    return this;
}

