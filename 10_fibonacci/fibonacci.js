//A function to perform the fibonacci operation on an inputed number
const fibonacci = function(inputedNumber) {
    if (inputedNumber < 0) return "OOPS";
    if (inputedNumber === 0) return 0;
    const num = parseInt(inputedNumber);
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
        for(let i = 1; i <= num; i++){
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
        return n1;

    // if(number === 1){
    //     return[0, 1];
    // } else{
    //     let series = fibonacci(number - 1);
    //     series.push(series[series.length - 1] + series[series.length - 2]);
    //     return series;
    // }
};

// Do not edit below this line
module.exports = fibonacci;
