let generatedOTP = "";

function sendOTP(){

  const mobile = document.getElementById("mobile").value;

  if(mobile.length !== 10){
    alert("Enter valid 10 digit mobile number");
    return;
  }

  generatedOTP = Math.floor(100000 + Math.random() * 900000);

  document.getElementById("otp").disabled = false;
  document.getElementById("otpMsg").innerText =
  "Your OTP is: " + generatedOTP;
}


function verifyOTP(){

  const userOTP = document.getElementById("otp").value;

  if(userOTP == generatedOTP){
    alert("OTP Verified Successfully ✅");

    // Django URL redirect
    window.location.href = "/movielogin/";

  }else{
    alert("Invalid OTP ❌");
  }
}
