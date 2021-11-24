$(document).click(function(e){
    if($(e.target).closest('.search-wrapper .form-group label').length === 0 && $(e.target).closest('.search-wrapper .form-group .form-control').length === 0){
        $('body').removeClass('open-search-box');
    }
});