function createLoginTracker(userInfo) {
  const userInput = {
  username: "l1Scary",
  password: "l30PARD$!"
  }
  const userInput2 = {
    username: "Louder",
    password: "thanBombs"
  }
    userInfo = userInput.password || userInput2.password

    let attemptCount = 0
  const user1Login = (passwordAttempt) => {
    if (userInput.password === passwordAttempt) {
      console.log("heeloooooo")
    }
    else if (userInput.password !== passwordAttempt) {
      console.log("wrng ssttempt again")
      attemptCount++
    }
    }
      return user1Login("l30PARD$!");
  }
function calcFlop(ogprice, discunt) {
  if(discunt < 0 || discunt > 100) {
    console.error("worng")
    return;
  }
    let discountAmount = ogprice * (discunt/100);
    let finalPrice = ogprice - discountAmount
    return(finalPrice)
}
console.log(calcFlop(30,15))

console.log(createLoginTracker("l30PARD$!"))


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};