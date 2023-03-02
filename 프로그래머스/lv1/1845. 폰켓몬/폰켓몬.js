function solution(nums) {
    return Math.min(nums.length / 2, nums.sort().filter((el , i) => el != nums[i - 1]).length)
}