function clamp(max, min, x){
    var dif1 = (max - x)
	var dif2 = (x - min)
    return x - (dif1 * (dif1>>31)) - (dif2 * (-dif2>>31))
}
function abs(x) {
    var t = x>>31
    return (x + (x*(t+t)))
}
function lerp(x,y,t){
	return x+(y-x)*t;
}