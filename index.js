function shout(string) {
  return string.toUpperCase()

}

function whisper(string) {
  return string.toLowerCase()

}

function logShout(string) {
  return console.log(string.toUpperCase())

}

function logWhisper(string) {
  return console.log(string.toLowerCase())

}

function sayHiToGrandma(hello) {
  if (hello === hello.toLowerCase){
    return console.log("I can't hear you!")
    if (hello === hello.toUpperCase){
      return console.log("YES INDEED!")
      if (hello === "I love you, Grandma."){
        return console.log("I love you, too.")
      }
    }
  }
}
