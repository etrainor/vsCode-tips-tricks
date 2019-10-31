'use strict';

// VS Code Tips and Tricks

// Since starting code 201 at Code Fellows, I have discovered many time saving and useful tools for VS Code.

//=====================================================================//
//==========================SPLIT SCREENS==============================//
//=====================================================================//

// Sometimes it is useful to see two files side by side simultaneously.
// Especially when working on HTML/CSS

// Open the index.html file.

// Click the icon in the upper right corner of VS code that looks like a box divided in half vertically it will allow you to view 2 (or more) files at the same time

// Now select demo.css from the /styles directory on the left side of the screen in the file explorer.

// NOTE: You should be viewing index.js and demo.css side by side.

// TODO: Change the background-color of the <ol> on line 38 of index.html. Can you make the change without targeting the id?

// TODO: Add a comment with the css selector that your used.

// TODO: Click the 'x' on the tab to close the file in the second window || click the ... and select 'close all'

//=====================================================================//
//==========SELECTING MULTIPLE LINES WITH CLICK AND DRAG===============//
//=====================================================================//

// You can select single lines or multiple lines by clicking on a line number or clicking and dragging down multiple line numbers.

//TODO: Try it!

///=====================================================================//
//========================COMMENTING CODE IN/OUT=======================//
//=====================================================================//

// Commenting syntax varies by file type.
// .js files use //
// .html and .md files use <!-- -->
// .css files use /* */

// Good news! You don't have to worry about remembering these because you can use a keyboard shortcut!

// To comment out a single line of code you don't need to highlight the text first. Just have your cursor on the line to be commented out and...
// MAC press Command + /
// PC pres CTRL + /

// To comment out a large section of code you can highlight it and use the same shortcut

// TODO: Comment in the two lines of code below.

// var codeToCommentOut = 'Legos are the most amazing invention EVER!';

// console.log(codeToCommentOut);

//=====================================================================//
//===================MOVE CODE AROUND WITHOUT COPY/PASTE===============//
//=====================================================================//

// Frequently you will find that you either want to (or need to) reorder portions of your code.

// You can do this without having to cut, copy, paste, or re-type!

//To move a single line just place your cursor on the line to move and:
// MAC = Option + up/down arrow
// PC = Alt + up/down arrow

// To move multiple lines highlight all of the lines to be moved and use the same keyboard shortcuts

// TODO: Comment in the lines between the 🍪 symbols below
// TODO: Open the console while on the home page in the browser
// TODO: What error do you see?
// TODO: Move the lines of code below up or down (individually or at the same time) to resolve the error.

// 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪
// var sum = numberOne + numberTwo;

// console.log('The sum of numberOne and numberTwo is: ', sum);

// var numberOne = 1;
// var numberTwo = 2;

// 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪 🍪

//=====================================================================//
//============================CONFIGURE AUTO SAVE======================//
//=====================================================================//

// To configure your auto save, click the gear in the lower left corner of VS Code. Select "settings". Under Auto Save (this should be the first option under 'Most Common') change the option to "onFocusChange.

// This will cause VS Code to auto save your work when you navigate away from VS Code to another window.

//=====================================================================//
//===================UNDO is Easy... REDO is less Easy=================//
//=====================================================================//

// If you are familiar with keyboard shortcuts in word processing or other office applications you may have used keyboard shortcuts to undo

// Keyboard Shortcuts to UNDO
// MAC Command + Z
// PC CTRL + Z

// Typically in most applications to REDO the keyboard shortcut is Command + Y (MAC)or CTRL + Y (PC). But in VS Code the REDO shortcut is different

//Keyboard Shortcuts to REDO in VS Code
// MAC Command + Shift + Z
// PC CTRL + Shift + Z

// TODO: Delete the following line of code

// console.log('Why can\'t VS Code use the same keyboard shortcut as everywhere else?');

// TODO: Undo your deletion using the keyboard shortcut
// TODO: Redo your deletion using the keyboard shortcut

//=====================================================================//
//==============================WORD WRAP==============================//
//=====================================================================//

// If you have long lines of code or text that are flowing out of view on the right of your file, you can toggle word wrap.
// MAC = Option + Z
// PC = ALT + Z

// You can also permanently turn on word wrap in the settings (search for word wrap);

// TODO: Try it out! Comment in the following line of code and practice word-wrapping and unwrapping the text.

// var reallyLongText =
//   'Cupcake ipsum dolor. Sit amet biscuit chocolate bar icing cake muffin cookie bear claw. Lemon drops marzipan brownie sesame snaps. Powder pudding toffee chocolate bar cheesecake gummies. Carrot cake pudding donut apple pie sugar plum caramels gummi bears dragée. Wafer tart danish jelly beans lollipop wafer pastry soufflé topping. Tiramisu bear claw icing cake dragée. Sweet bonbon topping oat cake liquorice cake sugar plum carrot cake carrot cake. Pie jujubes gummi bears cupcake. Icing chocolate cake powder. Candy dessert donut toffee chocolate bar biscuit. Marshmallow candy canes cotton candy. Pudding liquorice sugar plum caramels brownie cotton candy carrot cake chocolate cake dragée.';

