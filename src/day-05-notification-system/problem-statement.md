# **Day 5: Notification System**

## **Problem Statement**

Create a global notification system to display alerts to users.

---

## **Requirements**

1. **Types of Alerts**:

   - Support different types of alerts:
     - **Success**: Indicates successful operations.
     - **Error**: Highlights encountered errors or issues.
     - **Warning**: Displays cautionary messages.

2. **Automatic Dismissal**:

   - Alerts should automatically disappear after **3 seconds** without requiring user intervention.

3. **State Management**:

   - Use a **reducer function** to handle the addition and removal of alerts.

4. **Global Accessibility**:
   - Design the notification system to be **globally accessible** so that any part of the application can trigger or dismiss alerts.

---

## **Hints**

- Use the **setTimeout** function to implement automatic dismissal of alerts.
