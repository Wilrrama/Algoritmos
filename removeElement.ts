function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k] = nums[i];
      k++;
    }
  }

  console.log(k);

  return k;
}

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
