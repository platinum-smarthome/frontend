

export const validateInput = (user) => {
  if(user.username.length > 3) {
    if (checkEmailFormat(user.email)) {
      if (user.pin.length === 6) {
        if (user.deviceId.length > 3){
          return true
        } else {
          return `Device Id must be at least 4 characters long, Please Try Again`;
        }
      } else {
        return `Pin must be 6 digits long, Please Try Again`;
      }
    } else {
      return `E-mail address format is incorrect, Please Try Again`;
    }
  } else {
    return `Username must be at least 4 characters long, Please Try Again`;
  }
}

export const validateCreatenewHomeInput = (payload) => {
  if(payload.homeName.length > 3) {
    if(payload.homePin.length === 6) {
      return validateInput(payload.user)
    } else {
      return `Home Pin must be 6 digits long, Please Try Again`;
    }
  } else {
    return `Home Name must be at least 4 characters long, Please Try Again`;
  }
}

const checkEmailFormat = (email) => {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegex.test(email);
}