function validate(params) {
    var firstName=document.registration.fname;
    var lastName=document.registration.lname;
    var number=document.registration.number;
    var address=document.registration.address;
    var email=document.registration.email;
    var select=document.registration.select;
    var submit=document.registration.submit;
    var reset=document.registration.reset;

    if(firstName.value.length<=0){
        alert("enter first name");
        return false;
    }

    if(lastName.value.length<=0){
        alert("enter last name");
        return false;
    }

    if(number.value.length<=0){
        alert("enter correct number");
        return false;
    }

    if(address.value.length<=0){
        alert("enter proper address");
        return false;
    }

    if(email.value.length<=0){
        alert("enter proper format email");
        return false;
    }

    if(select.value.length<=0){
        alert("select correct course");
        return false;
    }

    return false;
   
    
}