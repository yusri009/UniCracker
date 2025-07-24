# UniCracker

UniCracker is a student-focused, full-stack web application designed to simplify university course exploration and management. Built with the MERN (MongoDB, Express.js, React, Node.js) stack, it provides a seamless experience for students to browse, filter, and organize their course preferences.

## Features

- **Intuitive Course Exploration**: Easily search and discover university courses.
- **Dynamic Course Filtering**: Filter courses by various criteria such as subject, faculty, and level.
- **Responsive Table UI**: A clean and responsive table interface for viewing course details.
- **Drag-and-Drop Course Ordering**: Effortlessly reorder course preferences using an interactive drag-and-drop mechanism.
- **Mobile-Friendly Controls**: Optimized for both desktop and mobile devices, ensuring a consistent user experience.
- **Collapsible Filter Sidebar**: A convenient sidebar for applying filters, which can be collapsed to maximize screen real estate.
- **Student Profile Management**: View and update personal profile information (username, email, district, etc.).
- **Secure Logout**: A professional logout modal with confirmation to ensure data security.

## Technologies Used

**Frontend (Client)**:

- React.js
- Vite (for fast development)
- Custom CSS
- Lucide React (for icons)

**Backend (Server)**:

- Node.js
- Express.js
- MongoDB (for database)

## Installation

Follow these steps to set up and run UniCracker on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm (recommended)
<!-- - MongoDB (running locally or accessible via a connection string) -->

### 1. Clone the Repository

```bash
git clone https://github.com/mohamedhanfal/UniCracker.git
cd UniCracker
```

### 2. Backend Setup (Server)

Navigate to the `server` directory, install dependencies, and start the server.

```bash
cd server
npm install
npm start
```

The backend server will typically run on `http://localhost:8000`.

### 3. Frontend Setup (Client)

Open a new terminal, navigate to the `client` directory, install dependencies, and start the development server.

```bash
cd client
npm install
npm run dev
```

The frontend application will typically run on `http://localhost:5173` (or another port as indicated by Vite).

<!-- ## Screenshots

_(Add screenshots of your application here to showcase its features and design.)_ -->

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
