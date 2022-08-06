

		
	  


function home_contactformValid() {

    if (home_contact.capthctext.value == '') {
        alert("Please Enter Security Code. ");
        home_contact.capthctext.focus();
        return (false);
    }  
    if (home_contact.S_name.value == '') {
        alert("Pleaswe enter your full name ");
        home_contact.S_name.focus();
        return(false);
    }
    // var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // var address = home_contact.f_email.value;
    // if (reg.test(address) == false) {
    //     alert('Invalid Email Address');
    //     home_contact.f_email.focus();
    //     return false;
    // }
    if (home_contact.S_mobile.value == "" || isNaN(home_contact.S_mobile.value) || home_contact.S_mobile.value.length != 10) {
        alert("Please Check your Phone no. with the format 123 or 10 digits.");
        home_contact.phone.focus();
        return (false);
    }
   
    if (home_contact.message.value == '') {
        alert("please enter your message.");
        home_contact.message.focus();
        return(false);
    }
    return true;
}


function enq_contactformValid() {
    if (enq_contactform.capthctext.value == '') {
        alert("Please Enter Security Code. ");
        enq_contactform.capthctext.focus();
        return (false);
    }  

    if (enq_contactform.S_name.value == '') {
        alert("Pleaswe enter your full name ");
        enq_contactform.S_name.focus();
        return(false);
    }
    
    if (enq_contactform.S_mobile.value == "" || isNaN(enq_contactform.S_mobile.value) || enq_contactform.S_mobile.value.length != 10) {
        alert("Please Check your Phone no. with the format 123 or 10 digits.");
        enq_contactform.phone.focus();
        return (false);
    }
   
    if (enq_contactform.message.value == '') {
        alert("please enter your message.");
        enq_contactform.message.focus();
        return(false);
    }
    return true;
}
















function getFormQuery() {

    if (FormValidation()) {
        var body =      'Name       : ' + $("#S_name").val() + '<br/>'
                      + 'Contact No : ' + $("#S_mobile").val() + '<br/>'
                      + 'Email      : ' + $("#S_email").val() + '<br/>'
                     + 'Moving From : ' + $("#service_required_from").val() + '<br/>'
                     + 'Moving Upto : ' + $("#service_required_upto").val() + '<br/>'
                    + 'Service Date : ' + $("#datepicker").val() + '<br/>'
                      + 'Service    : ' + $("#service").val() + '<br/>'
                   + 'Address       : ' + $("#S_address").val() + '<br/>'
                      + 'Message    : ' + $("#message").val() + '<br/>'

        callFormQuery(body);
    }
} 

function callFormQuery(txt) {

    //alert('hi1');  
    $('#img').show();
    $('#btnSend').prop('disabled', true);
    var dvedit = $('#responce');
    $.ajax({
        type: "POST",
        url: "https://api.techpex.com/TPCommonApi.svc/sendmail",
        data: '{"toName":"Skywingpackers","toEmail":"skywingpackers@yahoo.com","subject":"Enquiry from skywingspackers.com","mBody":"' + txt + '","clientID":"info@techpex.com"}',
        async: true,
        dataType: 'json',
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        success: function (result) {

            $("#S_name").val('');
            $("#S_mobile").val('');
            $("#S_email").val('');
            $("#service_required_from").val('');
            $("#service_required_upto").val('');
            $("#datepicker").val('');
            $("#service").val('');
            $("#S_address").val('');
            $("#message").val('');

            //alert(result/);
            if (result) {
                dvedit.addClass('MsgGreen').removeClass('ErrRed').text('Thank you for your query, we will get back to you shortly').fadeOut(3000);
                $('#img').hide();

            }
        },
        error: function () {

            dvedit.text('Error in send mmail, Please try after some time');
            $('#img').hide();
            //$('#btnSend').show();
            $('#btnSend').prop('disabled', false);
        }
    });

}


function FormValidation() {
    if (document.dataform.S_name.value == '') {
        alert("Please enter your name.");
        document.dataform.S_name.focus();
        return (false);
    }
    if (document.dataform.S_mobile.value == '') {
        alert("Please enter mobile No.");
        document.dataform.S_mobile.focus();
        return (false);
    }
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.dataform.S_email.value;
    if (reg.test(address) == false) {
        alert('Invalid Email Address');
        document.dataform.S_email.focus();
        return false;
    }
    if (document.dataform.service_required_from.value == '') {
        alert("Please select moving from");
        document.dataform.service_required_from.focus();
        return (false);
    }
    if (document.dataform.service_required_upto.value == '') {
        alert("Please select moving upto");
        document.dataform.service_required_upto.focus();
        return (false);
    }
    if (document.dataform.datepicker.value == '') {
        alert("Please select moving date");
        document.dataform.datepicker.focus();
        return (false);
    }
    if (document.dataform.service.value == '0') {
        alert("Please select service");
        document.dataform.service.focus();
        return (false);
    }

    if (document.dataform.S_address.value == '') {
        alert("Please enter Address  name");
        document.dataform.S_address.focus();
        return (false);
    }

    if (document.dataform.message.value == '') {
        alert("Please Describe Your other Requirements");
        document.dataform.message.focus();
        return (false);
    }
    return true;
}



