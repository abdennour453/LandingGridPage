 var navBar=document.getElementById("navBar");
function showMenu(){
    navBar.style.right="0";
    var x_mark_button = document.querySelector("fa-solid fa-xmark");
    x_mark_button.style.display="block"
}

function hideMenu(){
    navBar.style.right="-200";
}

