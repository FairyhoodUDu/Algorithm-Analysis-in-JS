// 基数排序（Radix Sort）
// 基数排序须知：
// 基数排序有两种方法：

// MSD 从高位开始进行排序
// LSD 从低位开始进行排序
// 基数排序 vs 计数排序 vs 桶排序
// 这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：
// 基数排序：根据键值的每位数字来分配桶
// 计数排序：每个桶只存储单一键值
// 桶排序：每个桶存储一定范围的数值

//LSD Radix Sort
var counter = [];
function radixSort(arr, maxDigit) {
    var mod = 10;
    var dev = 1;
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(var j = 0; j < arr.length; j++) {
            var bucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket]==null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        var pos = 0;
        for(var j = 0; j < counter.length; j++) {
            var value = null;
            if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                      arr[pos++] = value;
                }
          }
        }
    }
    return arr;
}