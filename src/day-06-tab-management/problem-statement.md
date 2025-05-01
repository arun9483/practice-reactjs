# Day 6: Tab Management (useReducer)

## **Problem Statement**
Create a tab management system that allows users to open, switch, and close tabs.

## **Requirements**

### **1. Open New Tabs**
- Users can dynamically open new tabs.
- Each tab should have a unique `id` and a `title`.

### **2. Switch Tabs**
- Clicking on a tab should switch to it and make it active.
- The active tab should be visually distinct from other tabs.

### **3. Close Tabs**
- Users should be able to close any tab.
- Closing a tab removes it from the tab list.
- If the active tab is closed, the next available tab should become active automatically.
- If no tabs are left, display a placeholder message or default state.

## **Data Example**
Use the following mock data as the initial tabs:
```javascript
const initialTabs = [
  { id: '1', title: 'Home' },
  { id: '2', title: 'Profile' }
];
