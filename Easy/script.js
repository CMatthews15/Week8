
let day="Wednesday";
let Exercise=["Running", "Fencing", "Dancing","Swimming","Archery"];

switch (day){
    case "Monday":
    console.log(`todays exercise is ${Exercise[0]}`);
    break;

    case "Tuesday":
    console.log(`todays exercise is ${Exercise[1]}`);
    break;
    
    case "Wednesday":
    console.log(`todays exercise is ${Exercise[2]}`);
    break;

    case "Thursday":
    console.log(`todays exercise is ${Exercise[3]}`);
    break;

    case "Friday":
    console.log(`todays exercise is ${Exercise[4]}`);
    break;

    default:
        console.log("No Exercise Scheduled");
}

