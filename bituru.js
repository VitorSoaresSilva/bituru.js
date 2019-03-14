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