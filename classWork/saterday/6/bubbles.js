const arr = [5, 3, 17, 256, 13, 555, 55, 42, 99]

function bubblesort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[i]) {
                arr[i] += arr[j]
                arr[j] = arr[i] - arr[j]
                arr[i] -= arr[j]
            }
        }
    }
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let min = Infinity
        let key = 0
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < min) {
                key = j
                min = arr[j]
            }
        }
        arr[i] += arr[j]
        arr[key] = arr[i] - arr[key]
        arr[i] -= arr[key]
    }
}

bubblesort(arr)
console.log(arr)


