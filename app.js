$('document').ready(function(){
    $('#meet-me').on('click', ()=>{
        // console.log('test-about-me')
        $('#main-page').hide();
        $('#contact-page').hide();
        $('#my-work-page').hide();
        $('#about-page').show()
        $('document').ready(()=>{
            $('#dave-shot').show();
        })
    })
    $('#my-work').on('click', ()=>{
        // console.log('test-my-work')
        $('#main-page').hide();
        $('#my-work-page').show();
        $('#contact-page').hide();
        $('#about-page').hide()
    })
    $('#contact').on('click', ()=>{
        // console.log('test-contact')
        $('#main-page').hide();
        $('#contact-page').show();
        $('#about-page').hide();
        $('#my-work-page').hide();
    })
    $('#home-page-dave').on('click', ()=>{
        // console.log('test dave')
        $('#about-page').hide();
        $('#main-page').show();
        $('#contact-page').hide();
        $('#my-work-page').hide();
    })
})