
const testArr = [
  [5,5],[0,10],[4,4],[5,4],[2,6],[4,2],[5,3],[3,6],[4,4],[3,3]
]
let totalScore = 0

// Calculate scores
function calculateScores(arr) {

}

// Checks if the frame is spare - returns boolean
function checkSpare(arr) {
  let isSpare = false

  arr.map(frame=>{
    const currentIndex = arr.indexOf(frame)
    
    // First ball + second ball in a frame should equal to 10
    if (frame[0] + frame[1] === 10) {
      // Both first ball and second ball in a frame should not equal to 0
      // or first ball equals to 0 and second ball equals to 10
      if ((frame[0]!== 0 && frame[1]!== 0) || (frame[0] === 0 && frame[1] === 10)){
        isSpare = true
        return isSpare
      }
    }
  })

}

// Checks if the frame is strike - returns boolean
function checkStrike(arr) {

}
