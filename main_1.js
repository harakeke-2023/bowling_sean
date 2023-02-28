const testArr = [
  [5, 5],
  [0, 10],
  [4, 4],
  [5, 4],
  [2, 6],
  [4, 2],
  [5, 5],
  [3, 6],
  [4, 4],
  [3, 3],
]

const testStrikeArr = [
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 0],
  [10, 9],
]

// Strike = S, Spare = P, Else = sumNo, Gutter = G
// Get string for each frame in the array parameter

function getStringsForEachFrame(arr) {
  let frameTotal = 0
  const strArray = arr.map((frame) => {
    frameTotal = frame[0] + frame[1]
    return frameTotal
  })

  console.log(strArray)
}

getStringsForEachFrame(testArr)
