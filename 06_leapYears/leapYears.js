// A function to determine if an inputed year is a leap year.
const leapYears = function(year) {
    if(year/100  && year % 400 === 0){
        return true;
    } else if(year % 4 === 0 && year % 100 != 0){
        return true;
    } else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
