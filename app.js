


// el.addEventListener("keyup", log);
// function log(e) {
//     var inputCheck = this.value.length;
//     if (inputCheck > 0) {
//         this.parentElement.classList.add("not-empty")
//     }
//     else {
//         this.parentElement.classList.remove("not-empty")
//     }
// }

const placeholder = {
    photo: "https://superpeer.com/cdn-cgi/image/width=480,quality=90,anim=true,metadata=none,onerror=redirect/https://lando.superpeer.com/hosts%2FFVsnqEvpiekfksBDd0Fn%2Fd87767f1-c22a-485a-8bd8-49e1b32187ac-avatar.jpg",
    name: "Fatih Acet",
    email: "fatih@superpeer.com",
    username: "fatihacet",
    button: "Randevu Al",
}

const inputPhoto = document.querySelector("#inputPhoto");
const photo = document.querySelector("#photo");

inputPhoto.addEventListener("keyup", checkPhoto);
function checkPhoto() {
    var value = this.value;
    if (value.length > 0) {
        photo.src = value
    }
    else {
        photo.src = placeholder.photo
    }
}

const inputFullName = document.querySelector("#inputFullName");
const fullname = document.querySelector("#fullname");
inputFullName.addEventListener("keyup", checkName);
function checkName() {
    var value = this.value;
    if (value.length > 0) {
        fullname.innerText = value
    }
    else {
        fullname.innerText = placeholder.name
    }
}


const inputEmail = document.querySelector("#inputEmail");
const email = document.querySelector("#eml");
inputEmail.addEventListener("keyup", checkMail);
function checkMail() {
    var value = this.value;
    if (value.length > 0) {
        email.innerText = value
        email.href = "mailto:" + value
    }
    else {
        email.innerText = placeholder.email
        email.href = "mailto:" + placeholder.email
    }
}


const inputUsername = document.querySelector("#inputUsername");
const username = document.querySelector("#user");
const resButton = document.querySelector("#btn");
inputUsername.addEventListener("keyup", checkUser);
function checkUser() {
    var value = this.value;
    if (value.length > 0) {
        username.innerText = "superpeer.com/" + value
        username.href = "https://superpeer.com/" + value
        resButton.href = "https://superpeer.com/" + value
    }
    else {
        username.innerText = "superpeer.com/" + placeholder.username
        username.href = "https://superpeer.com/" + placeholder.username
        resButton.href = "https://superpeer.com/" + placeholder.username
    }
}


const inputButtonText = document.querySelector("#inputButtonText");
inputButtonText.addEventListener("keyup", checkButtonText);
function checkButtonText() {
    var value = this.value;
    if (value.length > 0) {
        btn.innerText = value
    }
    else {
        btn.innerText = placeholder.button
    }
}

const instagramCheck = document.querySelector("#instagramCheck");
const instagram = document.querySelector("#insta");
function checkInsta() {
    if (instagramCheck.checked) {
        instagram.href= "https://www.instagram.com/superpeer"
    }
    else {
        instagram.href= "https://www.instagram.com/superpeer.tr/"
    }
}