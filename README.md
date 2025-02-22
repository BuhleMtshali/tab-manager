# Tab Manager

## Description

**Tab Manager** is a simple web-based application designed to help users save, manage, and revisit URLs effortlessly. Built with HTML, CSS, and JavaScript, this project allows users to input URLs manually or save the currently open browser tab. It also supports persistent storage through localStorage, ensuring your saved links stay intact even after refreshing or closing the browser.

This app is packaged as a Chrome extension, making tab management even more convenient.

## Features

- **Save URL:** Enter a URL manually and save it to the list.
- **Save Current Tab:** Automatically save the current active tab's URL.
- **Delete Individual Link:** Remove a single URL from the list.
- **Clear All:** Wipe out all saved URLs in one click.
- **Persistent Storage:** Links are stored using localStorage.
- **Responsive Design:** Fully responsive for different screen sizes.

## Technologies Used

- HTML5
- CSS3 (including responsive design)
- JavaScript (with localStorage and Chrome Tab API)
- Google Fonts
- Material Icons

## Project Structure
```
├── index.html           # Main HTML file
├── app.css              # Main CSS file for styling
├── responsive.css       # Styles for responsive design
├── app.js               # Core JavaScript functionality
├── icon.png             # Icon for the Chrome extension
├── manifest.json        # Chrome extension configuration
```

## Setup Instructions

1. **Clone the Repository:**
```sh
git clone https://github.com/BuhleMtshali/tab-manager.git
```

2. **Load as a Chrome Extension:**
- Open Chrome and navigate to `chrome://extensions/`.
- Enable **Developer mode** (toggle in the top right corner).
- Click **Load unpacked** and select the project folder.

3. **Use the App:**
- Click on the extension icon to open the popup.
- Start saving and managing your links!

## How It Works

- **Saving a URL:** Click the "SAVE INPUT" button to add the URL entered in the input field to the list.
- **Saving the Current Tab:** Click the "SAVE TAB" button to save the current tab's URL.
- **Deleting a Link:** Click the trash icon next to a link to remove it.
- **Clearing All Links:** Click the "CLEAR ALL" button to delete all saved links.

## Permissions

- **tabs:** Required to access the currently active tab’s URL.

## Potential Improvements

- Add folders or categories for better organization.
- Implement search functionality.
- Sync saved links across devices using Chrome Storage API.

## Author

Created by **Zanobuhle Mtshali**

---

Let me know if you want me to tweak anything or add more details! 🚀

