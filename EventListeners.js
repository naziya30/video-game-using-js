<!--learnings default events in js-->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="This is an example of a meta description. This will often show up in search results">
    <meta rel="stylesheet" content="width-=device-width,initial-scale=1">
    <title></title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
 
    <main>
      <form class="test-form" action="script.php" method="post">
        <button type="submit" name="button"></button>
      </form>
      <a class="test-btn" href="#">Click me to change me!</a>
    </main>

</body>
<script src="script.js"></script>
</html>

<!--main.js

let btn = document.querySelector(".test-btn");

function firstFunction(e, name) {
    e.preventDefault();
    btn.innerHTML = "YAY!";
    }

//function secondFunctiont() {
 //  btn.style.backgroundColor = "red";
  //  }

//function btnClick(e) {
  //  e.preventDefault();
  //  firstFunction(e);
  //  secondFunctiont();
//}

btn.addEventListener("click", Function(e) {
    firstFunction(e, "Naziya");
});
btn.addEventListener("click", function() {
 btn.getElementsByClassName.backgroundColor = "yellow";
 });
-->
