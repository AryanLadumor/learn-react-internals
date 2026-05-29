# ⚛️ React Chapter-8 : Learning Hooks & Professional Architecture

In Chapter 7, we built a beautiful, static frontend layout for our Restaurant application using custom props to pass data down the tree. However, right now our application is completely frozen in time. 🧊 

If you click a button to filter your list, the screen refuses to update. 

In this chapter, we will transition to an industry-standard production architecture and dive into the absolute heart of React's interactivity: **The State**. 

We will discover how to break our app into clean, modular files and answer the ultimate question: **What actually happens when a component updates?** ⚙️

---

## 🏗️ 1. Professional Architecture & File Modularization

Up until now, our entire application lived inside a single, monolithic app.js file. While a single file is perfect for learning the absolute basics, a production-level project can contain thousands of lines of code. Leaving everything in one place creates a "Spaghetti Code" nightmare, makes team collaboration impossible, and ruins code testability.

To make our application production-ready, we re-architect our codebase into highly isolated, single-responsibility files using this standardized production directory structure:

```txt
08.ReactHooks/
├── index.html                  # Entry point HTML (with type="module" script)
├── index.css                   # Global design & layout styles
├── package.json                # Shorthand script and dependency manager
└── src/
    ├── app.js                  # Main layout assembly & mounting gateway
    ├── components/             # Warehouse for reusable UI bricks (PascalCase)
    │   ├── Header.js
    │   ├── Body.js             # The core engine where our filter buttons live
    │   └── RestaurentCard.js
    └── utils/                  # Shorthand utilities, static configurations, and data
        ├── constants.js        # Named constants (API links, placeholders)
        └── mockData.js         # Hardcoded fallback restaurant arrays

```

📌 Module Interoperability: Export/Import Strategies
Now that our code is separated into individual component files, we need a clean way to let these files talk to each other. We use standard JavaScript ES Modules to share code across file boundaries.
1️⃣ Default Export / Import

When to use: When a single file contains exactly one major piece of logic (like a single React Component).
Rules: You can only have one default export per file.

