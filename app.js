$('document').ready(function(){
    $('#dave-shot').hide();
    $('#meet-me').on('click', ()=>{
        // console.log('test-about-me')
        $('#main-page').hide();
        $('#contact-page').hide();
        $('#my-work-page').hide();
        $('#about-page').show()
        $('#my-work-page a').hide();
        setTimeout(function(){
            $('#dave-shot').show()
        }, 2500);
    })
    $('#my-work').on('click', ()=>{
        // console.log('test-my-work')
        $('#main-page').hide();
        $('#my-work-page').show();
        $('#contact-page').hide();
        $('#about-page').hide()
        $('#dave-shot').hide();
        setTimeout(function(){
            $('#my-work-page a').show()
        }, 2500);
        })
    $('#contact').on('click', ()=>{
        // console.log('test-contact')
        $('#main-page').hide();
        $('#contact-page').show();
        $('#about-page').hide();
        $('#my-work-page').hide();
        $('#my-work-page a').hide();
        $('#dave-shot').hide();
    })
    $('#home-page-dave').on('click', ()=>{
        // console.log('test dave')
        $('#about-page').hide();
        $('#main-page').show();
        $('#contact-page').hide();
        $('#my-work-page').hide();
        $('#my-work-page a').hide();
        $('#dave-shot').hide();
    })
})