//=====================================================================//
//=======================CHANGE THE COLOR THEME========================//
//=====================================================================//

// Change your color theme for fun, to see different types of information differently and to prevent eye strain.

// VS Code comes with a variety of color theme options installed already but you can look for additional options in the VS Code marketplace (click the icon with the 4 boxes on the left margin of the screen).

// My Favorite Theme is Night Owl by Sarah Drasner

// Good themes for color blindness might be 'Light Theme for Color Blind People' by harai or 'Gatito' by Paweł Grzybek (this is a dark theme with more muted colors).

//To change the theme...
// MAC  click 'Code' in the menu bar
// PC click 'File'

// Then...
// Select "Preferences" > "Color Theme"

//TODO: Try it out!! See if there are themes you may prefer or search for 'theme' in the Extension Marketplace.

//=====================================================================//
//======= SELECT ALL IDENTICAL WORDS AND CHANGE AT THE SAME TIME=======//
//=====================================================================//

// Sometimes you need to change a variable name but it takes time to hunt down all the times you used that variable throughout your code.

// Good news! There is a more efficient way to do that!

// Highlight the word (or words) you want to find and use the following keyboard shortcuts:
// MAC Command (press entire time) + D
// PC CTRL (press entire time) + D

// This will select the next instance of a matching word (pressing D again will select subsequent instances).

// This is useful if you only have a few of the same variables/words in a small area.

// To select ALL of the same highlighted word in a file use this keyboard shortcut:

// MAC Command + Shift + L
// PC CTRL + F2

// Another way to do the same thing is with 'Find and Replace'

// To open the find and replace menu use the following shortcut:
// MAC Command + F
// PC CTRL + F

//TODO: Try it!! Comment in the code BETWEEN the 🐶 and change all the 'myDog' variable names to 'dogName'

//🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶

// var myDog = 'Dexter';
// var message =
//   'My dog is named ' +
//   myDog +
//   '.' +
//   myDog +
//   "'s favorite treats are apples and popcorn";

// console.log(message);

//🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶

//=====================================================================//
//======================= TAB TO AUTOCOMPLETE =========================//
//=====================================================================//

// Using the 'Tab' key to auto complete is one the best practices of learning to code.
// Manually typing variable names or function names that have been previously declared leads to typos that can be hard to debug.

// If VS Code finds a variable, method or function name similar to what you begin to type you can push the tab key to autocomplete the suggestion it gives.

// NOTE: The red underlines are normal and will not break the code.
// NOTE: Tab to autocomplete works in most coding tools (ie: terminal, ubuntu, repl)

// TODO: Comment in the lines of code between the 🐣 and follow the TODO's

// 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣

// var thing;

// var reallyLongVariableName = 'thing';
// console.log(); // TODO: console.log reallyLongVariableName using tab
// console.log(); // TODO: console.log thingTwo using arrow keys and tab to autocomplete

// var thingOne = function one() {
//   thing = 1;
//   return thing;
// };

// var thingTwo = function two() {
//   thing = 2;
//   return thing;
// };

// var thingThree = function three() {
//   thing = 3;
//   return thing;
// };

// 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣 🐣

//=====================================================================//
//================ IS MY ESLINT WORKING?? HOW CAN I TELL ==============//
//=====================================================================//

// Eslint is a tool we use to help us identify problems that may break our code (ie: missing brackets) or to find code that doesn't adhere to certain style guidelines (ie: double quotes instead of single quotes).

// How to know if your eslint is not working, fix the easy problems and identify the problems that are not auto-fixable.

//The following code should have a variety of different angry looking squiggles.

// TODO: Comment in the code between 💢 😠

// TODO: Double-Click on the angry red squiggle on line 246 before 'var monkeyfood'
// TODO: Click the 💡
// TODO: Select 'fix all auto-fixable problems'

// 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠

// var monkeys = "cute brown furry animals"
// var monkeyFood = bananas
//     if ((monkeyFood = "bananas")) {
//         console.log('monkeys eat: ', monkeyFood);
// }

// 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠 💢 😠

// NOTE: The remaining problems we will need to resolve ourselves.

// NOTE: You can see how many eslint errors are in your current file by looking along the bottom edge of VS code where you see an 'x' in a circle and a triangular warning symbol. Clicking on them will display a list of current errors and their locations in the file.

// NOTE: Sometimes you may also need to change your default indent spacing in the settings. Click on the gear in the lower left corner and search for Tab-Size. Change this to '2'. Additional minor configuration may be needed depending on your default settings (as your instructor/TA for help if needed).

