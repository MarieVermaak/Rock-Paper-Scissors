function getComputerChoice() {
  let choice;
  // get a number 1 to 3 
  const randomNumber = Math.floor(Math.random() * 3)
  // map the strings to a number somehow
  const options = ['Rock', 'Paper', 'Scissors']
  // return that choice 
  choice = options[randomNumber - 1]

  return choice;

}

console.log(getComputerChoice())