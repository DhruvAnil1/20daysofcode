function all_max(nums) 
 {
    var max_val = nums[0] > nums[2] ? nums[0] : nums[2];

    nums[0] = max_val;
    nums[1] = max_val;
    nums[2] = max_val;

    return nums;
}
console.log(all_max([27, 50, 77]));
console.log(all_max([-76, -67, 89]));