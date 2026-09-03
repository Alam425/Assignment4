# 🧩 JavaScript Utility Functions

A collection of 5 practical JavaScript utility functions built as part of a problem-solving assignment. Each function focuses on real-world logic, input validation, and clean output formatting.

---

## 📦 Functions Overview

### 1. 💰 `cashOut(amount)`
Calculates a **1.75% cash-out fee** from a given amount.

```js
cashOut(1000)  // → 17.5
cashOut(-50)   // → "Invalid"
cashOut("abc") // → "Invalid"
```

---

### 2. 📧 `validEmail(str)`
Validates whether a string is a properly formatted email address.

**Rules checked:**
- Must be a string
- Cannot start with special characters like `, - _ = ! # $ % ^ & * + @`
- Must end with `.com`
- `@` cannot be the last character

```js
validEmail("ami.tumi@gmail.com") // → true
validEmail("@gmail.com")         // → false
validEmail("hello.com")          // → false
```

---

### 3. 🗳️ `electionResult(votes)`
Counts votes for **Mango** and **Banana** candidates and declares a winner.

- Ignores unrecognized vote values
- Returns `"Invalid"` if input is not an array

```js
electionResult(["mango", "banana", "mango"]) // → "Mango"
electionResult(["banana", "banana"])          // → "Banana"
electionResult(["mango", "banana"])           // → "Draw"
electionResult("not an array")               // → "Invalid"
```

---

### 4. 👫 `findBestFriend(o1, o2)`
Checks if two students are **mutual best friends** based on their roll numbers.

Each object must have exactly 3 properties: `name`, `roll`, `bestFriend`.

```js
const s1 = { name: "Kashem", roll: 3, bestFriend: 1 }
const s2 = { name: "Joshim", roll: 1, bestFriend: 3 }

findBestFriend(s1, s2) // → true
findBestFriend(s1, s1) // → false
```

---

### 5. ⏱️ `countTime(timeArray)`
Converts an **array of seconds** into a human-readable time format.

```js
countTime([3600, 120, 30]) // → "1h 2m 30s"
countTime([3434, 6787])    // → "2h 48m 1s"
countTime(["abc"])         // → "Invalid"
```

---

## 🧠 Concepts Practiced

- Type validation with `typeof` and `Array.isArray()`
- String character inspection with `.split()` and `.indexOf()`
- Loop-based counting with `for...of`
- Object shape validation with `Object.keys()`
- Time conversion using `Math.floor()` and modulo `%`
- Template literals for formatted output
- Edge case and invalid input handling

---

## 🚀 Tech Stack

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />

---

## 🖥️ Run Locally

**Step 1 — Clone the repository:**
```bash
git clone https://github.com/shamsulalamcodes/Assignment4.git
```

**Step 2 — Navigate into the folder:**
```bash
cd Assignment4
```

**Step 3 — Run with Node.js:**
```bash
node index.js
```

> 💡 Uncomment the `console.log()` lines inside the file to test each function individually.

---

## 🔗 Links

- 📁 Repository: [github.com/shamsulalamcodes](https://github.com/shamsulalamcodes)
