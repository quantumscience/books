---
sidebar_position: 2.6

---

# Basic Shell Commands in Termux and Fundamental Productivity Tools
## Bash
- uname -a
- ls
- some preinstalled packages
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

## Usefull Packages

- inxi

- what to install next
