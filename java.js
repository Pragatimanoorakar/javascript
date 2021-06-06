

button1 = document.querySelector("button")
input1= document.querySelector("input")
output1 =  document.querySelector(".output")
  button1.addEventListner("click", showMessage)
  function showMessage(){
   let message= `Welcome ${input1.value} in the course of Java Script` 
    output1.innerHTML= message
    console.log(output1);
  }