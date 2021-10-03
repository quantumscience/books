---
sidebar_position: 2
---

# Installations

What we will need for this book? Package manager and installations of tools needed for data analysis, visualisation and development.

- illustration
- data scraping, data analysis
- Basic Toolbox

:::note
In this book, we will use Anaconda distribution platform and Anaconda Navigator to manage our data science packages. It is good for version management and general overview of packages installed on your system, especially for a beginner.
:::

In this chapter, we will:
1. Install Anaconda (and learn how to setup Miniconda for the examples)
2. Update and check the software packages
3. Learn how to install packages via Anaconda Terminal and Anaconda Navigator
4. Explore Anaconda Navigator, Channels and Environments

## Anaconda or Miniconda?

Miniconda is minimalized version of Anaconda. You may install any of them, we will setup the environments and software later in the chapter anyways.


import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

:::info Anaconda and Miniconda Installations

<Tabs
  defaultValue="windows"
  values={[
    {label: 'Windows', value: 'windows'},
    {label: 'Linux', value: 'linux'},
    {label: 'macOS', value: 'apple'},
  ]}>
  <TabItem value="windows">For Anaconda installation, run Windows Terminal as Administrator

  ```bash
  winget install anaconda3
  ```
Alternatively, for Miniconda installation:

  ```bash
  winget install miniconda3
  ```
  </TabItem>
  <TabItem value="linux">
  For Anaconda installation, run this command in Terminal of your choice

  ```bash
  sudo snap install anaconda3
  ```
Alternatively, for Miniconda installation:

  ```bash
  sudo snap install miniconda3
  ```
  </TabItem>
  <TabItem value="apple">This is an apple 🍎</TabItem>
</Tabs>

:::

### Conda Installations of Packages

- R-studio

- Spyder Python

- Jupyter Notebook, Jupyter Lab

- Orange Data Visualization



```bash
conda install -c anaconda spyder
```
## Update
```bash
conda update --all -y
```
```bash
conda update conda
conda install anaconda=VersionNumber
```

## Meet Anaconda Navigator

:::info setup for miniconda users

```bash
conda install -c anaconda anaconda-navigator
```

:::
- image
### Version Management
For some scientific packages, you may need a specific version of programming language or environment.
### Environments
### Channels


:::note
Goals.
:::
:::info
Goals.
:::
:::caution
Goals.
:::
:::warning
Goals.
:::


:::tip Use tabs in admonitions

<Tabs
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}>
  <TabItem value="apple">This is an apple 🍎

  ```bash
  npm run build
  ```
  </TabItem>
  <TabItem value="orange">This is an orange 🍊</TabItem>
  <TabItem value="banana">This is a banana 🍌</TabItem>
</Tabs>

:::

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

Em Dash (—) En Dash (–)
<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>0</kbd>
**Soubor ‣ Nový ‣ Obecné**. (*File ‣ New ‣ General*)
