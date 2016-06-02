var rev_array = function(arr){
	start = 0;
	end = arr.length;
	while (start < end)
    {
        temp = arr[start];   
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    for(i=1; i<arr.length; i++){
    	console.log(arr[i]);
    }
}

var raw_array = [3,1,2];
rev_array(raw_array);