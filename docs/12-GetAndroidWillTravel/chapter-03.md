---
sidebar_position: 2.6

---

# Fundamental Productivity Tools: Tmux and Midnight Commander

## Tmux
Tmux is one of the most useful utilities. It allows to run CLI commands in separate tabs and windows – it is like a windows graphical user interface, *without* the graphical user interface. The power of this utility lies in simple creation of working desktops, inside a terminal.

- images

With Tmux, you can run multiple commands at once in separate panes.

### Basic Shortcuts in Tmux
All shortcuts are preceded by <kbd>Ctrl</kbd>+<kbd>B</kbd> by default.
- zoom or unzoom a selected window pane, `z`
- create horizontal pane `"` , vertical `%`
- close selected pane `x`
- mark `m`
- context menu with right mouse button

### Using mouse in Tmux

- the touch should work on phone or tablet, in case you can not move with mouse between panes and control their size, use

 `tmux set -g mouse on`.  

You can also add it to the starting script:

### Scripting Tmux
You can easily create batch scripts, starting *tmux* with specific setups.

1. Create batch (bash) script without .sh extension, f.i. tmux1, by running `touch tmux1`,
2. Edit the file by nano or vim, f.i. `nano tmux1`
```
#!/bin/sh
tmux new-session -d 'vim'
tmux split-window -v 'ipython'
tmux split-window -h
tmux new-window 'mutt'
tmux -2 attach-session -d
```
3. Make the newly created bash script executable, either by right click menu in the system or by running `chmod u+x tmux1` in the bash terminal.
4. Add the path to the directory of the bash script. If the script is in the already defined path, you may skip this step. `export PATH=$PATH:~/nameofdirectory`

To add the path permanently for the next sessions, add it to ~/.bashrc or ~/.zshrc file, where are the settings of your bash terminal.



## Midnight Commander
We will return to Midnight Commander in separate chapter.


- what mc allows
- secure FTP



- what to install next

## Usefull Packages
