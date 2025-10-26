# platform-variants-app

10/25/25

- Getting started with the 4.6 Exercise.

# Task Manager - Platform Variants

## Project Overview

This is a simple Task Manager web application designed to demonstrate **platform variant design principles**. The app adapts to different screen sizes (Mobile, Tablet, Desktop) and provides a responsive layout and user experience optimized for each platform.

**Technologies Used:**

- HTML
- CSS
- JavaScript (vanilla)
- Responsive design principles

---

## Features

- **Task List:** View a list of tasks with completion status.
- **Task Detail:** Click a task to view its details.
- **Add Task:** Quickly add new tasks with a single button click.
- **Platform Detection:** Automatically detects Mobile, Tablet, and Desktop screen sizes and displays the current platform.
- **Responsive Layout:** Smooth adaptation across screen sizes.

---

## Platform Variant Design Rationale

### Executive Summary

The Task Manager is designed for users who want a simple, efficient way to manage tasks across devices. Each platform receives tailored adaptations to maximize usability and performance.

### Platform Analysis

#### Mobile (iOS/Android)

- **Primary Use Cases:** Quick task management on-the-go.
- **Key Adaptations:** Touch-friendly interface, simplified layout, large buttons.
- **Unique Features:** Compact task list, minimal distractions.

#### Tablet (iPad/Android Tablet)

- **Primary Use Cases:** Extended usage and content consumption.
- **Key Adaptations:** Expanded layout with dual-pane support for list and details.
- **Unique Features:** Larger touch targets, side-by-side task list and detail view.

#### Desktop/Web

- **Primary Use Cases:** Productivity, detailed task management, multi-tasking.
- **Key Adaptations:** Mouse and keyboard interactions, hover states.
- **Unique Features:** Multi-column layout, detailed task info, faster navigation.

---

## Design System Decisions

- **Color Palette:** Clear, high-contrast colors for readability across devices.
- **Typography:** Scales for mobile, tablet, and desktop for optimal readability.
- **Components:** Buttons, lists, and detail cards adapt their size and spacing based on platform.
- **Interactions:** Hover and click states on Desktop, tap interactions on touch devices.

---

## Accessibility

- Large, readable fonts and high-contrast colors.
- Clickable areas optimized for touch and mouse interactions.
- Clear visual feedback when selecting tasks.

---

## Performance Optimizations

- Lightweight vanilla JS and minimal CSS.
- No heavy dependencies to ensure fast load times.
- Responsive design prevents layout recalculation issues.

---

## Platform Comparison Matrix

| Feature            | Mobile             | Tablet          | Desktop         |
| ------------------ | ------------------ | --------------- | --------------- |
| Task List          | ✅ Compact         | ✅ Expanded     | ✅ Detailed     |
| Task Detail        | ✅ Inline          | ✅ Dual-pane    | ✅ Side-by-side |
| Add Task Button    | ✅ Prominent       | ✅ Prominent    | ✅ Prominent    |
| Platform Detection | ✅ Yes             | ✅ Yes          | ✅ Yes          |
| Responsive Layout  | ✅ Touch-optimized | ✅ Side-by-side | ✅ Multi-column |

---

## How to Run

1. Clone or download this repository.
2. Open `index.html` in a **live server** environment (recommended) or any modern browser.
   - Using **VSCode**: Right-click `index.html` → "Open with Live Server".
3. The platform label will show whether you are on Mobile, Tablet, or Desktop.
4. Click tasks to see details or add a new task using the button.

---

## Future Enhancements

- Persist tasks using `localStorage`.
- Add task editing and deletion functionality.
- Implement dark mode for better accessibility.
- Optimize layout animations for smooth transitions across platforms.

---

## Author

**Your Name** – ChalmersSachi  
**Repository:** [GitHub Link](https://github.com/ChalmersSachi-FS/platform-variants-app)
