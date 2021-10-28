let validateForm = () => {
    let username = document.forms["mainForm"]["username"].value;
    if (username == "") {
      alert(" ada input field yang belum terisi ");
      return false;
    }
    let password = document.forms["mainForm"]["password"].value;
    if (password == "") {
      alert(" ada input field yang belum terisi ");
      return false;
    }
    let confirmpassword = document.forms["mainForm"]["confirmpassword"].value;
    if (confirmpassword == "") {
      alert(" ada input field yang belum terisi ");
      return false;
    }
    let email = document.forms["mainForm"]["email"].value;
    if (email == "") {
      alert(" ada input field yang belum terisi ");
      return false;
    }
    let confirmemail = document.forms["mainForm"]["confirmemail"].value;
    if (confirmemail == "") {
      alert(" ada input field yang belum terisi ");
      return false;
    }
    if (password != confirmpassword) {
      alert(" password tidak sama dengan confirm password  ");
      return false;  
    }
    if (email != confirmemail) {
      alert("  email tidak sama dengan confirm email   ");
      return false;  
    }
  };