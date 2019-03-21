// The pc chooses a random score between 20 and 120
var pcScore = Math.floor((Math.random() * 100) + 20)


var scoreTracker = 0;

var btnValues = [10, 5, 2, 1, 3, 12, 40, 6, ];

var win = scoreTracker === pcScore;

var loss = scoreTracker > pcScore;

var btnValueAssign1 = btnValues[Math.floor(Math.random() * btnValues.length)] ;

// [1,2,3].forEach 
// Here I attempt to create a var that picks a random value from the btnvalues(Line 13)
// I intend to extract 4 values from btnValues and assign one of them to each image in the html.




 
// In the following lines attempt to replace the x in the pcnumber id from the html, with the chosen random number from the pcScore variable
function rndmPcScore () { 
    var pcNumber = $("#pcnumber");
pcNumber.charAt(19).replaceWith(pcScore); }; 
// functions
// In this line I intend to assign the rndom values to the images 
function assigner () {
var imgs = $("#cake cookie bread watermelon")

//    $("#cake").attr(btnValueAssign1)
//     $("#cookie").textcont
//     $("#bread")
//     $("watermelon")
}   
function winloss () {

    if (win) //Reset the game and pick another pcScore to match 

    else if (loss) //Reset the game and pick another pcScore to match
 







};
console.log(assigner)

// Something that resets the game if the usr score goes over the pc score.

// ("#pcnumber").textcontent

// $('#cake').on('click', function() { })

