document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").onsubmit = function (){
        let fname = document.querySelector("form #fname").value;
        let lname = document.querySelector("form #lname").value;
        let email = document.querySelector("form #email").value;
        if(fname == ""){
            display(".fname");
        }
        if(lname == ""){
            display(".lname");
        }
        if(email == ""){
            display(".email");
        }
        if(document.querySelector("form #password").value.length < 1){
            display(".password");
        } else if(document.querySelector("form #password").value.length < 8){
            document.querySelector("form .password").innerHTML = "Password not long enough - less than 8 characters!";
            display(".password");
        }
        if(fname.length > 1){
            display(".sucess");
            reset();
            deadAm();
        }
    };
});

function display(className){
    document.querySelector(`form ${className}`).style.display = "block";
}
function reset(){
    document.querySelector("form #fname").value = "";
    document.querySelector("form #lname").value = "";
    document.querySelector("form #email").value = "";
    document.querySelector("form #password").value = "";
}
function deadAm(){
document.querySelectorAll("form .error").forEach((each) =>{
    each.style.display = "none";
});
}