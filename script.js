let name = document.getElementById("from_name");
let surname = document.getElementById("from_surname");
let email = document.getElementById("from_email");
let phone = document.getElementById("from_phone");
let message = document.getElementById("from_message");

let form_data = document.querySelector("form");
let form_button = document.getElementsByClassName("btn");

form_data.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    from_name: name.value,
    from_surname: surname.value,
    from_email: email.value,
    from_phone: phone.value,
    message: message.value,
  };
  // console.log(obj);
  emailjs.send("service_fw2vgww", "template_majyzek", obj).then((res) => {
    console.log(res.status);
  });
});
