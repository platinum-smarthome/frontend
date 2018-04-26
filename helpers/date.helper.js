const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const dateDisplayFormater = (time) => {
  time = new Date(time);
  var hours = time.getHours();
  var minutes = time.getMinutes();
  /* istanbul ignore next */
  var ampm = hours >= 12 ? 'PM' : 'AM';
  /* istanbul ignore next */
  hours = hours % 12;
  /* istanbul ignore next */
  hours = hours ? hours : 12;
  /* istanbul ignore next */
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let curr_date = time.getDate();
  let curr_month = monthNames[time.getMonth()]; //Months are zero based
  let curr_year = time.getFullYear();
  return `${hours}:${minutes} ${ampm}, ${curr_date} ${curr_month} ${curr_year}`
}
