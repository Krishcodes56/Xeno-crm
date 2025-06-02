# demo-CRM App

A modern, aesthetic, and interactive Demo-CRM (Customer Relationship Management) application built with React, Node.js, Express, and MongoDB and AI Assistant. This project allows you to manage customers, orders, audiences, and marketing campaigns with a beautiful dark-themed UI and Google authentication.

---

## Features

- **Google OAuth Login**  
  Secure login using Google accounts.

- **Customer Management**  
  Create and manage customer records.

- **Order Management**  
  Create and track orders for customers.

- **Audience Builder**  
  Build dynamic audiences using rules and logical operators (AND/OR).

- **Campaign Management**  
  Create and view marketing campaigns based on custom audiences.

- **Aesthetic UI**  
  Fully responsive, dark-themed, and interactive design with animated gradients.

---

## Tech Stack

- **Frontend:** React, React Router, Formik, CSS Modules, React Icons
- **Backend:** Node.js, Express, Passport.js (Google OAuth)
- **Database:** MongoDB (Mongoose)
- **Authentication:** Google OAuth 2.0

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or Atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mini-crm-app.git
cd mini-crm-app
```

### 2. Setup the Server

```bash
cd server
npm install
```

- Create a `.env` file in the `server` directory with the following:

  ```
  MONGO_URI=your_mongodb_connection_string
  GOOGLE_CLIENT_ID=your_google_client_id
  GOOGLE_CLIENT_SECRET=your_google_client_secret
  SESSION_SECRET=your_session_secret
  FRONTEND_URL=http://localhost:3000
  ```

- Start the server:

  ```bash
  npm start
  ```

### 3. Setup the Client

```bash
cd ../client
npm install
```

- Start the client:

  ```bash
  npm start
  ```

- The app will run at [http://localhost:3000](http://localhost:3000)

---

## Usage

1. **Login:**  
   Click "Login with Google" to authenticate.

2. **Navigate:**  
   Use the navigation bar to access Customers, Orders, Audience, and Campaigns.

3. **Create Customers/Orders:**  
   Fill out the forms to add new customers and orders.

4. **Build Audiences:**  
   Add rules and use AND/OR logic to define your target audience. Check audience size before saving.

5. **Campaigns:**  
   View all campaigns and their details.

---

## Folder Structure

```
mini-crm-app/
├── client/         # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   └── ...
├── server/         # Express backend
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── ...
└── README.md
```

---

## Customization

- **Theme:**  
  All major colors and gradients are in CSS files. Adjust for your brand as needed.

- **Google OAuth:**  
  Register your app in the [Google Developer Console](https://console.developers.google.com/) and update your `.env` accordingly.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)

---

## Credits

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Passport.js](http://www.passportjs.org/)
- [Formik](https://formik.org/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Enjoy your Demo-CRM!**
