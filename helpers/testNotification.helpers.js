const firebase = require('firebase')
const config = {
  apiKey: "AIzaSyCJLHWpnL-H7DPHgvA8NvJhluLrYI6Snvo",
  authDomain: "herbyherado-198014.firebaseapp.com",
  databaseURL: "https://herbyherado-198014.firebaseio.com",
  projectId: "herbyherado-198014",
  storageBucket: "herbyherado-198014.appspot.com",
  messagingSenderId: "274437662526"
}
firebase.initializeApp(config)

let mockDate1 = 1524131775281
let mockDate2 = 1524149150390
let lastSeen = 1524193948714

const generateNotification = () => {
  let key  = firebase.database().ref(`/smarthome/logs/`).push().key;
  let mockNotification = {
    id: key,
    title: 'Notif Test',
    description: 'Testing notification',
    imageUrl: 'https://studio.code.org/v3/assets/-UOqNaKxGE-UmgsZf6dO7w/poptartcat2plz.gif',
    createdAt: firebase.database.ServerValue.TIMESTAMP
  }
  firebase.database().ref(`/smarthome/logs/${key}`).set(mockNotification)
}


const countNewNotification = (lastSeen) => {
  firebase.database().ref('/smarthome/logs/').orderByChild("createdAt").once('value')
  .then((snapshot) => {
    let val = Object.values(snapshot.val()).reverse()
    let countNotif = 0
    for(let i = 0; i<val.length; i++) {
      if(val[i].createdAt > lastSeen) {
        countNotif += 1
      } else {
        i = val.length
      }
    }
    console.log(countNotif)
    // return countNotif
  })
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
//10:01 AM, 20 April 2017

export const dateDisplayFormater = (time) => {
  time = new Date(time);
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let curr_date = time.getDate();
  let curr_month = monthNames[time.getMonth()]; //Months are zero based
  let curr_year = time.getFullYear();
  return `${hours}:${minutes} ${ampm}, ${curr_date} ${curr_month} ${curr_year}`
}

const timeDifferenceFlag = (date1, date2) => {
//Date 1 = User Date
//Date 2 = Notification Date
  let diff = Number(date1) -Number(date2)
  if(diff > 0) {
    return false
  }
  return true
}

// console.log(timeDifferenceFlag(mockDate1, mockDate2))
// countNewNotification(lastSeen)
// generateNotification()