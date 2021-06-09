let name = document.getElementById("from_name");
let surname = document.getElementById("from_surname");
let email = document.getElementById("from_email");
let phone = document.getElementById("from_phone");
let message = document.getElementById("from_message");

let form_data = document.querySelector("form");
let form_button = document.getElementsByClassName("submit-button");

form_data.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    from_name: name.value,
    from_surname: surname.value,
    from_email: email.value,
    from_phone: phone.value,
    message: message.value,
  };
  console.log(form_button);
  form_button[0].classList.add("spin-button");
  form_button[0].innerHTML = "<div class='spin'> </div>";

  emailjs.send("service_fw2vgww", "template_majyzek", obj).then((res) => {
    console.log(res.status);
    // form_button[0].classList.remove("spin-button");

    if (res.status == 200) {
      form_button[0].innerHTML = "<div class='tick'> </div>";
      // form_button[0].innerHTML = "Sent";
      setTimeout(function () {
        form_button[0].innerHTML = "SEND";
        // alert("message Send successfully");
        form_button[0].classList.remove("spin-button");
      }, 3500);

      // alert("Sent");
    } else {
      alert("Text not sent");
      form_button[0].classList.remove("spin-button");
    }
  });
});
