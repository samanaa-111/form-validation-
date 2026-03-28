//cookies
//document.cookie(username= "samana");
//cookies set
// document.cookie="keyvalue";
// document.cookie="username=samana";
// document.cookie="password=6437289";expires=2026-2-26;

// //how to access cookie
// //document.cookies['key'];
// let cookievalue=document.cookie;
// console.log(cookievalue);

// //modify or update the cookie
// document.cookie= "username=ram";
// document.cookie= "password=1234";
// //cookie delete
// document.cookie="username=ram;max-age=0"




//how to set a cookie
// document.cookie;
// document.cookie ="college= nihareeka; expires= fri,27 feb 2026 12:00:00 UTC ;path=/";

// //   access the cookie
// console.log(document.cookie);

// // update or modify the cookie
// document.cookie = "college=TU ;expires= fri,27 feb 2026 12:00:00 UTC ;path=/";
// console.log(document.cookie);

// // delete the cookie
// document.cookie ="college= nihareeka; expires= 24 feb 2026 12:00:00 UTC; path=/";






//form validation 
let form=document.querySelector("#Signupform");
// console.log(form);
form.addEventListener("submit",(e)=>{
      e.preventDefault();
      let errormesage=document.querySelector("#errormessage");
      errormessage.innerText=" ";
      let username=document.querySelector("#username");
      let usernamevalue=username.value.trim();
    //   alert(usernamevalue);
    let psw=document.querySelector("#password");
    let pswvalue=psw.value.trim();

    let cpsw=document.querySelector("#cpassword");
    let cpswvalue=cpsw.value.trim();
    // alert(pswvalue);
    // alert(cpswvalue);
    let email=document.querySelector("#email");
    let emailvalue=email.value.trim();
    // alert(emailvalue);

    let pnumber=document.querySelector("#pnumber");
    let pnumbervalue=pnumber.value.trim();
    // alert(pnumbervalue);

    let usernamelength=usernamevalue.length;
    // alert(usernamelength);
    if(usernamelength<3||usernamelength>8){
        // alert("invalid usernamelength");
        errormessage.innerText="usernamelength must be in between 3 and 8 characters";
        return;
    }
    if(pswvalue!==cpswvalue)
    {
        errormessage.innerText="password and confirm password doesnot match";
        return;
    }
    form.submit();

});



