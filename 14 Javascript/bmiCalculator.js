// BMI = weight (kg) / height^2 (m^2)

// function bmiCalculator(weight, height) {
//   var bmi = Math.round(weight / (height ** 2));
//   return bmi;
// }
//
// console.log(bmiCalculator(65, 1.8));

function bmiCalculator (weight, height) {
    bmi = weight / (height ** 2)
    if ( bmi < 18.5 ) {
        interpretation = `Your BMI is ${Math.round(bmi)}, so you are underweight`
    } else if ( bmi > 18.5 && bmi < 24.9 ) {
        interpretation = `Your BMI is ${Math.round(bmi)}, so you have a normal weight.`
    } else if ( bmi > 24.9 ) {
        interpretation = `Your BMI is ${Math.round(bmi)}, so you are overweight.`
    }
    return interpretation;
}

bmiCalculator(50, 1.83)

