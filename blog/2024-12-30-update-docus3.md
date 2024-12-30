---
slug: docu-post2024
title: Update 3.6.3
authors: [openr, sandner]
tags: [open research, project development, docusaurus, mermaid, scientific diagrams]
---

Update of DS site to 3.6.3
Today we installed new major upgrade version of documentation system and development server (new features, MDX3, https://docusaurus.io/docs/migration/v3), preparing for 4.0a next year.

## Diagrams

```mermaid
mindmap
    root((Article and Book Themes))
        Theory
            Foundations
            Frameworks
        Practice
            Implementation
            Optimization
            Validation
        Innovation
            Evolution
            Integration
        Perspectives
            Research
            Development
            Applications
```

Diagrams, mindmaps, and chart parser tests in markdown:

```mermaid
gantt
dateFormat  YYYY-MM-DD
title Updating DS system (GANTT diagram to mermaid)
excludes weekdays 2014-01-10

section A section
3.6.3. Completed task            :done,    des1, 2024-12-29,2024-12-30
 Active task               :active,  des2, 2024-12-30, 3d
4.0.a Future task               :         des3, after des2, 5d
```
