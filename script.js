$(document).ready(function(){
    $('#message-form').validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:8
            },
            sname:{
                required:true,
                minlength:4
            },
            emailadress:{
                required:true,
                email:true
            },
           phone:{
                required:true,
		        minlength: 10,
		        maxlength: 10 
            }

        }
    })
    // $('#first-email').validate({
    //     rules:{
    //         mailfirst:{
    //             required:true,
    //             email:true
    //         } 
    //     }

    // })

})
