# Terminal Tips and Tricks

### Tab to Auto Complete 
Just like in vs code you can tab to auto complete file names (to prevent spelling mistakes) and sometimes with branches (depending on your computer and settings).

### Change the color theme
Terminal > Preferences. You will see a list of available color themes (or you can create your own).

Note: See resources page to a link to download custom themes and other ways to change the appearance of your terminal window.

### cowsay
Sometimes terminal commands may not serve a practical purpose... they are just fun.

**Terminal Command:** fortune | cowsay | lolcat

### The terminal can talk back to you.
If you have a process that will take a long time and you don't want to sit and watch the progress bar, you can add a `say done` after your terminal command. 

**Terminal Command:** git status ; say here is your git status

### Hyphens let you go back to wherever you were previously.

**Terminal Command:** git checkout -

**Terminal Command:** cd -

### Git Rebase
Have you ever seen the message when you add, commit, push that `your branch is x number of commits behind master?`. This is a good time to perform a git rebase [branch name]. This changes the base of your branch to the most recent commit on the base branch helping you maintain a clean commit history.
<!-- Reference https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase -->
![Example of a git rebase](https://wac-cdn.atlassian.com/dam/jcr:e4a40899-636b-4988-9774-eaa8a440575b/02.svg?cdnVersion=643)

**Terminal Command:** git rebase [branch name]

<!-- https://www.atlassian.com/git/glossary -->
You can also add a -i flag to the rebase command. The -i flag is used to begin an interactive rebasing session. This provides all the benefits of a normal rebase, but gives you the opportunity to add, edit, or delete commits along the way.

### Read the contents of a file in the terminal
Typing `cat` in from of a file name will print the contents of the file in the terminal

**Terminal Command:** cat ./data/lists.json

### Forget a sudo or a git?? Use a !! (bang bang)
If you run a command like `npm install [package name]` in your terminal but you need a `sudo` you can rerun the command without having to retype by using sudo !!. You can also do the same thing for git.

**Terminal Command:** 
First command: add .
(missing the git)
Second command git !!

terminal will run `git add .`

### Make nested directories in one terminal command.

**Terminal Command:** mkdir -p [existing directory]/new/new

### Git Log
Want to see a log of your recent commits for the current branch? You can use `git log` to see the author, message and date for recent commits.

**Terminal Command:** git log

Note: Use \q to exit the log

### tig and tig log
tig (git spelled backwards) is an installable tool to see detailed information about the files changed and the branch and merging history of your application.

**Terminal Command:** tig
**Terminal Command:** tig log

### Escape a running process
`CTRL + C` or sometimes `\q`

### History
This will show a list of all of the terminal commands used since the terminal window was opened.

This is useful when you don't want to use up/down arrows to iterate through recent commands.

**Terminal Command:** history

### Move to the beginning or end of a terminal command with keyboard shortcuts.

**Keyboard Shortcuts:** `CTRL + A` - To the beginning of the line
`CTRL + E` - To the end of the line
