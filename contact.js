$(document).ready(function() {
    var fixHeight = function() {
      $('.navbar-nav').css(
        'max-height',
        document.documentElement.clientHeight - 150
      );
    };
    fixHeight();
    $(window).resize(function() {
      fixHeight();
    });
    $('.navbar .navbar-toggler').on('click', function() {
      fixHeight();
    });
    $('.navbar-toggler, .overlay').on('click', function() {
      $('.mobileMenu, .overlay').toggleClass('open');
    });
  });

  /*form validation*/

  function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
  }

  /*
  var submitted=false;
  <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"      
                     onload="if(submitted) {
                       window.location='../index.html';}"></iframe> 


                       function validateName() {
                        var name = document.getElementById('name').value;
                        if(name.length == 0) {
                          alert("Name can't be blank") ;
                          return false;
            
                        }
                        if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
                          alert("Please enter your correct name") ;//Validation Message
                          return false;
                        }
                        return true;
                      }
                      function validatelocation() {
                        var name = document.getElementById('location').value;
                        if(name.length == 0) {
                          alert("Name can't be blank") ;
                          return false;
            
                        }
                        if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
                          alert("Please enter your correct location") ;//Validation Message
                          return false;
                        }
                        return true;
                      }
                      function validateQuantiy() {
                        var name = document.getElementById('Quantity').value;
                        if(name.length == 0) {
                          alert("Name can't be blank") ;
                          return false;
            
                        }
                        if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
                          alert("Please enter your correctly") ;//Validation Message
                          return false;
                        }
                        return true;
                      }
                      function validatePhone() {
                        var phone = document.getElementById('phone').value;
                        if(phone.length == 0) {
                          alert("Phone number can't be blank") ;//Validation Message
                          return false;
                        }
            
                        if(!phone.match(/^[0]?[789]\d{9}$/)) {
                         alert("Please enter a correct phone number") ;//Validation Message
                         return false;
                       }
            
                       return true;
            
                     }
            
                     function validateEmail () {
            
                      var email = document.getElementById('email').value;
                      if(email.length == 0) {
                        alert("Email can't be blank") ;//Validation Message
                        return false;
            
                      }
            
                      if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
                        alert("Please enter a correct email address") ;//Validation Message
                        return false;
            
                      }
            
                      return true;
            
                    }
            
            
                    function validateForm() {
                      if (!validateName() || !validatePhone() || !validateEmail()) {
            
                        alert("Form not submitted");//Validation Message
                        return false;
                      }
                      else {
                        submitted=true;
                        return true;
                      }
                    }*/