<!--learnings events in js-->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <title></title>
  </head>
  <body>
    
 <a onclick="menuToggle()" clas"menu-btn" href="menu-btn" href="#">Menu</a>
 <div class="menu">
 <ul>
   <li><a href="#">This is the link 1</a></li>
   <li><a href="#">This is the link 2</a></li>
   <li><a href="#">This is the link 3</a></li>
   <li><a href="#">This is the link 4</a></li>
   <li><a href="#">This is the link 5</a></li>
 </ul>
</div>

</body>
<script src="script.js"></script>
</html>

<!--script.js
  
  let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuStatus = false;

menu.style.marginLeft = "-300px"

function menuToggle() {
    if (menuStatus == false)  {
        menu.style.marginleft = "0px";
        menuStatus = true;
    }
    else if (menuStatus == true) {
        menu.style.marginleft = "-300px";
        menuStatus = false;
    }
}

menuBtn.onclick = menuToggle;
-->
