# Key Observations

## NativeModel (`<dialog>`) is More Accessible
- Has **native support** for backdrop overlay using `::backdrop`.
- Automatically **traps focus** when open, preventing users from interacting with background elements.
- Supports **Escape key close behavior out-of-the-box**. We only need a key handler to call `onCloseHandler`; otherwise, a manual Escape key handler is not required.
- **Screen readers** recognize it as a modal **without needing extra ARIA attributes**.

## GlobalModel (`<div>`) Requires More Customization
- Needs **manual backdrop handling** using `global-model__overlay`.
- **Accessibility is not handled properly**. Has **focus issues** when using the `Tab` key—**background content remains focusable** even when the modal is open.
- Requires **custom key event handling** for **Escape key functionality**.

## Feature Comparison Table

| Feature | NativeModel (`<dialog>`) | GlobalModel (`<div>`) |
|---------|----------------|----------------|
| **Backdrop Overlay** | Native support via `::backdrop` | Requires custom `<div>` overlay |
| **Focus Management** | Automatically traps focus inside the modal | Requires manual focus trapping |
| **Keyboard Accessibility** | Escape key behavior built-in | Needs custom event handling for `Escape` key |
| **Screen Reader Support** | Recognized as a modal without extra attributes | Needs ARIA attributes for accessibility |
| **Tab Key Behavior** | Prevents focus from leaving the modal | Background elements remain focusable |
| **Performance** | Optimized for modal behavior | Requires extra JavaScript for handling interactions |
| **Browser Support** | Supported in modern browsers (needs polyfill for older ones) | Works across all browsers without compatibility issues |

---

Both models offer **similar functionality**, but **NativeModel (`<dialog>`) has better built-in accessibility and focus management**, while **GlobalModel (`<div>`) requires more customization for an accessible experience**.

