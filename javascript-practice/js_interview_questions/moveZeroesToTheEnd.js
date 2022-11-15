function moveZeroes(arr, n) {
    let countZeroes = 0;
    for (let i = 0; i < n; i++)
        if (arr[i] != 0)
            arr[countZeroes++] = arr[i];

    while (countZeroes < n)
        arr[countZeroes++] = 0;
}