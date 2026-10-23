function createLoginTracker(userInfo = {"username" : "", "password": ""}) {
  //user1Login = createLoginTracker(userInfo)
  let attemptCount = 0
  const c_password = userInfo.password

  //for (const password in userInfo){
  const passwordAttempt = (passwordAttempt = "") => {
    attemptCount++
    if (passwordAttempt == c_password){
      return "Login successful"
    }
    else if (passwordAttempt != c_password && attemptCount == 1){
      if (attemptCount == 1){
        attemptCount++
      }
      console.log(attemptCount)
      return "Attempt 1: Login failed"
    }
    else if (passwordAttempt != c_password && attemptCount == 2){
        if (attemptCount == 2){
        attemptCount++
      }
        return "Attempt 2: Login failed"
      }
    if (passwordAttempt != c_password && attemptCount == 3){
      if (attemptCount == 3){
        attemptCount++
      }
      console.log(attemptCount)
      return "Attempt 3: Login failed"
    }
    else if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts"
    }
  }
  return passwordAttempt
}
createLoginTracker(userInfo = {"username": "test", "password": "testpass"})
//console.log(createLoginTracker("l30PArD$!"))
    


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};