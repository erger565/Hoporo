export const n = 19;
export const m = 31;
export const crystalsNumber = 16;

export const startMap = [15,9];

export const wallsMap = [
   [1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
   [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
   [1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
   [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
   [1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
   [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
   [1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
   [1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
   [1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1],
   [1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1],
   [1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1],
   [1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1],
   [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
   [1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1],
   [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
   [1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1],
   [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
   [1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1],
   [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
   [1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1],
   [1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1],
   [1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1],
   [1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1],
   [1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
   [1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
   [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
   [1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
   [1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
   [1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
   [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
   [1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1]
];

export const groundMap = [
   [0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0],
   [0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0],
   [0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0],
   [0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0],
   [0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0],
   [0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0],
   [0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0],
   [0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],
   [0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],
   [0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0],
   [0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0],
   [0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0],
   [0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0],
   [0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0],
   [0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0],
   [0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0],
   [0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0],
   [0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0],
   [0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0],
   [0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0],
   [0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0],
   [0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0],
   [0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],
   [0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],
   [0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0],
   [0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0],
   [0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0],
   [0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0],
   [0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0],
   [0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0],
   [0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0]
]

export const crystalsMap = [
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

export const birdsMap = [
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

export const gatesMap = [
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

// direction: 1-up, 2-right, 3-down, 4-left
// direction of non-turning spikes: 5-up, 6-right, 7-down, 8-left
export const spikesMap = [
   [0,0,0,0,0,0,8,0,0,0,0,0,5,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,7,0,0,0,0,0,6,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,8,0,0,0,0,0,5,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,7,0,0,0,0,0,6,0,0,0,0,0,0]
];

// 1-up, 2-right, 3-down, 4-left
export const arrowsMap = [
   [0,0,0,0,0,0,2,1,1,0,1,1,1,0,0,0,0,0,0],
   [0,0,0,0,0,0,2,0,0,0,0,0,4,0,0,0,0,0,0],
   [0,0,0,0,0,0,2,0,0,0,0,0,4,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,2,0,0,0,0,0,4,0,0,0,0,0,0],
   [0,0,0,0,0,0,2,0,0,0,0,0,4,0,0,0,0,0,0],
   [0,0,0,0,0,0,3,3,3,0,3,3,4,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,3,3,3,0,3,3,2,0,0,0,0,0,0],
   [0,0,0,0,0,0,4,0,0,0,0,0,2,0,0,0,0,0,0],
   [0,0,0,0,0,0,4,0,0,0,0,0,2,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,4,0,0,0,0,0,2,0,0,0,0,0,0],
   [0,0,0,0,0,0,4,0,0,0,0,0,2,0,0,0,0,0,0],
   [0,0,0,0,0,0,4,1,1,0,1,1,1,0,0,0,0,0,0]
];

export const slimesMap = [
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
   [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
