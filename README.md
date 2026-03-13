# 🛒 Shopping Cart — React + Redux Toolkit

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?style=flat-square&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=flat-square&logo=react-router&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Deployed](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)

A fully functional **Shopping Cart** web application built with **React.js** and **Redux Toolkit (RTK)**. This project demonstrates real-world state management using RTK slices, seamless cart operations, and a clean product browsing experience.

🔗 **Live Demo:** [shopping-cart-rtk.vercel.app](https://shopping-cart-rtk-one.vercel.app/)

---

## 📸 Preview

> *(Add a screenshot here — drag & drop an image into this section on GitHub)*

---

## ✨ Features

- 🛍️ **Products Listing** — Browse all products in a responsive grid layout
- ➕ **Add to Cart** — Add any product to your cart with a single click
- ➖ **Remove from Cart** — Remove individual items from the cart
- 🔢 **Quantity Control** — Increase or decrease item quantity in the cart
- 💰 **Total Price Calculation** — Real-time calculation of total cart value
- 🔀 **React Router Navigation** — Separate pages for Home and Cart
- ⚡ **Vite-powered** — Lightning fast dev server and optimized build

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| **React.js 18** | UI component library |
| **Redux Toolkit (RTK)** | Global state management |
| **React Router v6** | Client-side routing |
| **Vite** | Build tool & dev server |

---

## 🗂️ Project Structure

```
shopping-cart-rtk/
├── public/
├── src/
│   ├── components/        # Reusable UI components (Navbar, ProductCard, CartItem)
│   ├── pages/             # Route-level pages (Home, Cart)
│   ├── redux/
│   │   ├── store.js       # Redux store configuration
│   │   └── cartSlice.js   # Cart slice (actions + reducers)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v16+) and **npm** installed.

```bash
node -v
npm -v
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AmirMajeed4905/shopping-cart-rtk.git

# 2. Navigate to the project folder
cd shopping-cart-rtk

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🧠 Redux State Management

The cart state is managed using a **Redux Toolkit slice** (`cartSlice.js`).

### Cart Slice Actions

| Action | Description |
|---|---|
| `addToCart(product)` | Adds a product or increments its quantity |
| `removeFromCart(id)` | Removes an item from the cart |
| `incrementQuantity(id)` | Increases quantity by 1 |
| `decrementQuantity(id)` | Decreases quantity by 1 (min: 1) |

### Cart State Shape

```js
{
  cart: [
    {
      id: 1,
      title: "Product Name",
      price: 29.99,
      quantity: 2,
      image: "..."
    }
  ]
}
```

---

## 🌐 Deployment

This project is deployed on **Vercel**.

To deploy your own fork:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Vite — hit **Deploy**

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use it for learning or personal projects.

---

## 👨‍💻 Author

**Amir Majeed**

[![GitHub](https://img.shields.io/badge/GitHub-AmirMajeed4905-black?style=flat-square&logo=github)](https://github.com/AmirMajeed4905)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/your-linkedin-username)

---

> ⭐ If you found this project helpful, please give it a star on GitHub!
