// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let now = new Date();
console.log(now);

let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
let day = now.getDay();

//Convert let day to 'Sunday, Monday ... '
function todayConvert(a) {
    switch (a) {
            case 0:
            todayName = 'Sunday';
            break
            case 1:
                todayName = 'Monday';
            break
            case 2:
                todayName = 'Tuesday';
            break
            case 3:
                todayName = 'Wensday';
            break
            case 4:
                todayName = 'Thursday';
            break
            case 5:
                todayName = 'Friday';
            break
            case 6:
                todayName = 'Saturday';
            break
    }
    return todayName;
    // console.log(todayName);
};

//Convert let hour (24:00) to AM/PM
if ( hour > 0 && hour <= 12 ) {
    hourAMPM = `${hour} PM`
}else if (hour == 0) {
    hourAMPM = `${hour} AM`;
  }
else {
    hourAMPM = `${hour - 12} AM`
};

todayConvert(day);

//Result
console.log(`Today is: ${todayName}`);
console.log(`Current time is: ${hourAMPM} : ${minute} : ${second}`);


