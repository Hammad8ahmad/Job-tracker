Job Tracking Site

A job tracking web application to help users manage and keep track of job applications. The application allows users to add, edit, delete, and filter jobs they have applied for, making the job search process more organized and efficient.

🚀 Features
Add New Jobs: Easily add new job applications with all relevant details.
Edit and Delete Jobs: Modify or remove job entries as needed.
Filter Jobs: Filter jobs by date, status, title, or location.
Responsive Design: Fully responsive UI for a seamless experience on any device.
Dark Mode Support: Switch between light and dark mode for better accessibility.
Smooth Animations: Fade-in/out effects and smooth scrolling for enhanced user experience.
🖼️ Screenshots
Home Page

Job Form

Dark Mode

🛠️ Technologies Used
Frontend: React, Tailwind CSS, React Router
State Management: @tanstack/react-query for data fetching and state management
Backend: Node.js, Express, PostgreSQL
Deployment: Vercel (Frontend), Render (Backend)
Other Libraries: react-spinners for loading indicators, react-icons for icons
⚙️ Installation
To get started with the project, clone the repository and install the necessary dependencies.

bash
Copy code
# Clone the repository
git clone https://github.com/your-username/job-tracker.git

# Navigate to the project directory
cd job-tracker

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
🔧 Running the Project
Run the Frontend
Navigate to the client directory and start the development server:

bash
Copy code
cd client
npm start
Run the Backend
Navigate to the server directory and start the backend server:

bash
Copy code
cd server
npm run dev
Ensure you have a .env file set up with your environment variables, including the database URL and any necessary API keys.

🌐 Deployment
Frontend: Deployed on Vercel. View Live Demo
Backend: Deployed on Render. View API Endpoint
📄 API Endpoints
The backend API has several endpoints to manage jobs:

GET /api/jobs - Get all job entries.
POST /api/jobs - Add a new job entry.
PUT /api/jobs/:id - Update an existing job entry.
DELETE /api/jobs/:id - Delete a job entry.
📚 Usage
Adding a Job: Click the "Add Job" button and fill in the job details in the form.
Editing a Job: Click on the job card and use the "Edit" button to modify job details.
Deleting a Job: Click on the job card and use the "Delete" button to remove the job.
Filtering Jobs: Use the filter options to search and view specific job entries.
🌓 Dark Mode
Toggle between light and dark modes using the switch in the top-right corner. The application remembers your preference using local storage.

🤝 Contributing
Contributions are welcome! If you have any improvements or suggestions, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
📝 License
This project is licensed under the MIT License. See the LICENSE file for details.

📧 Contact
If you have any questions or need further assistance, feel free to reach out:

Email: your-email@example.com
GitHub: your-username
Feel free to customize the README further to suit your project specifics! If you have any additional sections you'd like to add or specific content to modify, let me know!
