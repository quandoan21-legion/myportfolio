function activeNavButton(content) {
    let aElements = document.getElementsByClassName('nav-item')
    clearActiveNavClassName(aElements);
    for (let i = 0; i < aElements.length; i++) {
        if (aElements[i].innerText === content) {
            aElements[i].classList.add('active');
        }

    }
}

function clearActiveNavClassName(aElements) {
    for (let i = 0; i < aElements.length; i++) {
        aElements[i].classList.remove('active');
    }
}

function dropDownMenu() {
    let aElements = document.getElementsByClassName('nav-item');
    let displayVal = aElements[1].style.display;
    let iconElement = document.getElementsByTagName('i');
    for (let i = 1; i < aElements.length; i++) {
        if (displayVal === 'none') {
            aElements[i].style.display = 'block';
            iconElement[0].classList.remove('fa-bar');
            iconElement[0].classList.add('fa-x');

        } else {
            aElements[0].style.display = 'flex';
            aElements[i].style.display = 'none';
            iconElement[0].classList.remove('fa-x');
            iconElement[0].classList.add('fa-bar');
        }
    }
}

function validateForm() {
    console.log(123)
    document.getElementById("form-error").style.display = "none";
    clearErrorMessage("subject");
    clearErrorMessage("name");
    clearErrorMessage("email");
    clearErrorMessage("phone");
    validateInputField("email")
    validateInputField("phone")
    validateInputField("name")
    validateInputField("subject")
}

function clearErrorMessage(inputId) {
    document.getElementById(inputId + "-error").style.display = "none";
    document.getElementById(inputId).style.border = "#595959 solid 1px";
}


function validateInputField(inputId) {
    let user = document.getElementById(inputId).value;
    let user2 = document.getElementById(inputId);
    let re
    switch (inputId) {
        case "email":
            re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            break
        case "name":
            re = /([a-zA-Z0-9_\s]+)/g;
            break
        case "subject":
            re = /([a-zA-Z0-9_\s]+)/g;
            break
        case "phone":
            re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
            break
    }
    if (re.test(user)) {
        console.log("validated address");
        return true;
    } else {
        user2.style.border = "red solid 3px";

        document.getElementById("form-error").style.display = "block";
        document.getElementById(inputId + "-error").style.display = "block";

        return false;
    }
}