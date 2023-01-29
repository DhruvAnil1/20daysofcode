function middle_elements(a, b) 
{
  var new_array = []
  new_array.push(a[1], b[1]);

    return new_array;
}
console.log(middle_elements([7, 2, 2], [3, 9, 2]));  
console.log(middle_elements([8, 6, 4], [8, 1, 0]));