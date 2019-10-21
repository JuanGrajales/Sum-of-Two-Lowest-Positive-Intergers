function sumTwoSmallestNumbers(numbers){
  // local var that will hold the two smalles
  let one = numbers[0];
  let two = numbers[1];
  let temp = numbers[0];

  for(let i = 0; i < numbers.length; i++){
    // set one to current index if index is less than one
    if(numbers[i] < one)
    one = numbers[i];

    // set two to current index if index is less than two and not equal to one
    if(numbers[i] < two && numbers[i] != one)
    two = numbers[i];

    // takes care of the scenario where the second lowest int came before the lowest int
    if(temp != one){
      two = temp;
      temp = one;
    }
  }

  return one + two;
}

function testing(){
  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
  console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
}

