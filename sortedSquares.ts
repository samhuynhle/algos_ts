function sortedSquares(A: number[]): number[] {
    let ans = [];
    for(let i = 0; i < A.length; i++){
        ans.push(A[i] * A[i])
    }
    return quickSort(ans, 0, ans.length - 1)
}

function partition(A: number[], left: number = 0, right: number = A.length - 1) {
    const pivot = A[Math.floor((right + left)) / 2]
    let i = left
    let j = right

    while(i <= j) {
        while(A[i] < pivot) {
            i++
        }
        while (A[j] > pivot){
            j--
        }

        if (i <= j){
            [A[i], A[j]] = [A[j], A[i]]
            i++
            j--
        }
    }

    return i;
}

function quickSort(A: number[], left: number = 0, right: number = A.length - 1) {
    let index

    if(A.length > 1) {
        index = partition(A, left, right)

        if(left < index - 1){
            quickSort(A, left, index - 1)
        }

        if (index < right) {
            quickSort(A, index, right)
        }
    }

    return A
}