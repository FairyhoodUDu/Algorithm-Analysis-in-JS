// 归并排序（Merge Sort）
// 归并排序须知：
// 作为一种典型的分而治之思想的算法应用，归并排序的实现由两种方法：

// 自上而下的递归（所有递归的方法都可以用迭代重写，所以就有了第2种方法）
// 自下而上的迭代
// 在《数据结构与算法JavaScript描述》中，作者给出了自下而上的迭代方法。
// 但是对于递归法，作者却认为：

// However, it is not possible to do so in JavaScript, 
// as the recursion goes too deep
// for the language to handle.
// 然而,在 JavaScript 中这种方式不太可行,因为这个算法的递归深度对它来讲太深了。
// 说实话，我不太理解这句话。意思是JavaScript编译器内存太小，
// 递归太深容易造成内存溢出吗？还望有大神能够指教。
// 和选择排序一样，归并排序的性能不受输入数据的影响，
// 但表现比选择排序好的多，因为始终都是O(n log n）的时间复杂度。
// 	代价是需要额外的内存空间。
// 	
	function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}