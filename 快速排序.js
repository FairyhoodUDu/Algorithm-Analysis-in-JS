// 快速排序须知：
// 又是一种分而治之思想在排序算法上的典型应用。
// 本质上来看，快速排序应该算是在冒泡排序基础上的递归分治法。
// 快速排序的名字起的是简单粗暴，
// 因为一听到这个名字你就知道它存在的意义，就是快，而且效率高! 
// 它是处理大数据最快的排序算法之一了。虽然Worst Case的时间复杂度达到了O(n²)
// 但是人家就是优秀，
// 在大多数情况下都比平均时间复杂度为O(n log n) 的排序算法表现要更好，
// 可是这是为什么呢，我也不知道。。。好在我的强迫症又犯了，
// 查了N多资料终于在《算法艺术与信息学竞赛》上找到了满意的答案：

// 快速排序的最坏运行情况是O(n²)，比如说顺序数列的快排。
// 但它的平摊期望时间是O(n log n) ，且O(n log n)记号中隐含的常数因子很小，
// 比复杂度稳定等于O(n log n)的归并排序要小很多。
// 所以，对绝大多数顺序性较弱的随机数列而言，快速排序总是优于归并排序。
function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}

function partition(arr, left ,right) {     //分区操作
    var pivot = left,                      //设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }        
    }
    swap(arr, pivot, index - 1);
    return index-1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}