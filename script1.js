const form = document.querySelector('form');
const fullName = document.getElementById("fullName");
const  email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<BR> Email: ${email.value}<BR> Phone Number: ${phoneNumber.value}<BR> Message: ${message.value}`;

    Email.send({
        SecureToken : "5C755765FF5C3B6D30C3A3333CE6527791D3",
        Host : "smtp.elasticemail.com",
        Username : "eralab07@gmail.com",
        Password : "5C755765FF5C3B6D30C3A3333CE6527791D3",
        To : 'eralab07@gmail.com',
        From : "eralab07@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!!",
                icon: "success"
              });
        }
      }
    );
}
function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        /*if (items[1].value != "") {
            checkEmail();
        } */

        /*items[1].addEventListener("keyup", () => {
            checkEmail();
        })*/
        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}
function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z]{2,3})(\.[a-z]{2,3})?$/;
    /* const errorTxtEmail = document.querySelector(".error-txt.email1"); */

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

       /* if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "Email cant";
        } */
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");

    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phoneNumber.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }  
})