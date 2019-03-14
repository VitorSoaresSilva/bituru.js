function clamp(min, max, x){
    let dif1 = (max - x)
	let dif2 = (x - min)
    return x - (dif1 * (dif1>>31)) + (dif2 * (dif2>>31))
}
function abs(x) {
    let t = x>>31
    return (x + (x*(t+t)))
}
function lerp(x,y,t){
	return x+(y-x)*t;
}
function flat(array,depth=1){
    const len = array.length,final = [];
    for(let i = 0; i<len; i++){
        if(Array.isArray(array[i]) && depth){
            const tempArray = flat(array[i],depth-1);
			const len = tempArray.length;
			for(let i = 0; i < len; i++){               
					final.push(tempArray[i]);
			}
        }else{
    		final.push(array[i]);
		}
	}
	return final;
}
function BubbleSort(arr) {
	let changed;
	let len = arr.length;
	do{
		changed = false;
		for(let i = 0; i<len-1;i++)
		{
			if(arr[i]<=arr[i+1]) continue;
			changed=true;
			Switch(arr,i);
		}
	}while(changed);
	return arr;
}
function SelectionSort(arr) 
{
	let len = arr.length;
	let min = 0;
	for (let i = 0; i < len-1; i++) 
	{
		for (let j = i+1; j < len; j++)
		{ 			
			if(arr[j]>=arr[min])continue
			min = j;
		}
		Switch(arr,i,min);
	}
	return arr;
}
function QuickSort(arr,low,high) {
	if(low<high)
	{
		pi = Partition(arr,low,high);
		QuickSort(arr,low,pi-1);
		QuickSort(arr,pi+1,high);
	}
}
function Partition(arr,low,high) {
	let pivot = arr[high];
	let i = low-1;
	for(let j = low;j<high;j++)
	{
		if(arr[j]<=pivot)
		{
			i++;
			Switch(arr,i,j);
		}
	}
	Switch(arr,i+1,high);
	return (i+1);
}



function Switch(arr,i) {
	let temp = arr[i];
	arr[i] = arr[i+1];
	arr[i+1] = temp;
}
function Switch(arr,i,j){
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}