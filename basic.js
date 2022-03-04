<!DOCTYPE html>
<html>
  <head>
   <meta charset="utf-8">
   <meta name="description" content="This is example of a meta description. This will often show up in search results">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title></title>
  </head>
  <body>
          </body>
          <script>
            //DOM(document object model) is part of BOM,and BOM is entire browser window

            // this is for DOM document.querySelector("#id");
            // this is for BOM window.open();
            //example for using DOM 1. html eg: <div class="divclass" id="david"></div> 2. document.getElementById(); 3. document.getElementByClassName(); 4. document.getElementByClassTagName();
          </script>
        </html>


     <!-- code to get random number
       
      this math.random ll give value .074blahnlah ,then *10 will give 8..73746blahblah, then after adding +1 we ll not get number from 0t 9 instad ll get from 10744747 etc, then if we add that math.floor we ll get only single numbr frm 1 to 10 eg:2 , 4etc
    
    <!DOCTYPE html>
<html>
  <head>
   <meta charset="utf-8">
   <meta name="description" content="This is example of a meta description. This will often show up in search results">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title></title>
  </head>
  <body>
          </body>
          <script>
           let calc = Math.floor((Math.random() * 10) + 1);
            console.log(calc);
          </script>
        </html>-->

        <!--<!DOCTYPE html>
<html>
  <head>
   <meta charset="utf-8">
   <meta name="description" content="This is example of a meta description. This will often show up in search results">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title></title>
  </head>
  <body>
          </body>
          <script>
            let getRandomNumber = function(start, range) {
              let getRandom = Math.floor((Math.random() * range) + start);
              while (getRandom > range) {
                getRandom = Math.floor((Math.random() * range) + start);
              }
              return getRandom;
            }
            console.log(getRandomNumber(500, 1000));
          </script>
        </html>-->

        <!--to getnumbers frm whereever we want to whereever we want like from 500 to 1000
        
        <!DOCTYPE html>
<html>
  <head>
   <meta charset="utf-8">
   <meta name="description" content="This is example of a meta description. This will often show up in search results">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title></title>
  </head>
  <body>
          </body>
          <script>
            let getRandomNumber = function(start, range) {
              let getRandom = Math.floor((Math.random() * range) + start);
              while (getRandom > range) {
                getRandom = Math.floor((Math.random() * range) + start);
              }
              return getRandom;
            }
            console.log(getRandomNumber(500, 1000));
          </script>
        </html>-->
