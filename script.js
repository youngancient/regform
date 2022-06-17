document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").onsubmit = function (){
        let fname = document.querySelector("form #fname").value;
        let lname = document.querySelector("form #lname").value;
        let email = document.querySelector("form #email").value;
        if(fname == ""){
            error(".fname");
        }
        if(lname == ""){
            error(".lname");
        }
        if(email == ""){
            error(".email");
        }
        if(document.querySelector("form #password").value.length < 1){
            error(".password");
        } else if(document.querySelector("form #password").value.length < 8){
            document.querySelector("form .password").innerHTML = "Password not long enough - less than 8 characters!";
            error(".password");
        }
    };
});

function error(className){
    document.querySelector(`form ${className}`).style.display = "block";
}