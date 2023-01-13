var side1 = 82; 
var side2 = 66; 
var side3 = 36; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);