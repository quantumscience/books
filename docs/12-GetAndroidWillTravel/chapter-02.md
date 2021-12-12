---
sidebar_position: 2.5

---

# Installations
## Abstract

Basic installations you will need. The experiments will be on unrooted device only. About Termux. Other Linux distros, using KeX. GUI.
- illustration
## Starting Up: Linux Installation and Setup
### Step 1.: Installing F-Droid
F-Droid is Android app repository for free and open source (FOSS) software. It is similar to digital distribution service like Google Play, but it has the newest version of Termux. You will install F-Droid from .apk from https://www.f-droid.org/.


### Step 2.: Installing Termux and Termux API

Find Termux in F-Droid catalogue and install it. Then find and install Termux API the same way.

You can also install the API from the terminal by running
```
apt install termux-api
```

### Step 3.: Setting up Repositories and Update

Run Termux, the terminal window will appear. Try to update the system by running
```
apt update && apt upgrade -y
```
If you get this error, change the repository using

```
termux-change-repo
```
Select all three repos in the first menu, in the second menu change to f.i. GitHub repository (second from top). Then run the update/upgrade command. It is suggested to update/upgrade in a week or so for security reasons, upgrades are not performed automatically by the system.

- screenshots x2
- Termux


## Using Terminal

- basic Commands

## Using GUI and Desktops
- scripts and apps

## VMOS and Termux

At the time of writing this book, it is not yet possible to fully run Termux on VMOS Pro (Virtual Android Machine). It is possible to install, but due to root restrictions the Termux system will not update nor upgrade – rendering it unusable for our advanced experiments.

## Conclusion

Now there is a Linux terminal up and running on your unrooted mobile Android device. How cool is that?

We will proceed with installations of some useful packages in the next chapter.
