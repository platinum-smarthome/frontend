

export const validateInput = (user) => {
  /* istanbul ignore next */
  if(user.username.length > 3) {
    /* istanbul ignore next */
    if (checkEmailFormat(user.email)) {
      /* istanbul ignore next */
      if (user.pin.length === 6) {
        /* istanbul ignore next */
        if (user.deviceId.length > 3){
          /* istanbul ignore next */
          return true
        } else {
          /* istanbul ignore next */
          return `Device Id must be at least 4 characters long, Please Try Again`;
        }
      } else {
        /* istanbul ignore next */
        return `Pin must be 6 digits long, Please Try Again`;
      }
    } else {
      /* istanbul ignore next */
      return `E-mail address format is incorrect, Please Try Again`;
    }
  } else {
    /* istanbul ignore next */
    return `Username must be at least 4 characters long, Please Try Again`;
  }
}

export const validateCreatenewHomeInput = (payload) => {
  /* istanbul ignore next */
  if(payload.homeName.length > 3) {
    /* istanbul ignore next */
    if(payload.homePin.length === 6) {
      /* istanbul ignore next */
      return validateInput(payload.user)
    } else {
      /* istanbul ignore next */
      return `Home Pin must be 6 digits long, Please Try Again`;
    }
  } else {
    /* istanbul ignore next */
    return `Home Name must be at least 4 characters long, Please Try Again`;
  }
}

const checkEmailFormat = (email) => {
  /* istanbul ignore next */
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  /* istanbul ignore next */
  return emailRegex.test(email);
}