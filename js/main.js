$(document).ready(function () {

    const fullname = $('#fullname');
    const email = $('#email');
    const mobile = $('#mobile');
    const company = $('#company');
    const role = $('#role');

    fullname.on("keyup", () => {
        const fullnameValue = fullname.val();
        $('.fullname-error').remove();
        fullnameHasError = true;
        if(fullnameValue.length < 1){
            fullname.after('<p class="error fullname-error">Please fill in your name.</p>');
            return;
        }
        if(fullnameValue.length > 50){
            fullname.after('<p class="error fullname-error">Maximum length has been exceeded.</p>');
            return;
        }
        if(/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(fullnameValue) !== true) {
            fullname.after('<p class="error fullname-error">Please only fill in letters.</p>');
            return;
        } else {
            fullnameHasError = false;
            isFormValid();
        }
    });
    email.on("keyup", () => {
        const emailValue = email.val();
        $('.email-error').remove();
        emailHasError = true;
        if(emailValue.length < 1){
            email.after('<p class="error email-error">Please fill in your email address.</p>');
            return;
        }
        if(emailValue.length > 50){
            email.after('<p class="error email-error">Maximum length has been exceeded.</p>');
            return;
        }
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue) !== true) {
            email.after('<p class="error email-error">Please only fill in a correct email address format.</p>');
            return;
        } else {
            emailHasError = false;
            isFormValid();
        }
    });
    mobile.on("keyup", () => {
        const mobileValue = mobile.val();
        $('.mobile-error').remove();
        mobileHasError = true;
        if(mobileValue.length < 1){
            mobile.after('<p class="error mobile-error">Please fill in your mobile number.</p>');
            return;
        }
        if(mobileValue.length > 13){
            mobile.after('<p class="error mobile-error">Maximum length has been exceeded.</p>');
            return;
        }
        if(/^[+\d]+$/.test(mobileValue) !== true) {
            mobile.after('<p class="error mobile-error">Please only fill in numbers.</p>');
            return;
        } else {
            mobileHasError = false;
            isFormValid();
        }
    });
    company.on("keyup", () => {
        const companyValue = company.val();
        $('.company-error').remove();
        companyHasError = true;
        if(companyValue.length < 1){
            company.after('<p class="error company-error">Please fill in your company name.</p>');
            return;
        }
        if(companyValue.length > 50){
            company.after('<p class="error company-error">Maximum length has been exceeded.</p>');
            return;
        }
        if(/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(companyValue) !== true) {
            company.after('<p class="error company-error">Please only fill in letters.</p>');
            return;
        } else {
            companyHasError = false;
            isFormValid();
        }
    });
    role.on("click", () => {
        const roleValue = role.val();
        $('.role-error').remove();
        roleHasError = true;
        if(roleValue.length < 1){
            role.after('<p class="error role-error">Please select your role in the company.</p>');
        } else {
            roleHasError = false;
            isFormValid();
        }
    });

    function isFormValid() {
        if(!fullnameHasError &&
        !emailHasError &&
        !mobileHasError &&
        !companyHasError &&
        !roleHasError) {
            $('#submit').prop("disabled", false);
        }
    }
    
    $('#form').submit(function(e) {
        const form = $(this);
        let formdata = null;
        if(window.FormData){
            formdata = new FormData(form[0]);
        }

        $.ajax({
            type        : 'POST',
            url         : '../post.php',
            cache       : false,
            data        : formdata ? formdata : form.serialize(),
            contentType : false,
            processData : false,
            dataType    : 'json',

            success: function(response) {
                //TARGET THE MESSAGES DIV IN THE MODAL
                if(response.type == 'success') {
                    $('#thanks').removeClass('hide').fadeOut(5000);
                    form[0].reset();
                } else {
                    $('#fail').removeClass('hide').fadeOut(5000);
                    form[0].reset();
                }
            }
        });
        e.preventDefault();
    });
    
});

