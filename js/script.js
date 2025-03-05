$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});
// menu lateral

function ToggleEvent (){
    var menu = document.getElementById("menulateral");
    menu.style.display = menu.style.display === "block" ? "none": "block";
}
document.addEventListener("click", function(event){
    var menu = document.getElementById("menulateral");
    var icon = document.getElementById("fa-regular fa-user");
    if (!menu.contains(event.target) && !icon.contains(event.target))menu.style.display = "none";
});


