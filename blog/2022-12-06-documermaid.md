---
slug: mermaid-post
title: Diagram Extensions
authors: [openr, sandner]
tags: [open research, project development, docusaurus, mermaid, scientific diagrams]
---

Open Research Project is an incubator and an accelerator of writing in fields of Data Science, Informatics, and Philosophy of Science. Subjects may vary from technical handbooks to theoretical treatises.

Today we installed and tested Mermaid diagrams and visualizations.

```mermaid
graph TD;
    ALPHA-->B;
    OPENRESEARCH-->C;
    B-->D;
    C-->D;
```

```mermaid
graph TD;
    ALPHA-->B;
    ALPHA-->C;
    B-->D;
    C-->D;
    D-->ALPHA;
```

Diagrams and chart parser in markdown:

```mermaid
gantt
dateFormat  YYYY-MM-DD
title Test GANTT diagram OPEN RESEARCH
excludes weekdays 2022-12-10

section A section
Completed task            :done,    des1, 2022-12-03,2022-12-06
Active task               :active,  des2, 2022-12-09, 1d

```

```mermaid
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2022-01-06,2022-01-08
Active task               :active,  des2, 2022-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
```

Git Diagrams:

```mermaid
gitGraph
      commit
      commit
      branch develop
      commit
      commit
      commit
      checkout main
      commit
      commit
```

State Diagrams:

```mermaid

stateDiagram-v2
    state if_state <<choice>>
    [*] --> IsPositive
    IsPositive --> if_state
    if_state --> False: if n < 0
    if_state --> True : if n >= 0

      ```
