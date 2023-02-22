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
let totalScore = 0
let currentFrame = 0

// <<--Check functions-->> //

// Checks if the frame is spare - returns boolean
function checkSpare(arr, idx) {
  //   let isSpare = false

  // First ball + second ball in a frame should equal to 10
  if (arr[idx][0] + arr[idx][1] === 10) {
    // Both first ball and second ball in a frame should not equal to 0
    // or first ball equals to 0 and second ball equals to 10
    if (
      (arr[idx][0] !== 0 && arr[idx][1] !== 0) ||
      (arr[idx][0] === 0 && arr[idx][1] === 10)
    ) {
      return true
    } else {
      return false
    }
  }
}

// Checks if the frame is strike - returns boolean
function checkStrike(arr, idx) {
  // First ball in a frame must be 10
  if (arr[idx][0] === 10) {
    return true
  } else {
    return false
  }
}

// <<-- Main function -->> //

// Calculate scores
function calculateScores(arr) {
  arr.map((frame) => {
    // Get frame index
    let frameIdx = arr.indexOf(frame)

    // Increment current frame number - Starts from 1 to 10
    currentFrame++

    // Checks if scores of two balls in a frame should not exceed 10.
    if (frame[0] + frame[1] <= 10) {
      // Give frame index to checkSpare function as a param from 0 to 9 and check
      if (checkSpare(arr, frameIdx) === true) {
        // If spare is detected, add two scores of current frame and add the doubled first ball score from next frame to the number
        totalScore += frame[0] + frame[1] + arr[frameIdx + 1][0]
      } else if (checkStrike(arr, frameIdx) === true) {
        // If strike is detected,
        // Make this working!!!!!
        //   while (frame[0] === 10) {
        //     totalScore += frame[0] + frame[1] + arr[frameIdx + 1][0]
        //     if (frame[0] !== 10) {
        //       break
        //     }
        //   }
      } else {
        // Simply add 1st and 2nd games scores of each game to total score if none of spare and strike is detected
        totalScore += frame[0] + frame[1]
      }
    } else {
      console.log(`A frame should not have a score more than 10`)
    }

    // Test output
    console.log(
      `Current Frame: ${currentFrame}, Index of Frame: ${frameIdx}, Score: ${totalScore}`
    )
  })
}

// Main function calls from this line
calculateScores(testArr)
