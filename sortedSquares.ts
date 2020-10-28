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

/*
What is Quick Sort?
- Quick sort is a divide and conquer algorithm, creating
-- two empy arrays to hold elements less than the pivot and greater than the pivot value.
-- There are two basic operations in the algorithm, swapping items in place and
-- partitioning a section of the array.

Steps
- Find a "pivot" item in the array, this is done for the getting a starting point for comparison
- Start a pointer (the left) at the first item in the array
- Start a pointer (the right) at the last item in the array
- while the value at the left points in the array is less than 
-- the pivot value, move the left pointer to the right (adding 1). Continue to until the 
-- value at the left pointer is greater than or equal to the pivot value.
- While the value at the right pointer is greater than the pivot value, move the right pointer
-- to the left (subtracting 1). Continue until the value at the right pointer is less
-- than or equal to teh pivot value.
- If the left pointer is less than or equal to the right pointer, then swap the
-- the values at these locations in the array
- Move the left pointer to the right by one and the right pointer to the left by one
- If the left pointer and right pointer don't meet, go to step 1

*/