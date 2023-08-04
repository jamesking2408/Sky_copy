let popup = document.getElementById("pop");
let popup1 = document.getElementById("pop1");

// Details are contact me in index page

function openPopup() {

    const mail = document.querySelector("#form-mail").value;
    const ph = document.querySelector("#form-number").value;
    const filter = /^([a-z0-9_\.\-]{3,20})+\@(([a-z\-])+\.)+([a-z]{2,4})+$/;
    if ((mail == "") || (ph == "")) {
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please enter your Valid Details!";
        popup1.classList.add("open-popup");
    }
    else if ((ph.length !== 10) && (!filter.test(mail))) {
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Phone number and Mail-ID!";
        popup1.classList.add("open-popup");
    }
    else if (ph.length !== 10) {
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Phone Number!";
        popup1.classList.add("open-popup");
    }
    else if (!filter.test(mail)) {
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Mail ID!";
        popup1.classList.add("open-popup");
    }
    else {
        document.querySelector(".sub-popup h2").innerHTML = "Thank You!";
        document.querySelector(".sub-popup p").innerHTML = "Successfully submitted.<br>We will respose you later.<br>Thank you so much!";
        console.log("\t\t\t REQUEST FORM DETAILS"+"\nEmail-ID: " + mail + " " + "\n Phone Number: " + ph);
        popup.classList.add("open-popup");
    }
}

// Details are customers in index page

function msgButton() {
    const cus_name = document.querySelector("#cus-name").value;
    const num = document.querySelector("#cus-number").value;
    const mail = document.querySelector("#cus-mail").value;
    const txt = document.querySelector("#cus-text").value;
    if((cus_name == "")||(num == "")||(mail == "")||(txt == "")||(txt.length < 100)){
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your All Fields!";
        popup1.classList.add("open-popup");
    }
    else if (cus_name == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Name please!!!";
        popup1.classList.add("open-popup");
    }
    else if (num == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Number please!!!";
        popup1.classList.add("open-popup");
    }
    else if (mail == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Mail-ID please!!!";
        popup1.classList.add("open-popup");
    }
    else if (txt == "") {
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out message field!!!";
        popup1.classList.add("open-popup");
    }
    else if (txt.length < 100) {
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Please Fill out message field!!!";
        popup1.classList.add("open-popup");
    }
    else {
        document.querySelector(".sub-popup h2").innerHTML = "Congrats!";
        document.querySelector(".sub-popup p").innerHTML = "Your details submitted successfully. ";
        console.log("\t\t\tCUSTOMER DETAILS"+"\nName : " + cus_name + " " + "\n Phone Number: " + num + " " + "\n Mail ID: " + mail + " " + "\n Project Details: " + txt);
        popup.classList.add("open-popup");
    }
}

// Details are Request form in service page

document.querySelector("#callBack").addEventListener("click", function () {
    let name1 = document.querySelector("#na").value;
    let mail = document.querySelector("#Id").value;
    let mob = document.querySelector("#mob").value;
    let sub = document.querySelector("#sub").value;
    let txt = document.querySelector("#msg").value;

    let filter = /^([a-z0-9_\.\-]{3,20})+\@(([a-z\-])+\.)+([a-z]{2,4})+$/;

    if((name1=="")||(mob=="")||(mail=="")||(sub=="")||(txt=="")){
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your ALL field!";
        popup1.classList.add("open-popup");
    }
    else if(name1==""){
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Name field!";
        popup1.classList.add("open-popup");
    }
    else if(!filter.test(mail)){
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your mail field!";
        popup1.classList.add("open-popup");
    }
    else if((mob=="")||(mob.length>10)||(mob.length<10)){
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your mobile field!";
        popup1.classList.add("open-popup");
    }
    else if(sub==""){
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Subject field!";
        popup1.classList.add("open-popup");
    }
    else if(txt==""){
        document.querySelector(".sub-popup1 h2").innerHTML = "☹ SORRY!";
        document.querySelector(".sub-popup1 p").innerHTML = "Check your Subject field!";
        popup1.classList.add("open-popup");
    }
    else{
        document.querySelector(".sub-popup h2").innerHTML = "Congrats!";
        document.querySelector(".sub-popup p").innerHTML = "Your details Submitted Successfully!..<br>THANK YOU!";
        console.log("\t\t\t REQUEST FORM DETAILS"+"\n Name : " + name1 + " " + "\n Phone Number: " + mob + " " + "\n Mail ID: " + mail + " " + "\n Subject: " + sub+ " " + "\n Project Details: " + txt);
        popup.classList.add("open-popup");
    }
});


function closePopup() {
    popup.classList.remove("open-popup");
    document.open_form.reset();
    document.cus_form.reset();
}

function closePopup0() {
    popup.classList.remove("open-popup");
    document.callus.reset();
}
function closePopup1() {
    popup1.classList.remove("open-popup");
}