// Score 64 (simple game): Working
// const frames = [
//   [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
// ]
//
// Score 71 (with spares): Working
// const frames = [
//   [6, 1], [4, 0], [6, 4], [2, 7], [3, 5], [5, 0], [5, 5], [0, 0], [1, 6], [7, 2]
// ]
//
// Score 104 (with spares and strikes): Working
// const frames = [
//   [6, 4], [8, 0], [10, 0], [2, 7], [5, 5], [4, 0], [10, 0], [2, 1], [2, 6], [4, 4]
// ]
//
// Score 119 (with spares, strikes and a double strike): Working
// const frames = [
//   [1, 2],
//   [6, 4],
//   [5, 4],
//   [10, 0],
//   [7, 2],
//   [10, 0],
//   [10, 0],
//   [5, 2],
//   [7, 0],
//   [4, 4],
// ]

// Score 141 (includes a strike on the last frame):
const frames = [
  [1, 2],
  [6, 4],
  [5, 4],
  [10, 0],
  [7, 2],
  [10, 0],
  [10, 0],
  [5, 2],
  [7, 0],
  [10, 10, 10],
]
//
// Score 300 (perfect game):
// const frames = [
//   [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
// ]

let totalScore = 0
let currentFrame = 0

// <<--Check functions-->> //

// Checks if the frame is spare - returns boolean
function checkSpare(arr, idx) {
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
  arr.map((frame, idx) => {
    // Increment current frame number - Starts from 1 to 10
    currentFrame++

    // Checks if scores of two balls in a frame should not exceed 10.
    // Give frame index to checkSpare function as a param from 0 to 9 and check
    if (checkSpare(arr, idx)) {
      // If spare is detected, add two scores of current frame and add the doubled first ball score from next frame to the number
      totalScore += frame[0] + frame[1] + arr[idx + 1][0]
    } else if (checkStrike(arr, idx)) {
      // If strike is detected, run codes below
      console.log(`Array: ${arr}, Frame: ${currentFrame}, Index: ${idx} `)

      // If current frame is strike and next frame is strike (double strike),
      // total score equals to 'current frame score (10) + next frame score (10) + next next frame score (10) = 30
      if ((checkStrike(arr, idx + 1) && idx !== 8) || idx !== 9) {
        // Check if current frame is not 9th frame as there is no 11st frame
        if (arr[idx + 1] !== undefined && arr[idx + 2] !== undefined) {
          totalScore += frame[0] + arr[idx + 1][0] + arr[idx + 2][0]
        }
      } else if (idx === 9) {
        // If last frame, add them together
        totalScore += frame[0] + frame[1] + frame[2]
      } else {
        // If not double strike, total score equals to 'current frame (10) + two scores from next frame
        totalScore += frame[0] + arr[idx + 1][0] + arr[idx + 1][1]
      }
    } else {
      // Simply add 1st and 2nd games scores of each game to total score if none of spare and strike is detected
      totalScore += frame[0] + frame[1]
    }

    // Test output
    console.log(
      `Current Frame: ${currentFrame}, Index of Frame: ${idx}, Score: ${totalScore}`
    )
  })
}

// Main function calls from this line
calculateScores(frames)
