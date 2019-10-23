# Terminal Tips and Tricks

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