//=====================================================================//
//================RESOLVING THE UNCAUGHT SYNTAX ERROR==================//
//=====================================================================//

// TODO: Comment in the code between the 🔥

// 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥

// function syntaxError(num1, num2) {
//   let sum = num1 + num2;
//   let OddOrEven;

//   if (sum % 2 === 0) {
//     OddOrEven = 'even';
//   } else {
//     OddOrEven = 'odd';
//   }

//   console.log(`The sum of ${num1} and ${num2} is ${OddOrEven}`);

// //+++++++++++++++++++++++
// console.log();
// //+++++++++++++++++++++++
// syntaxError(2, 5);

// 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥

// TODO: Go to the browser and open the console from the home page.

// TODO: What error did you see?
// REPLACE THIS TEXT WITH YOUR RESPONSE

// TODO: Scroll to the bottom of this file and add a }; to the last line of the page.

// TODO: Click on the }. This will cause its opening { to be highlighted. Scroll up to find its pair.

// TODO: Add the closing } where it belongs (hint: between the console.logs) and then go back to the bottom of the page and remove the first } we added.

// TODO: Go back to the browser and look at the console. Is the error gone?

// TODO: In the empty console.log between the ++++++++++++++ add a string that says why we received the error.

//=====================================================================//
//=====================USEFUL VS CODE EXTENSIONS=======================//
//=====================================================================//

//NOTE: Links to all of the following extensions can be found on the resources page or by searching for the extension name in the extensions marketplace (icon made of 4 little boxes on the left edge of your VS Code);

//---------------------------------------------------------------------//
//--------------------To Do Lists using TODO TREE----------------------//
//---------------------------------------------------------------------//

// Before starting a project it is useful to create a list of ToDos to keep yourself on track.

// There is an extension called TODO Tree that highlights your Todos and also makes a handy list so you can see what is left.

// The extension also supports Fixmes for current known bugs to revisit.

// TODO: Make a list of tasks
// FIXME: Add FixMes for in progress tasks that have bugs

//---------------------------------------------------------------------//
//---------Markdown Preview using Markdown Preview Enhanced------------//
//---------------------------------------------------------------------//

// #### Want to learn more about writing in markdown (.md files)??
// Here is a link to a useful guide:

// https://www.markdownguide.org/basic-syntax/

// The Markdown Preview Enhanced extension lets you split your VS code screens and see how your markdown will look in the browser (if you download the extension you can test it by looking at the README.md and clicking the icon in the upper right corner that looks like a split screen with a magnifying glass).

//---------------------------------------------------------------------//
//-------See Selected CSS Colors More Easily with Color Highlight------//
//---------------------------------------------------------------------//

// Install the extension and look at ./styles/app/style.css to see this extension at work.

//---------------------------------------------------------------------//
//------------------------Rainbow Brackets-----------------------------//
//---------------------------------------------------------------------//

// The Rainbow Brackets VS Code Extension will make debugging (slightly) easier

// After installing the extension uncomment the code between the 🌈 to see it working.
// Rainbow brackets changes the colors of bracket pairs to be different colors so you can more easily see where your code blocks start and stop.

// 🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈

// function soManyBrackets() {
//   for(var i = 0 ; i < 8 ; i++) {

//     for(var j = 0 ; j < 2 ; j++) {

//       for(var k = 0 ; k < 5 ; k++) {
//         console.log('I love rainbow brackets!');

//       }
//     }
//   }
// }

// console.log(soManyBrackets);

//🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈

//---------------------------------------------------------------------//
//------------------------Code Spell Checker---------------------------//
//---------------------------------------------------------------------//

// Is spelling not one of your best skills? Code Spell Checker can help with that.
// Once installed misspelled words will be underlined with squiggles.

//Who doesnot like spelll checkk?

//=====================================================================//
//========================RELATIVE FILE PATHS==========================//
//=====================================================================//

// Similar to using tab to complete variable names, letting VS code advise file paths will prevent many bugs.

// TODO: Go to the browser and look at the image currently showing on the home page.
// Let's change the src attribute from a http link to a local image file.
// TODO: Open index.html and demo.js side by side using the split screen skill we learned at the beginning of this demo.
// TODO: Delete the https://media.giphy.com/media/l2SpYDOZmp3H2cAAo/giphy.gif from between the "" (leave the "" there).
// TODO: Start typing ./
// VS Code will display path options to choose from.
// TODO: Use your  up/down arrow keys to navigate to images and then press 'TAB'.
// TODO: Choose one of the files ending in .gif using the up/down arrows and press TAB again.
// TODO: Go look at the browser to see the image you selected (refresh may be required if the image did not change).
// TODO: Practice selecting different image options.

//=====================================================================//
//==================================THE END!!==========================//
//=====================================================================//

