# MegaStore Global – Data Migration & Backend Architecture

## 📌 Project Overview

**MegaStore Global** is a backend modernization project focused on transforming a legacy, unstructured Excel/CSV “Master File” into a scalable, normalized, and persistent hybrid data architecture.

The solution integrates:

- A **Relational Database (SQL)** for structured core business data  
- A **Non-Relational Database (MongoDB)** for flexible logging and transactional records  
- A high-performance **RESTful API** built with Node.js and Express  

The goal is to ensure **data integrity, scalability, maintainability, and performance**.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Node.js |
| Framework | Express.js |
| Relational Database | PostgreSQL / MySQL |
| Non-Relational Database | MongoDB |
| ORM/ODM | Mongoose |
| Documentation | Postman |
| Modeling | Draw.io (ERD) |
| Language | JavaScript (ES6+) |
| Environment Management | Dotenv |

---

## 🏗 Data Architecture & Design Decisions

### 🔹 Relational Model (SQL)

To eliminate inconsistencies and duplication from the legacy file, we applied **database normalization principles (1NF, 2NF, 3NF)**.

#### ✅ Entities Created

The original flat file was decomposed into the following structured entities:

- Customers
- Products
- Suppliers
- Orders

#### ✅ Referential Integrity

- Implemented **Primary Keys (PK)**
- Implemented **Foreign Keys (FK)**
- Enforced relational constraints to ensure data consistency

#### ✅ Normalization (Up to 3NF)

By reaching **Third Normal Form (3NF)**:

- Eliminated transitive dependencies
- Ensured updates occur in only one place (e.g., price changes, customer address updates)
- Reduced redundancy
- Improved long-term maintainability

---

### 🔹 Non-Relational Model (MongoDB)

MongoDB was selected for:

- Audit logs
- Transaction history
- Change tracking
- Flexible event-based data

This allows:

- High write performance
- Schema flexibility
- Efficient storage of semi-structured or evolving data

The hybrid approach combines **ACID compliance from SQL** with **flexibility and scalability from NoSQL**.

---

## ⚙ Installation & Setup

### 🔹 Prerequisites

- Node.js (v16 or higher)
- PostgreSQL or MySQL
- MongoDB
- npm

---

### 🔹 Local Deployment

#### 1️⃣ Clone the repository

```bash
git clone https://github.com/Steven-Patino/MDD_M4
cd MDD_M4-migration
````
#### 2️⃣ Install dependencies
npm install

#### 3️⃣ Configure Environment Variables

Create a .env file in the root directory:

PORT=3000

# SQL Database
DB_SQL_HOST=
DB_SQL_USER=
DB_SQL_PASS=
DB_SQL_NAME=

# MongoDB
MONGO_URI=mongodb://localhost:27017/mdd_m4


#### 4️⃣ Run the project
npm start

The application will run at:

http://localhost:3000
