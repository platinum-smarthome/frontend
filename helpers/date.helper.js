const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

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

