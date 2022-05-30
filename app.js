// empty array to store student name in future.

// var studentNameFuture1=[];
// var studentNameFuture2=[];


var stringCity=["Karachi","Lahore","Faisalabad","Rawalpindi","Gujranwala","Peshawar","Multan","Hydrabad","Islamabad","Quetta",];
var numberPostalCode=[24700, 40050, 38060, 46200, 54560, 25120, 59300, 72200, 44090, 87800];
// var userCity=prompt("Enter a city name to check, the city is in top 10 Cities of Pakistan.")


// for (var i = 0; i < stringCity.length; i++) {
//     if (userCity === stringCity [i]) {
//         alert("It's one of the cleanest cities");
//     }
// }


var userPostalCode=Number(prompt("Enter a city from top 10 cities to check postal code of the city."));
for (var i=0; numberPostalCode.lenth; i++){
    if (userPostalCode === stringCity [i]){
        alert("The Postal code of this city is "+ numberPostalCode[i] )
    }
}




