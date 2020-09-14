function validateEmail(elementValue){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
  } 

const name = document.getElementById('name')
const uid = document.getElementById('userid')
const pswd = document.getElementById('pswd')
const email = document.getElementById('email')
const form = document.getElementById('form')

form.addEventListener('submit',(e) => {
    let messages = []
    if(!validateEmail(email.value))
    {
        messages.push('Invalid Email id !!!')
    }
    var letters = /^[A-Za-z\s]+$/;
    if(!name.value.match(letters))
    {
        messages.push('Name can contain alphabets only');
    }
    if(pswd.value.length < 8) 
    {
        messages.push("Password must contain at least 8 characters!");
    }
    let re = /[0-9]/;
    if(!re.test(pswd.value)) 
    {
        messages.push("Password must contain at least one number!");
    }
    re = /[A-Z]/;
    if(!re.test(pswd.value)) 
    {
        messages.push("Password must contain at least one uppercase letter (A-Z)!")
    }
    if(pswd.value.includes(uid.value))
    {
        messages.push("Password can't contain user id")
    }
    if(uid.value.length<6)
    {
        messages.push("user id must be at least 6 characters long")
    }
    while(messages.length > 0){
        e.preventDefault()
        alert(messages.pop())
    }
})