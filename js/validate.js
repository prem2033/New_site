let submit=document.getElementById('submit');
let nameflag = false;
let phoneflag = false;
let emailflag = false;
let queryStringflag=false;
submit.addEventListener('click',(e)=>{
  e.preventDefault();
 validateForm();
})
function validateForm() {   
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");//queryText
    let query=document.getElementById('queryText');
   
    if (validateName(name)){ 
      nameflag = true;
    }else{
      nameflag = false;
    }
    if (ValidatePhoneNumber(phone)) {
      phoneflag = true;
    }else{
      phoneflag = false;
    }
    if (ValidateEmail(email)) {
      emailflag = true;
    }else{
      emailflag = false;
    }
    if(validateQuery(query)){
        queryStringflag=true;
    }else{
      queryStringflag = false;
    }    
    if (nameflag && phoneflag && emailflag && queryStringflag) {
        successMessage();
        name.value="";
        phone.value="";
        email.value="";
        query.value="";
      return true;
    }
    else {
      errorMessage();
      return false;
    }
}


  //valiadte email
  function ValidateEmail(email) {
     let mailformat =/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
     if (email.value.trim().match(mailformat)) {
        //document.getElementById('email').style.removeProperty('border');
        email.classList.remove('is-invalid');
       return true;
     }
     else {
      //document.getElementById('email').style.boxShadow="none";
       //document.getElementById('email').style.border="1px solid red";
       email.classList.add('is-invalid');
       return false;
     }
    
  }

  //validate phone number
function ValidatePhoneNumber(phone) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone.value.trim().match(phoneno)) {
      //document.getElementById('phone').style.removeProperty('border');
      phone.classList.remove('is-invalid');
      return true;
    }
    else {
      //document.getElementById('phone').style.boxShadow="none"; 
      //document.getElementById('phone').style.border="1px solid red";
      phone.classList.add('is-invalid');
      return false;
    }
  }

//valiadte name
function validateName(name) {
    var namregx = /^[A-Za-z\s]+$/;
    if (name.value.trim().match(namregx)) {
      //document.getElementById('name').style.removeProperty('border'); 
      name.classList.remove('is-invalid');
      return true;
    } else {
      // document.getElementById('name').style.boxShadow="none"; 
      // document.getElementById('name').style.border="1px solid red"
      name.classList.add('is-invalid');
      return false;
    }
  }

  function validateQuery(query){
      if(query.value.trim()===""){
        // document.getElementById('queryText').style.boxShadow="none"; 
        // document.getElementById('queryText').style.border="1px solid red"
        query.classList.add('is-invalid');
          return false;
      }else{
       
        //document.getElementById('queryText').style.removeProperty('border');
        query.classList.remove('is-invalid');
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
//blur event on form
  let email=document.getElementById('email');
  email.addEventListener('blur',()=>{    
    ValidateEmail(email);
  })

  let phone=document.getElementById('phone');
  phone.addEventListener('blur',()=>{  
    ValidatePhoneNumber(phone) ;
  })

  let name=document.getElementById('name');
  name.addEventListener('blur',()=>{    
    validateName(name);
  })

  let query=document.getElementById('queryText');
  query.addEventListener('blur',()=>{    
    validateQuery(queryText);
  })