// for home page quote

function getQuote() {

    if (FormquoteValidation()) {
        var body =      'Name       : ' + $("#S_name").val() + '<br/>'
                    //   + 'Email      : ' + $("#S_email").val() + '<br/>'
                      + 'Contact No : ' + $("#S_mobile").val() + '<br/>'
                      + 'Service    : ' + $("#service").val() + '<br/>'
                     + 'Moving From : ' + $("#service_required_from").val() + '<br/>'
                     + 'Moving Upto : ' + $("#service_required_upto").val() + '<br/>'
                      + 'Message    : ' + $("#message").val() + '<br/>'

        sendQuote(body);
    }
}

function sendQuote(txt) {

    //alert('hi');  
    $('#img').show();
    $('#btnSend').prop('disabled', true);
    var dvedit = $('#responce');
    $.ajax({
        type: "POST",
        url: "http://api.techpex.com/TPCommonApi.svc/sendmail",
        data: '{"toName":"Skywingpackers","toEmail":"skywingpackers@yahoo.com","subject":"Enquiry from skywingspackers.com","mBody":"' + txt + '","clientID":"info@techpex.com"}',
        async: true,
        dataType: 'json',
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        success: function (result) {

            $("#S_name").val('');
            // $("#S_email").val('');
            $("#S_mobile").val('');
            $("#service").val('');
            $("#service_required_from").val('');
            $("#service_required_upto").val('');
            $("#message").val('');

            //alert(result/);
            if (result) {
                dvedit.addClass('MsgGreen').removeClass('ErrRed').text('Thank you for your query, we will get back to you shortly').fadeOut(3000);
                $('#img').hide();

            }
        },
        error: function () {

            dvedit.text('Error in send mail, Please try after some time');
            $('#img').hide();
            //$('#btnSend').show();
            $('#btnSend').prop('disabled', false);
        }
    });

}


function FormquoteValidation() {
    if (document.dataform1.S_name.value == '') {
        alert("Please enter your name.");
        document.dataform1.S_name.focus();
        return (false);
    }
    // var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // var address = document.dataform1.S_email.value;
    // if (reg.test(address) == false) {
    //     alert('Invalid Email Address');
    //     document.dataform1.S_email.focus();
    //     return false;
    // }
    if (document.dataform1.S_mobile.value == '') {
        alert("Please enter mobile No.");
        document.dataform1.S_mobile.focus();
        return (false);
    }
    
    if (document.dataform1.service1.value == '0') {
        alert("Please select service");
        document.dataform1.service1.focus();
        return (false);
    }

    // if (document.dataform1.service_required_from.value == '') {
    //     alert("Please select moving from");
    //     document.dataform1.service_required_from.focus();
    //     return (false);
    // }
    // if (document.dataform1.service_required_upto.value == '') {
    //     alert("Please select moving upto");
    //     document.dataform1.service_required_upto.focus();
    //     return (false);
    // }
    if (document.dataform1.message.value == '') {
        alert("Please Describe Your other Requirements");
        document.dataform1.message.focus();
        return (false);
    }
    return true;
}



// form for Newsletter


function getNewsletter() {

    if (FormNewsValidation()) {
        var body = 'Email Id for Subscription       : ' + $("#s_email").val() + '<br/>'

        callAjax(body);
    }
}

function callAjax(txt) {

    //alert('hi');  
    $('#img').show();
    $('#btnSend').prop('disabled', true);
    var dvedit = $('#responce');
    $.ajax({
        type: "POST",
        url: "http://api.techpex.com/TPCommonApi.svc/sendmail",
        data: '{"toName":"Skywingpackers","toEmail":"skywingpackers@yahoo.com","subject":"Email for Subscription from skywingspackers.com","mBody":"' + txt + '","clientID":"info@techpex.com"}',
        async: true,
        dataType: 'json',
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        success: function (result) {

            $("#s_email").val('');

            //alert(result/);
            if (result) {
                dvedit.addClass('MsgGreen').removeClass('ErrRed').text('Thank you for Subscription.').fadeOut(3000);
                $('#img').hide();

            }
        },
        error: function () {

            dvedit.text('Error in send mmail, Please try after some time');
            $('#img').hide();
            //$('#btnSend').show();
            $('#btnSend').prop('disabled', false);
        }
    });

}




function FormNewsValidation() {
    
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.newsletter.s_email.value;
    if (reg.test(address) == false) {
        alert('Invalid Email Address');
        document.newsletter.s_email.focus();
        return false;
    }
    return true;
}

