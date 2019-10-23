# VS Code Tips and Tricks
Since starting code 201 at Code Fellows, I have discovered many time saving and useful tools for VS Code.

### Split Screens
Sometimes it is useful to see two files side by side simultaneously.

Especially when working on HTML/CSS

If you click the icon in the upper right corner of VS code that looks like a box divided in half vertically it will allow you to view 2 (or more files at the same time);

### Move Code Up or Down without copy/paste
Frequently you will find that you either want to (or need to) reorder portions of your code.

You can do this without having to cut, copy, paste, or re-type!

To move a single line just place your cursor on the line to move and:
- MAC = Option + up/down arrow
- PC = Alt + up/down arrow

To move multiple lines highlight all of the lines to be moved and use the same keyboard shortcuts

### Autosave
To configure your autosave, click the gear in the lower left corner. Select "settings". Under Auto Save change the option to "afterDelay".

This will cause VS Code to auto save your work when you navigate away from VS Code to another window.

### Word Wrap
If you have long lines of code or text that are flowing out of view on the right of your file, you can toggle word wrap.
- MAC = Option + Z
- PC = ALT + Z

You can also permanently turn on word wrap in the settings (search for word wrap)

### Change the Color Theme
Change your color theme for fun, to see different types of information differently and to prevent eye strain.

VS Code comes with a variety of color theme options installed already but you can look for additional options in the VS Code marketplace (click the icon with the 4 boxes on the left margin of the screen).

My Favorite Theme is Night Owl by Sarah Drasner

Good themes for color blindness might be 'Light Theme for Color Blind People' by harai or 'Gatito' by Paweł Grzybek (this is a dark theme with more muted colors).

To change the theme, click "Code" in the menu bar (MAC) or "File" (PC). Select "Preferences" then "Color Theme"

### Commenting in/out Code
Commenting syntax varies by file type.
.js files use ```//```
.html and .md files use ```<!-- -->```
.css files use ```/* */```

Good news! You don't have to worry about remembering these because you can use a keyboard shortcut!

To comment out a single line of code you don't need to highlight the text first. Just have your cursor on the line to be commented out and press Command + / (MAC) or CTRL + / (PC)

// To comment out a large section of code you can highlight it and use the same shortcut

### Change all identical words (or variables) at the same time
Sometimes you need to change a variable name but it takes time to hunt down all the times you used that variable throughout your code.

Highlight the word (or words) you want to find and use the Command + D (MAC) or CTRL + D (PC).

This will select the next instance of a matching word (pressing CTRL/Command + D again will select subsequent instances).

To select ALL of the same highlighted word in a file use Command + Shift + L (MAC) or CTRL + F2 (PC)

You can also use CTRL + F (PC) or Command + F to open the "find" menu

### Using the 'Tab' key to auto complete is your best friend
Manually typing variable names or function names that have been previously declared leads to typos that can be hard to debug.

If VS Code finds a variable, method or function name similar to what you begin to type you can push the tab key to autocomplete the suggestion it gives.

### To Do Lists using Todo Tree VS Code Extension

Before starting a project it is useful to create a list of ToDos to keep yourself on track.

There is an extension called TODO Tree that highlights your Todos and also makes a handy list so you can see what is left.

The extension also supports Fixmes for current known bugs to revisit.

TODO: Make a list of tasks
FIXME: Add FixMes for in progress tasks that have bugs

#### Want to learn more about writing in markdown (.md files)?? 
This is one of my favorite guides:

https://www.markdownguide.org/basic-syntax/
