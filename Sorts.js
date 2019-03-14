Array.prototype.__sw__ap__ = function(i,j){
	let temp = this[i];
	this[i] = this[j];
	this[j] = temp;
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
			arr.__sw__ap__(i,j);
		}
	}
	arr.__sw__ap__(i+1,high);
	return (i+1);
}
function SelectionSort(arr) 
{
    let len = arr.length;
    let min;
    for (let i = 0; i < len-1; i++) 
    {
        min = i;
        for (let j = i+1; j < len; j++)
        { 			
            if(arr[j]>=arr[min])continue
            min = j;
        }
        arr.__sw__ap__(i,min);
    }
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
			arr.__sw__ap__(i,i+1);
		}
	}while(changed);
}