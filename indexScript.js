function validateEmail(elementValue){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
  } 

const name =       document.getElementById('name')
const uid =        document.getElementById('userid')
const pswd =       document.getElementById('pswd')
const email =      document.getElementById('email')
const form =       document.getElementById('form')
const uiderror =   document.getElementById('uiderror')
const pswderror1 = document.getElementById('pswderror1')
const pswderror2 = document.getElementById('pswderror2')
const pswderror3 = document.getElementById('pswderror3')
const pswderror4 = document.getElementById('pswderror4')
const emailerror = document.getElementById('emailerror')

form.addEventListener('submit',(e) => {
    let messages = []
    // let flag = 0;
    if(uid.value.length<6)
    {
        messages.push("user id must be at least 6 characters long")
        // flag = flag + 1;
        // flag1 = true;
        uiderror.innerText = "user id must be at least 6 characters long"
    }
    else{
        uiderror.innerText = null;
    }
    
    if(email.value.length>0 && !validateEmail(email.value))
    {
        messages.push('Invalid Email id !!!')
        // flag++;
        // flag2 = true;
        emailerror.innerText = 'Invalid Email id !!!'
    }
    else{
        emailerror.innerText = null;
    }
    // var letters = /^[A-Za-z\s]+$/;
    // if(name.value.length>0 && !name.value.match(letters))
    // {
    //     messages.push('Name can contain alphabets only');
    // }
    if(pswd.value.length < 8) 
    {
        messages.push("Password must contain at least 8 characters!");
        // flag++;
        pswderror1.innerText = "Password must contain at least 8 characters!"
    }
    else{
        pswderror1.innerText = null;
    }
    let re = /[0-9]/;
    if(pswd.value.length>0 && !re.test(pswd.value)) 
    {
         messages.push("Password must contain at least one number!");
        // flag++;
        pswderror2.innerText = "Password must contain at least one number!";
    }
    else{
        pswderror2.innerText = null;
    }
    re = /[A-Z]/;
    if(pswd.value.length>0 && !re.test(pswd.value)) 
    {
         messages.push("Password must contain at least one uppercase letter (A-Z)!")
        // flag++;
        pswderror3.innerText = "Password must contain at least one capital letter";
    }
    else{
        pswderror3.innerText = null;
    }
    if(pswd.value.length>0 && pswd.value.includes(uid.value))
    {
         messages.push("Password can't contain user id")
        // flag++;
        pswderror4.innerText = "Password can't contain user id";
    }
    else{
        pswderror4.innerText = null;
    }
    if(messages.length>0){
        e.preventDefault()
        
    }
})