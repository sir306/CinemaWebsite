//--Nicholas R. Harding 20200344 - IT5039 Project 1--

//refresh values
function refreshValues() {
    document.getElementById("signUp-form").reset();
}
const numberAndSymbolArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "*", "^", "/", "=", "+", "`", "-", "<", ">", "\\"];

function validateSignUp() {
    //variables
    var firstNameInput = document.getElementById("nameInput");
    var lastNameInput = document.getElementById("lastNameInput");
    var maleInput = document.getElementById("maleRadio");
    var femaleInput = document.getElementById("femaleRadio");
    var phoneInput = document.getElementById("phoneInput");
    var emailInput = document.getElementById("emailInput");
    if ((firstNameInput.value !== "" && (lastNameInput.value !== "")) && (phoneInput.value !== "") && (emailInput.value !== "") && ((maleInput.checked === true) || (femaleInput.checked === true))) {
        var gender = "male";
        for (let i = 0; i < numberAndSymbolArray.length; i++) {
            x = numberAndSymbolArray[i]
            console.log(x);
            var textValue = firstNameInput.value
            for (let y = 0; y < textValue.length; y++) {
                if (textValue[y] === x) {
                    console.log(x);
                    console.log(`bad value`);
                    alert("That is not a letter, enter only enter letters into first name")
                    firstNameInput.focus()
                    return false
                }
            }
        };
        for (let i = 0; i < numberAndSymbolArray.length; i++) {
            x = numberAndSymbolArray[i]
            console.log(x);
            var textValue = lastNameInput.value
            for (let y = 0; y < textValue.length; y++) {
                if (textValue[y] === x) {
                    console.log(x);
                    console.log(`bad value`);
                    alert("That is not a letter, only enter leters into last name")
                    lastNameInput.focus()
                    return false
                }
            }
        };
        if (femaleInput.checked === true) {
            gender = "female";
        }
        var confirmText = `Please check these details you entered:\r\n${firstNameInput.value} as your first name,\r\n${lastNameInput.value} as your last name,\r\nyou selected ${gender} as your gender,\r\nyour phone number is: ${phoneInput.value}\r\nand your email as: ${emailInput.value}\r\nIf these are correct click Ok`;
        if (confirm(confirmText)) {
            //alert('you clicked ok')
            document.getElementById("thankYouPageRef").innerHTML = (thankYouMessage);
        }
        else {
            //alert('you clicked cancel')
            return false;
        }
    }
    else {
        var alertTextName = "";
        var alertTextlast = "";
        var alertTextGender = "";
        var alertTextPhone = "";
        var alertTextemail = ""
        if (firstNameInput.value === "") {
            firstNameInput.focus();
            console.log("im in name alert")
            alertTextName = "Fill in name";
        }
        if (lastNameInput.value === "") {
            lastNameInput.focus();
            alertTextlast = "Fill in last name";
        }
        if (phoneInput.value === "") {
            phoneInput.focus();
            alertTextPhone = "Fill in phone number";
        }
        if (emailInput.value === "") {
            emailInput.focus();
            alertTextemail = "Fill in email";
        }
        if ((maleInput.checked != + true) && (femaleInput.checked != + true)) {
            alertTextGender = "Please pick a gender";
        }
        alert(`${alertTextName}\r\n${alertTextlast}\r\n${alertTextGender}\r\n${alertTextPhone}\r\n${alertTextemail}`);
    }
}
var thankYouMessage = `<div class="page-content-wrapper"><!--navbar copy and paste div in pages for unity--><!--navbar code was learned on https://www.w3schools.com/css/css_navbar_horizontal.asp--><!--logo was created with logomaker https://logomakr.com/9H9bPz--><div class="nav-grid"><img class="item1" src="images/EyeCandyCinemaLogo.png" alt="Eye Candy Cinema Logo"><nav class="navbar"><ul class="item2"><li class="nav-item"><a class="nav-link" title="Home Page" href="Index.html">HomePage</a></li><li class="nav-item"><a class="nav-link" title="Now Showing Page" href="NowShowingPage.html">Now Showing</a></li><li class="nav-item"><a class="nav-link" title="Bookings" href="bookings.html">Bookings</a></li><li class="nav-item"><a class="nav-link" title="Up Coming Movies Page" href="UpcomingMoviesPage.html">Up Coming Movies</a></li><li class="nav-item"><a class="nav-link" title="Sign Up Page" href="SignUpPage.html">Sign Up</a></li><li class="nav-item"><a class="nav-link" title="Contact Us Page" href="ContactUsPage.html">Contact Us</a></li></ul></nav></div><div class="start-of-doc"><div class="thank-you-message"><h1>Thank You!<br>We hope you enjoy our services!</h1><br><br><img src="images/thank_you_image.jpg" alt="Thank You Image"></div></div><div class="footer"><div id="footer-content"><p>Logo created by Nicholas R. Harding 27/06/2020 with Logomakr and are credited all rights to this at <a href="https://logomakr.com/9H9bPz" target="blank">https://logomakr.com/9H9bPz</a>. No copyright infringement is intended.</p><p>Thank You image was retrieved from <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zazzle.co.nz%2Fmovie%2Bthank%2Byou%2Bgifts&psig=AOvVaw0dsX7h930d0_KX6GcF_QjG&ust=1593363331403000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDf3JC7ouoCFQAAAAAdAAAAABAK">https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zazzle.co.nz%2Fmovie%2Bthank%2Byou%2Bgifts&psig=AOvVaw0dsX7h930d0_KX6GcF_QjG&ust=1593363331403000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDf3JC7ouoCFQAAAAAdAAAAABAK</a>No copyright infringement was intended.</p><p>This webpage was created by Nicholas R. Harding on 27/06/2020.</p></div></div></div>`;