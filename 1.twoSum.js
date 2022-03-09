var twoSum = function(nums, target) {
    for (var index = 0; index < nums.length; index++) {
        for (var index2 = 0; index2 < nums.length; index2++) {
            if(nums[index]+nums[index2] === target && index != index2) {
                return [index, index2]
            }
        }
        
    }
};
//twoSum([3,2,3], 6)
console.log('Resultado: ',twoSum([3,2,5,3], 6))
