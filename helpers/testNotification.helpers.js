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

// console.log(timeDifferenceFlag(mockDate1, mockDate2))
// countNewNotification(lastSeen)

// firebase.database().ref('/smarthome/logs/').orderByChild("createdAt").on('child_added', (snapshot) => {
//   let val = snapshot.val()
//   console.log(val)
//   // generateNotification()
// })
let count = 0
firebase.database().ref('/smarthome/logs/').orderByChild("createdAt").on('child_added', (snapshot) => {
  let val = snapshot.val()
  if(count) {
    console.log('=======>',val)
  }
  count += 1
  // generateNotification()
})