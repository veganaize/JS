console.log( twoSum([2,7,11,15], 9) );  // [0,1]
console.log( twoSum([3,2,4], 6)     );  // [1,2]
console.log( twoSum([3,3], 6)       );  // [0,1]
console.log( twoSum([4,4,3,3], 6)   );  // [2,3]
console.log( twoSum([6,4,4,0,3], 6) );  // [0,3]
console.log( twoSum([1000000000,3,9,-5,-999999994], 6) );  // [0,4]


function twoSum(nums, target) {
    var hashmap = {};

    for (var i = 0; i < nums.length; i++) {
        /* Is other addend index present ? */
        if (hashmap[nums[i]] != undefined) return [hashmap[nums[i]], i];

        /* Is current addend's index not already present ? */
        if (hashmap[target-nums[i]] == undefined) {
            hashmap[target-nums[i]] = i;

        /* Otherwise addend's index is already present */
        } else {
            /* Does adding addend to itself equal target ? */
            if (nums[i] * 2 == target) {
                return [hashmap[target-nums[i]], i];
            }
        }
    }
}
