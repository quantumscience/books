---
sidebar_position: 2.6

---

# Basic Shell Commands in Termux and Fundamental Productivity Tools
Let us begin with some commands and shortcuts, which help to move around the terminal. The commands are almost universal in most Linux or Unix flavors, by the way.
## Bash Commands
- `whoami` prints current user
- `pwd` prints working directory
- `cd [nameofdirectory]` changes working directory
- `mkdir [nameofdirectory]` creates directory in current working directory
- `uname -a`
- `ls`
- `top` shows running processes
- `clear` clears screen
- `!!` runs previous command, often used like `sudo !!`
- `q` usually quits the app
- <kbd>Ctrl</kbd>+<kbd>C</kbd> terminates the running process, <kbd>Ctrl</kbd>+<kbd>D</kbd> exits shell
- <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd>, <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>, Copy and Paste

## Moving Through the Command Line
- <kbd>Ctrl</kbd>+<kbd>A</kbd> return to the beginning of the line, <kbd>Ctrl</kbd>+<kbd>E</kbd> to the end of the line
- move to beginning of the word <kbd>Alt</kbd>+<kbd>B</kbd>, to the end <kbd>Alt</kbd>+<kbd>F</kbd>
- delete previous word <kbd>Alt</kbd>+<kbd>Backspace</kbd>
- <kbd>Alt</kbd> Autocomplete

### How to Create Batch Scripts?
You can easily create scripts to run multiple commands in a succession in Linux. The batch script can be of any file extension, we will use the standard **.sh** extension for clarity. Steps to create the batch:
1. Create file in the target directory ```touch bat.sh```
2. Edit the file with text editor, f.i. ```vi bat.sh```
3. In the first line, add "SheBang" command, identifying the file as a script and executing it as Bash shell: ```#!/bin/bash```
4. Add your consecutive commands, in separate lines.
5. Make the file executable by changing its properties ```chmod +x bat.sh```
6. Run the file:   ```./bat.sh```


## Tmux
Tmux is one of the most useful utilities. It allows to run CLI commands in separate tabs and windows  it is like a windows graphical user interface, without the graphical user interface.
## Midnight Commander
We will return to Midnight Commander in separate chapter.

## System Info Tools
You can install all tools with `apt install [name] -y`. You may try some basic options or read the manual online or by the CLI command `man [name]`.
### htop
- Run `htop -h` to get help, `htop -C` for monochromatic version
### inxi
- Overall system info `inxi` or `inxi -a`, `inxi -b` for more detailed information
- Info about graphics `inxi -G`, memory `inxi -m`
- Info about soundsystem `inxi -A`
- High level overview `inxi -F`

Run the commands with `sudo` to get the overview with serial numbers.





- what to install next

## Usefull Packages
