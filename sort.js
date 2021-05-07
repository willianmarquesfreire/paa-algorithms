Array.prototype.logEnabled = true;

Array.prototype.insertionSort = function () {
    if (this.logEnabled) console.log(`|insertionSort|  --------------------------------- Started ---------------------------------  `)
    for (let j = 1; j < this.length; j++) {
        let key = this[j];
        let i = j - 1;
        if (this.logEnabled) console.log(`|insertionSort| The key value is ${key} from position A[${j}]`)
        while (i >= 0 && this[i] > key) {
            if (this.logEnabled) console.log(`|insertionSort|    The A[${i + 1}] receive the value ${this[i]} `)
            this[i + 1] = this[i];
            i--;
        }
        if (this.logEnabled) console.log(`|insertionSort|     Finally the A[${i + 1}] receive the value ${key} `)
        this[i + 1] = key;
    }
    return this;
}

Array.prototype.mergeSort = function (first, last) {
    if (this.logEnabled) console.log(`|mergeSort|  --------------------------------- Started ---------------------------------  `)
    if (first === undefined) {
        first = 0;
        last = this.length - 1;
        if (this.logEnabled) console.log(`|mergeSort| The First was initialized with ${first} and the last with ${last}`)
    }
    if (first < last) {
        if (this.logEnabled) console.log(`|mergeSort|   The first ${first} is less than last ${last}`)
        let middle = Math.floor((first + last) / 2);
        if (this.logEnabled) console.log(`|mergeSort|      The middle is ${middle}:: DIVIDING PROBLEM NOW ::`)
        this.mergeSort(first, middle);
        this.mergeSort(middle + 1, last);
        this.merge(first, middle, last)
    }
    return this;
}

Array.prototype.merge = function (first, middle, last) {
    if (this.logEnabled) console.log(`|merge|  --------------------------------- Started ---------------------------------  `)
    if (this.logEnabled) console.log(`    |merge|          Merge:: First: ${first} Middle: ${middle} Last: ${last}`)
    let n1 = middle - first;
    let n2 = last - middle - 1;
    if (this.logEnabled) console.log(`    |merge|          -> The N1 is ${n1} and the N2 is ${n2}`)
    let left = [];
    let right = [];
    for (let i = 0; i <= n1; i++) {
        left[i] = this[first + i];
    }
    for (let j = 0; j <= n2; j++) {
        right[j] = this[middle + j + 1];
    }
    if (this.logEnabled) console.log("    |merge|          -> The left is ", left, " and the right is ", right)
    let i = 0;
    let j = 0;
    for (let k = first; k < last; k++) {
        if (left[i] && left[i] <= right[j]) {
            this[k] = left[i];
            if (this.logEnabled) console.log(`    |merge|             The A[${k}] receive the left value ${left[i]}`);
            i++;
        } else if (right[j]) {
            this[k] = right[j];
            if (this.logEnabled) console.log(`    |merge|             The A[${k}] receive the right value ${right[i]}`);
            j++;
        }
    }
    return this;
}

Array.prototype.bubbleSort = function () {
    if (this.logEnabled) console.log(`|bubbleSort|  --------------------------------- Started ---------------------------------  `)
    for (let i = 0; i < this.length; i++) {
        for (let j = this.length - 1; j > i; j--) {
            if (this[j] < this[j - 1]) {
                this.swap(j, j - 1)
            }
        }
    }
    return this;
}

Array.prototype.swap = function (i, j) {
    if (this.logEnabled) console.log(`|swap|   The A[${i}] {${this[i]}} was swap with A[${j}] {${this[j]}}`);
    let temp = this[i];1
    this[i] = this[j];
    this[j] = temp;111
    return this;
}