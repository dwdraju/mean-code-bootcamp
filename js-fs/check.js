var str = "what, am, I; doing, here, now";

var arr = str.split(/\;\s*/g);
for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i].split(' ');
}
console.log(arr);