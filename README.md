# 📝 Kanban Board

A simple and responsive **Kanban Board** built using **HTML, CSS, and JavaScript**.
The application allows users to create, manage, prioritize, and remove tasks through an interactive board.

🔗 **Live Demo:** https://kanban-board-madhan31.vercel.app/

---

## ✨ Features

* ➕ Create new tasks
* 🗑️ Delete tasks
* 🎨 Assign different priority colors to tasks
* 🔍 Filter tasks based on priority
* 🌙 Dark mode / Light mode
* ✏️ Edit task content directly using `contenteditable`
* 🔒 Lock/unlock task editing
* 💾 Persistent task data using Local Storage
* 📱 Responsive design for mobile and desktop
* 🎯 Unique task IDs generated automatically
* 🖱️ Interactive task controls
* 🎨 Dynamic priority color selection

---

## 🛠️ Technologies Used

* **HTML5** – Structure and semantic markup
* **CSS3** – Styling, responsive design, dark mode and layouts
* **JavaScript (ES6+)** – Application logic and DOM manipulation
* **Font Awesome** – Icons
* **Local Storage** – Persisting tasks in the browser
* **Vercel** – Deployment

---

## 📂 Project Structure

```text
Kanban-Board/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Madhansuriya31/Kanban-Board.git
```

### 2. Navigate to the project folder

```bash
cd Kanban-Board
```

### 3. Open the project

Since this is a vanilla HTML/CSS/JavaScript project, no package installation is required.

You can open:

```text
index.html
```

directly in your browser.

For development, you can also use the **Live Server** extension in VS Code.

---

## 🎯 How It Works

### Create a Task

Click the **`+`** button to open the task creation modal. Enter your task and select a priority color.

### Change Priority

Each task has a priority color. Clicking the color allows you to cycle through the available priority colors.

### Edit a Task

Task content can be edited directly using the `contenteditable` functionality.

### Lock / Unlock

The lock icon can be used to control whether the task content can be edited.

### Delete Tasks

Click the **delete** button and select the tasks you want to remove.

### Filter Tasks

Use the priority buttons in the toolbox to display tasks based on their priority.

### Dark Mode

Use the moon icon to switch between **light mode and dark mode**.

---

## 💾 Data Persistence

The application uses **Browser Local Storage** to preserve task information.

This means your tasks remain available even after refreshing the page or reopening the browser on the same device.

---

## 📱 Responsive Design

The application is designed to work across different screen sizes, including:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile

CSS media queries are used to adapt the layout for smaller screens.

---

## 🌐 Deployment

The project is deployed using **Vercel**.

🔗 **Live Application:**
https://kanban-board-madhan31.vercel.app/

---

## 📸 Project Preview

You can add screenshots of your application here:

```markdown
![Kanban Board Screenshot](./screenshots/kanban-board.png)
```

---

## 🔮 Future Improvements

Some possible improvements for future versions:

* [ ] Drag and drop tasks
* [ ] Multiple Kanban columns such as To Do, In Progress, and Completed
* [ ] Task due dates
* [ ] Search functionality
* [ ] Task categories/tags
* [ ] Task completion status
* [ ] Cloud database integration
* [ ] User authentication
* [ ] Backend API integration

---

## 👨‍💻 Author

**Madhan Suriya K**

GitHub:
https://github.com/Madhansuriya31

---

## 📄 License

This project is created for learning and portfolio purposes.
