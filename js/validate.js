console.log("validate form");
let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
  e.preventDefault();
 validateForm();
  console.log("lets submit");
})
function validateForm() {   
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;//queryText
    let querytext=document.getElementById('queryText').value;
    let nameflag = false;
    let phoneflag = false;
    let emailflag = false;
    let queryStringflag=false;
    if (validateName(name.trim())) { 
      nameflag = true;
    }
    if (ValidatePhoneNumber(phone.trim())) {
      phoneflag = true;
    }
    if (ValidateEmail(email.trim())) {
      emailflag = true;
    }
    if(validateQuery(querytext.trim())){
        queryStringflag=true;
    }
    
   
    if (nameflag && phoneflag && emailflag && queryStringflag) {
        successMessage();
        document.getElementById("name").value="";
        document.getElementById("phone").value="";
        email = document.getElementById("email").value="";
        document.getElementById('queryText').value="";
      return true;
    }
    else {
      errorMessage();
      return false;
    }
}


  //valiadte email
  function ValidateEmail(inputText) {
     let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if (inputText.match(mailformat)) {
        document.getElementById('email').style.removeProperty('border');
       return true;
     }
     else {
      document.getElementById('email').style.boxShadow="none";
       document.getElementById('email').style.border="1px solid red";
       return false;
     }
    
  }

  //validate phone number
function ValidatePhoneNumber(phone) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone.match(phoneno)) {
      document.getElementById('phone').style.removeProperty('border');
      return true;
    }
    else {
      document.getElementById('phone').style.boxShadow="none"; 
      document.getElementById('phone').style.border="1px solid red";
      return false;
    }
  }

//valiadte name
function validateName(name) {
    var namregx = /^[A-Za-z\s]+$/;
    if (name.match(namregx)) {
      document.getElementById('name').style.removeProperty('border'); 
        
      return true;
    } else {
      //document.getElementById('name').style.boxShadow = "0 0 10px red";
      document.getElementById('name').style.boxShadow="none"; 
      document.getElementById('name').style.border="1px solid red"
      return false;
    }
  }

  function validateQuery(query){
      if(query===""){
        document.getElementById('queryText').style.boxShadow="none"; 
        document.getElementById('queryText').style.border="1px solid red"
        
          return false;
      }else{
       
        document.getElementById('queryText').style.removeProperty('border');
          return true;
      }
  }
  function successMessage(){
    let success=document.getElementById('success-error');
    success.innerHTML=`<div class="alert alert-success alert-dismissible fade show alert-custom" role="alert">
    <strong></strong> Submit Successfully!!you may now close this window.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
  }

  function errorMessage(){
      let success=document.getElementById('success-error');
      success.innerHTML=`<div class="alert alert-danger alert-dismissible fade show alert-custom" role="alert">
      <strong>Please!!</strong> Fill all details before submit
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`;
  }