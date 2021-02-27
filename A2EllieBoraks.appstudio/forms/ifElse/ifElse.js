//declare variables
let firstName=prompt("What is your name?")
let state=prompt("What state are you in (2 letters)?")
let temp=prompt("What temperature (in Farenheit) is it outside?")

let messages=["you should wear a warm coat, hat, scarf and gloves.", "you should wear a warm coat but you won't need a hat, scarf or gloves.", "you should wear a light coat or hoodie.", "you do not need any outerwear."]
let output=`${firstName}, in ${state} it is ${temp} degrees Farenheit and `

//pick temperature message
if (temp<32)
  output+=messages[0]
else if (temp<50)
  output+=messages[1]
else if (temp<70)
  output+=messages[2]
else if (temp<100)
  output+=messages[3]
else
  output+="it's way too hot outside!"

console.log(output)