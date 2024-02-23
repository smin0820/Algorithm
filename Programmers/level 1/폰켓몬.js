function solution(nums) {
    let select = nums.length / 2;
    let set = new Set(nums);
    return set.size > select ? select : set.size;
}