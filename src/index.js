// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (!Array.isArray(matrix)) {

        return [];
    } else if (matrix.length < 1) {
        return [];
    } else {
        let newArr = []
        for (let i = 0; i < matrix.length; i++) {
            let arr = matrix[i];
            if (i % 2 == 0) {
                newArr.push(arr)
            } else {
                newArr.push(arr.reverse());
            }

        }
        newArr = newArr.join(",").split(",");

        let arr = [];
        for (let key of newArr) {
            arr.push(parseInt(key));
        }
        return arr;
    }
}
