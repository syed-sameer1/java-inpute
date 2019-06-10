// pseudo code (code in yoyr own words)

/*problem statement: show user input inside heading

   1. get inpute lement on which user typed something.
   2. get value on inpute.
   3. get heading element.
   4. change heading content.

*/

/*
   -how get an html elemnet.
   -how to get an attribute of an html element.
   -how ot get content of an html elemnet.
*/


function changeName() {
   //get input element.
   //get value of inpute element.
   //get heading.

   document.querySelector("h1 > span:nth-child(1)").innerHTML = document.querySelector("#first").value;
   document.querySelector("h1 > span:nth-child(2)").innerHTML = document.querySelector("#last").value;


}

// function changeColor(){
//    document.querySelector("body").style = "background-color: "+ document.querySelector("input").value;
// }