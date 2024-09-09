# Job Tracking Site

A comprehensive job tracking web application designed to help users manage and keep track of their job applications. The app provides features like adding, editing, deleting, and filtering job entries, making the job search process more organized and efficient.

## 🚀 Features

- **Add New Jobs**: Quickly add new job applications with relevant details.
- **Edit and Delete Jobs**: Easily modify or remove job entries.
- **Filter Jobs**: Filter job entries by date, status, title, or location.
- **Responsive Design**: Optimized for a seamless experience on all devices.
- **Dark Mode Support**: Toggle between light and dark modes for accessibility.
- **Smooth Animations**: Enjoy smooth fade-in/out effects and scrolling animations.

## 🖼️ Screenshots

- **Home Page**

- **Job Form**

- **Dark Mode**

## 🛠️ Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for designing responsive layouts.
- **React Router**: Declarative routing for React apps.

### State Management
- **@tanstack/react-query**: For efficient data fetching and state management.

### Backend
- **Node.js & Express**: Server-side application framework.
- **PostgreSQL**: Relational database management system for storing job data.

### Deployment
- **Frontend**: Deployed on Vercel.
- **Backend**: Deployed on Render.

### Other Libraries
- **react-spinners**: For loading animations.
- **react-icons**: For icon usage.

## ⚙️ Installation

To set up the project locally, follow these steps:

### ⚙️ Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/job-tracker.git
2. **Navigate to the Project Directory**
   ```bash
   cd job-tracker
3. **Install Frontend Dependencies**
   ```bash
   cd client
   npm install
4. **Install Backend Dependencies**
   ```bash
   cd ../server
   npm install
### 🔧 Running the Project
**Start the Frontend**
Navigate to the client directory and run:
    ```bash
    cd client
    npm start
    
**Start the Backend**
Navigate to the server directory and run:
    ```bash
    cd server
    npm run dev
Ensure you have a .env file set up with your environment variables, including the database URL and necessary API keys.

### 🌐 Deployment
**Frontend:** Deployed on Vercel. View Live Demo
**Backend:** Deployed on Render. View API Endpoint
### 📄 API Endpoints
The backend API supports the following endpoints:

**GET /api/jobs** - Retrieve all job entries.

**POST /api/jobs** - Add a new job entry.

**PUT /api/jobs/:id** - Update a specific job entry.

**DELETE /api/jobs/:id** - Delete a specific job entry.

### 📚 Usage
Adding a Job: Click the "Add Job" button and fill in the form with job details.
Editing a Job: Click on a job card and use the "Edit" button to modify job information.
Deleting a Job: Click on a job card and use the "Delete" button to remove the job.
Filtering Jobs: Utilize the filter options to search for specific job entries.
### 🌓 Dark Mode
Users can switch between light and dark modes using the toggle in the top-right corner. The application saves your preference using local storage.

### 🤝 Contributing
Contributions are always welcome! Follow these steps to contribute:

Fork the Repository

**Create a New Branch**
    ```bash 
    git checkout -b feature-branch
    ```
 Make Your Changes

**Commit Your Changes**
    ```bash 
    git commit -m 'Add a new feature'
    ```
**Push to the Branch**
    ```bash
    git push origin feature-branch
    ``` 
 Open a Pull Request

### 📝 License
This project is licensed under the MIT License. See the LICENSE file for more details.


