# Official Gazette Updater (Google Apps Script Web App)

This is a web-based application built using **Google Apps Script** and **Google Sheets** that allows users to submit and manage entries for the **Omani Official Gazette**.

## 🚀 Features

- Submit legislation items with key metadata
- Automatically store submissions in a Google Sheet
- View all submitted entries in a structured table
- Edit and delete entries directly from the web interface
- Timestamped entries used as unique IDs
- Form allows `-` for optional date fields

## 📋 Fields Captured

- Arabic Title
- English Title
- Type (Royal Decree or Ministerial Decision or Circular)
- Item Number
- Issued by
- Date Issued
- Gazette Number
- Gazette Date

## 🛠 Technologies Used

- Google Apps Script (HTML + JS frontend, backend scripting)
- Google Sheets (for data storage)
- Vanilla JavaScript
- Google Fonts (Poppins)

## 🧩 Setup Instructions

1. Open your [Google Apps Script project](https://script.google.com).
2. Paste the backend code in `Code.gs`.
3. Create a new HTML file named `Index.html` and paste the frontend code.
4. Link the project to a Google Sheet. Make sure the header row matches:

