$(document).ready(function(){
$(".question-box").click(function(){
    $(this).find("i").toggleClass("open")
    $(this).parent().find(".ans-box").slideToggle("fast")
})
})