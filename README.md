# Creature Searcher App 🐉

## 📖 Project Overview
The **Creature Searcher App** is a small JavaScript application built as part of the **freeCodeCamp JavaScript Algorithms and Data Structures certification**.  
It allows users to **search for RPG creatures by name or ID** and displays useful information such as stats, type, weight, and height.

This project demonstrates the use of **API calls, DOM manipulation, and error handling** in a real-world scenario.

---

## 🚀 Features
- 🔍 Search a creature by **name** or **ID**  
- 📊 Display creature details:  
  - Name (uppercase)  
  - ID (with `#` prefix)  
  - Type(s)  
  - Weight & Height  
  - Stats (HP, Attack, Defense, etc.)  
- ⚠️ Error handling: shows an alert if the creature is not found  
- 🔄 Reset and update UI correctly for each new search  

---

## 🛠️ Technologies Used
- **HTML5**  
- **CSS3** (basic styling)  
- **JavaScript (ES6)**  
- **Fetch API** for data requests  

---

## 🌐 API Reference
The app uses the freeCodeCamp **RPG Creature API**:  

- `https://rpg-creatures.freecodecamp.org/api/creatures`  
  → Returns a list of available creatures (IDs + names).  

- `https://rpg-creatures.freecodecamp.org/api/creature/{name-or-id}`  
  → Returns full details of a creature.  



---



---

## ▶️ How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/creature-searcher.git
   ```
2. Open the project folder:
   ```bash
   cd creature-searcher
   ```
3. Open `index.html` in your browser.  

No additional dependencies are required.

---

## 📚 Lessons Learned
- How to fetch data from an API and display it dynamically.  
- Proper error handling (e.g., invalid user input).  
- DOM manipulation for updating content.  
- The difference between endpoints (`/creatures` vs `/creature/{name-or-id}`).  

---

## 🙌 Acknowledgements
- [freeCodeCamp](https://www.freecodecamp.org/) for providing the challenge and API.  
- The freeCodeCamp forum community for discussions and debugging tips.  
