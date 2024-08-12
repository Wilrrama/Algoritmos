function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complemento = target - nums[i];

    if (map.has(complemento)) {
      return [map.get(complemento)!, i];
    }

    map.set(nums[i], i);
  }

  throw new Error("Nenhuma solução encontrada");
}

console.log(twoSum([2, 7, 11, 15], 9));
