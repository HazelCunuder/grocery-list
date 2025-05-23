# 🛒 Grocery List: Your Smart Shopping Companion 📝

**Never forget an item again! This simple, intuitive web application helps you organize your shopping needs with ease.**

## ✨ Features

* **Add Items Instantly:** Quickly type and add new items to your list.
* **Mark as Purchased:** Check off items as you buy them, keeping your list updated in real-time.
* **Clear All:** Start fresh with a single click.
* **Persistent Storage:** Your list automatically saves in your browser, so your items are waiting for you next time.
* **Responsive Design:** Accessible and easy to use on any device, from desktop to mobile.

## 🚀 Technologies Used

This project is built with foundational web technologies:

* **HTML5:** Structuring the shopping list interface.
* **CSS3 (with SCSS):** Styling for a clean, user-friendly, and responsive design.
  * Utilizes variables for consistent theming.
  * Organized with modular SCSS for maintainability.
* **JavaScript (ES6+):** Powers all dynamic interactions, item management, and local storage persistence.

## 🎮 How to Use

1. **Add Item:** Type an item into the input field and press Enter or click the "Add" button.
2. **Mark as Done:** Click on an item in the list to toggle its "purchased" status (e.g., strike through).
3. **Clear List:** Click the "Clear All" button to empty your entire list.
4. **Reload:** Your list will automatically reload the next time you visit the page!

## ⚙️ Installation & Setup

To run this grocery list locally:

1. **Clone the Repository:**

    ```bash
    git clone [your-repository-url]
    cd grocery-list-project
    ```

2. **Open `index.html`:** Simply open the `index.html` file in your preferred web browser.

    *(Note: This is a client-side only application, so no web server is strictly required.)*

3. **Compile SCSS (if making changes):** If you modify any `.scss` files, you will need a Sass compiler:

    ```bash
    # Example using npm:
    npm install -g sass # If you don't have it
    sass css/main.scss:style.css
    # Or for continuous watching during development:
    sass --watch css/main.scss:style.css
    ```

## 🗺️ Project Structure

.
├── index.html              # Main application page
├── js/
│   └── main.js             # All application logic and DOM manipulation
└── css/
├── main.scss           # Main SCSS file, imports other modules
├── abstracts/          # SCSS variables and mixins
│   ├── _variables.scss
│   └──_mixins.scss
├── base/               # Base styles and resets
│   ├── _reset.scss
│   └──_typography.scss
├── components/         # Reusable UI components
│   └── _forms.scss     # (Example: styling for input/buttons)
└── pages/              # Page-specific styles (e.g., list layout)
└──_list.scss

## 💡 Future Enhancements

* Categorize items (e.g., produce, dairy, meat).
* Allow editing of existing items.
* Drag-and-drop reordering of items.
* Multi-list functionality.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

Made with ❤️ by Hazel Cunuder
