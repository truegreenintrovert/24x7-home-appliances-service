# 🏠 24x7 Home Appliances Service

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-Fast-purple)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-success)

A modern, fast, and responsive **Home Appliances Service Booking Web App** built using **React + Vite**.

---

## ✨ Features

- 🛠️ Appliance service booking  
- 📱 Fully responsive design  
- ⚡ Fast performance using Vite  
- 📞 Direct call & WhatsApp integration  
- 📊 Google Analytics tracking  

---
## 🛠 Tech Stack

| Technology        | Usage              |
|------------------|--------------------|
| React.js         | Frontend UI        |
| Vite             | Build Tool         |
| Tailwind CSS     | Styling (optional) |
| Supabase         | Backend (optional) |
| GitHub           | Version Control    |

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── WhyUs.jsx
│   ├── Reviews.jsx
│   ├── Contact.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```
---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/24x7-home-appliances-service.git
cd 24x7-home-appliances-service
```

---

### 1️⃣ Install

```bash
npm install
npm run dev
```

---

## 🔐 Environment Variables (.env)

Create a `.env` file:

```env
VITE_APP_NAME=24x7 Home Appliances

# Contact Details
VITE_PHONE_NUMBER=91xxxxxxxx
VITE_WHATSAPP_NUMBER=91xxxxxxxx
VITE_WHATSAPP_MESSAGE=Hello, I need appliance service

# Google Analytics
VITE_GTAG_ID=G-XXXXXXXXXX
```

---

### 📌 How to Use These in Code

#### 📞 Phone Call
```js
window.location.href = `tel:${import.meta.env.VITE_PHONE_NUMBER}`
```

#### 💬 WhatsApp
```js
const number = import.meta.env.VITE_WHATSAPP_NUMBER;
const message = encodeURIComponent(import.meta.env.VITE_WHATSAPP_MESSAGE);

window.open(`https://wa.me/${number}?text=${message}`, "_blank");
```

#### 📊 Google Analytics (gtag)

Add in `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID');
</script>
```

Replace:
```
YOUR_ID → import.meta.env.VITE_GTAG_ID
```

---

## ⚠️ Important Rules

- Always prefix with `VITE_`
- Do NOT push `.env` to GitHub

---

## 📄 .env.example

```env
VITE_APP_NAME=

VITE_PHONE_NUMBER=
VITE_WHATSAPP_NUMBER=
VITE_WHATSAPP_MESSAGE=

VITE_GTAG_ID=
```

---

## 🧑‍💻 Author

**Yogesh**  
📧 yogesh@fruitenium.in  

---

## 📄 License

MIT License
