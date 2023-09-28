let grades = document.getElementById('grades');

if (grades > 0 && grades <= 59){
    console.log(`I apologize but you got an F ${grades}`)
} else if (grades > 60 && grades <= 69){
    console.log(`You were able to pass with a D ${grades}`)
} else if (grades > 70 && grades <= 79){
    console.log(`Yey you were able to pass with a C ${grades}`)
} else if (grades > 80 && grades <= 89){
    console.log(`You got a B ${grades}`)
} else if (grades > 90 && grades <= 100){
    console.log(`Congrats you got an A ${grades}`)
}else {
    console.log('Please input all your scores')
}