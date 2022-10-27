$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()){
            $('header').addClass('sticky');
        }
        else {
            $('header').removeClass('sticky');
        }
    });
});

// function submit() {
//     var warning = document.querySelector('warning');
//     var phoneNumber = document.getElementById('phoneNumber');
//     var filter =  /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
//     if (phoneNumber.value.match(filter)) {
//         warning.innerText = "bạn nhập đúng định dạng";
//     }
//     else {
//         warning.innerText = "bạn nhập k đúng định dạng";
//     }
// }
// function is_phonenumber(phonenumber) {
//     var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
//     if(phonenumber.match(phoneno)) {
//       return true;
//     }  
//     else {  
//       return false;
//     }
//   }