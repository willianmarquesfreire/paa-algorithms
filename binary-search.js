function recursiveBinarySearch(a, left, right, x) {
    if (left > right) return -1
    let middle = Math.floor((left + right) / 2)
    if (a[middle] == x)
        return middle
    else if (x < a[middle])
        return recursiveBinarySearch(a, left, middle - 1, x)
    else return recursiveBinarySearch(a, middle + 1, right, x)
}

console.log(recursiveBinarySearch([2, 4, 6, 8], 0, 3, 6))