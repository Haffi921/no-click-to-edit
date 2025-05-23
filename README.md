# No Click to Edit ✋🛡️

> **Note:** 🛡️✨ This extension is designed to prevent accidental edits, but it's not perfect. If you find something that's unexpectedly unclickable, just hold <kbd>CTRL</kbd> (Windows/Linux) or <kbd>⌘</kbd> (Mac) while clicking to bypass it. This is both the intended way to edit and your escape hatch! 🏃‍♂️ See [How to report imprecision?](#how-to-report-imprecision-) if you find issues.

![No Click To Edit logo](./screenshots/NoClickToEdit.png)

Atlassian's products - Jira, Confluence, and the rest - are genuinely amazing. They power teams, projects, and companies all over the world. But let's be honest: **the "click to edit" feature is the one thing that makes countless people groan every single day** 😩

Accidentally entering edit mode when you just wanted to select some text? We've all been there. It's the kind of tiny annoyance that adds up, and for many, it's the reason they _think_ they hate Jira or Confluence.

**Just you wait** - with this one simple change, you'll be amazed at how much more enjoyable and productive your Atlassian experience becomes 🚀

**No more accidental edits, no more frustration—just smooth, predictable clicking** 😎

## Why use this extension? ✨

- 🛑 Prevents accidental edits in Atlassian products
- ✅ Only enter edit mode when you really mean to
- 🪶 Lightweight, no tracking, no bloat
- ⚡ Easy to install or use as a userscript

## But wait, how _do_ I enter edit mode when I want to? 🖱️

➡️ **Just hold <kbd>CTRL</kbd> (on Windows/Linux) or <kbd>⌘</kbd> (on Mac) while you click**.

This tells the extension: **_"Yes, I *really* mean to edit this."_**

No more accidental edits! Only intentional ones, when you want them 🎯

This is not just the intended way to enter **Edit Mode**, but also your escape hatch! 🏃‍♂️ If you find something that's unexpectedly unclickable, try using `Ctrl/Cmd+Click` to bypass the extension. This is especially useful since Atlassian's products are complex and ever-changing, and our detection algorithm might not catch every edge case. See [How to report imprecision?](#how-to-report-imprecision-) for more details.

## What is this? 🤔

This is a super lightweight, unobtrusive browser extension (or userscript) that disables "click to edit" on Atlassian products. That's it. No bloat, no tracking, no weird side effects. You can [review the script yourself](./no-click-to-edit.js) - it's just a few lines of JavaScript. Whenever Atlassian updates their UI and something breaks, I fix it immediately for myself, and post an update.

**You don't even need to install the extension if you don't want to!**  
Just copy the script and paste it into [Tampermonkey](https://www.tampermonkey.net/) or your favorite userscript manager. It's that simple! 😃

## How to use 🛠️

- **Browser Extension:**  
  Install the extension from the Chrome Web Store (coming soon) or load it as an unpacked extension using the files in this repo

- **Userscript:**  
  Copy the contents of [`no-click-to-edit.js`](./no-click-to-edit.js) into a new Tampermonkey/Greasemonkey script, and set it to run on Atlassian domains

## How to report imprecision? 🐞

Since Atlassian's products are complex and constantly evolving, you might occasionally find elements that are incorrectly blocked or allowed. Here's how to help improve the extension:

1. **Try the escape hatch first**: Use `Ctrl/Cmd+Click` to bypass the extension if something isn't working as expected 🏃‍♂️
2. **Report the issue**: If you find a pattern of elements that aren't working correctly:
   - 📸 Take a screenshot of the problematic element
   - 🛠️ Open your browser's DevTools (F12)
   - 🖱️ Right-click the element and select "Inspect"
   - 📸 Take a screenshot of the HTML structure
   - 📝 [Open an issue](https://github.com/haffi921/no-click-to-edit/issues) with these details

Common patterns we look for:

- `<div>` elements with specific `role` attributes (like `option`, `menu`, `menuitem`, etc.)
- Elements with specific `data-testid` attributes
- Elements with specific CSS classes

Take a look at [`no-click-to-edit.js`](./no-click-to-edit.js) to learn the patterns we're currently detecting 🕵️‍♂️

Your reports help make the extension more accurate for everyone! 🙏

## Want to help? 🤝

If you have improvement suggestions, find a bug, or notice the script is outdated (Atlassian updates their products from time to time!), please [open an issue](https://github.com/haffi921/no-click-to-edit/issues) on GitHub. If the issue is clear, feel free to open a PR—or fork it and make it your own! 💡

---

**Enjoy Atlassian the way it was meant to be: fast, frustration-free, and actually fun to use** 🎉
