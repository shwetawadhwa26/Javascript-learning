// JavaScript Date objects represent a single moment in time in a 
// platform-independent format. Date objects encapsulate an integral
//  number that represents milliseconds 

let myDate=new Date();
console.log(typeof myDate); //OBJECT
console.log(myDate.toString()); //Sun Mar 24 2024 10:39:07 GMT+0530 (India Standard Time)

console.log(myDate.toISOString()); //2024-03-24T05:09:52.048Z

console.log(myDate.toJSON()); //2024-03-24T05:09:52.048Z

console.log(myDate.toLocaleDateString());//24/3/2024

console.log(myDate.toLocaleTimeString()); //10:40:38 am

console.log(myDate.toTimeString());//10:40:53 GMT+0530 (India Standard Time)

console.log(myDate.toUTCString()); //Sun, 24 Mar 2024 05:11:07 GMT

let myCreatedDate = new Date(2023,0,23);
//console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023
console.log(myCreatedDate.toLocaleString()); //23/1/2023, 12:00:00 am


let DateToday = new Date("2024-01-24");
console.log(DateToday.toLocaleString()); //24/1/2024, 5:30:00 am

let myTimeStamp =Date.now();
console.log(myTimeStamp); //1711257973912 -->milliseconds

console.log(DateToday.getTime());//1706054400000 -->milliseconds

console.log(Math.floor(Date.now()/1000)); //1711258077 --> seconds
//dividing by 1000 to convert milliseconds to seconds 
//Date.now()/1000 gives you the current timestamp in seconds since the Unix epoch

let NewDate = new Date();
console.group(NewDate);
console.group(NewDate.getMonth());
// 0 - jan, 1 - feb...
console.group(NewDate.getDay());
//0 - sunday, 1 - monday...

// '${newDate.getDay()} and the time is - '

let New_Date = new Date();

let options = {
    weekday: "long",      // Possible values: "narrow", "short", "long"
    timeZone: 'America/New_York',         // Time zone identifier (e.g., "America/New_York")
    calendar: 'buddhist',         // Calendar identifier (e.g., "buddhist", "chinese", "coptic", "ethioaa", "gregory", "hebrew", "indian", "islamic", "iso8601", "japanese", "persian", "roc")
    dateStyle: 'full',        // Possible values: "full", "long", "medium", "short"
    day: 'numeric',              // Possible values: "numeric", "2-digit"
    dayPeriod: 'narrow',        // Possible values: "narrow", "short", "long"
    era: 'short',              // Possible values: "narrow", "short", "long"
    formatMatcher: 'basic'     // Possible values: "basic", "best fit"

};

console.log(New_Date.toLocaleString('default',options));
