<!--we are gonna learn 3 different methods 1. createElement() 2. createTextNode 3. appendChild-->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    
   </body>
   <script>
     let getBody = document.body;

     let newElement = document.createElement("hi");

     let date = new Date();
     let currentHour = date.getHours();
     
     let ceateTxtMsg;

     if (currentHour >= 4 && currentHour < 10) {
       createTxtMsg = "Good morning!";
     } else if (currentHour >= 10 && currentHour < 12) {
       createTxtMsg = "Good day!";
     } else if (currentHour >= 12 && currentHour < 18) {
       createTxtMsg = "Good afternoon!";
     } else if (currentHour >= 18 && currentHour < 22) {
       createTxtMsg = "Good evening!";
     } else if (currentHour >= 22 && currentHour < 4) {
       createTxtMsg = "Good night!";
     } else {
      createTxtMsg = "Are you from a different planet! :o";
     }
     
     let createEleTxt = document.createTextNode(createTxtMsg);

     newElement.appendChild(createEleTxt);

     getBody.appendChild(newElement);

     newElement.setAttribute("class", "welcome");

     newElement.style.cssText = "text-align: center;  font-size: 60px; font-family: arial;";
     console.log(newElement);
   </script>
 </html>
