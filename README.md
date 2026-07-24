# CareerPilot 🚀

CareerPilot is a full-stack **Career Management Platform** designed to help students organize, track, and manage their internship and job application journey from a single dashboard.

Instead of managing applications through spreadsheets, notes, emails, and multiple job portals, CareerPilot provides a centralized workspace where students can track applications, monitor deadlines, analyze progress, and receive AI-powered resume feedback.

---

# 📌 Problem Statement

Students often apply for multiple internships and job opportunities through platforms like LinkedIn, company career portals, and other job boards.

Managing these applications becomes difficult because information is scattered across:

* Notes
* Emails
* Excel sheets
* Browser bookmarks
* Different job portals

CareerPilot solves this problem by providing one organized platform to manage the complete application journey.

---

# 🎯 Objectives

* Organize internship and job applications
* Track application progress
* Manage application statuses
* Monitor deadlines
* Visualize career progress through dashboards
* Provide AI-based resume analysis
* Demonstrate full-stack software engineering practices

---

# ✨ Features

## 🔐 User Authentication

Implemented:

* User Registration
* User Login
* Password Encryption using bcrypt
* JWT Authentication
* Protected API Routes

### Authentication Flow

Users can create accounts and securely access their personal application dashboard.

---

# 💼 Internship Application Management

Users can:

* Add applications
* View all applications
* Edit applications
* Delete applications
* Search applications
* Filter applications by status

Each application contains:

* Company Name
* Role
* Status
* Deadline
* Location
* Notes

---

# 📊 Application Workflow

Applications can be tracked through different stages:

* Applied
* Interview
* Offer
* Rejected

These statuses help students understand their current internship progress.

---

# 📈 Dashboard

CareerPilot provides an overview of the user's internship journey.

Dashboard includes:

* Total Applications
* Applications Applied
* Interviews
* Offers
* Rejections
* Upcoming Deadlines
* Application Progress Visualization

---

# 🤖 AI Resume Review

CareerPilot integrates AI using **OpenRouter API**.

Users can paste their resume content and receive:

* Resume Score
* Strong Skills Identification
* Missing Skills
* Improvement Suggestions

AI Model Integration:

* OpenRouter Free AI Models

---

# 🔎 Search & Filtering

Implemented APIs for:

* Searching applications by company name
* Filtering applications by application status

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* React Router
* Axios
* CSS

---

## Backend

* Node.js
* Express.js

---

## Database

* MySQL

---

## Authentication

* JSON Web Token (JWT)
* bcrypt

---

## AI Integration

* OpenRouter API

---

## Development Tools

* Git
* GitHub
* VS Code
* Bruno API Client

---

# 🔌 REST API Documentation

## Authentication APIs

### Register User

```
POST /api/auth/register
```

Request:

```json
{
"name":"Sathvika",
"email":"example@gmail.com",
"password":"password"
}
```

---

### Login User

```
POST /api/auth/login
```

Response:

```json
{
"token":"JWT_TOKEN"
}
```

---

# Application APIs

All application routes require JWT authentication.

Header:

```
Authorization: Bearer TOKEN
```

---

## Create Application

```
POST /api/applications
```

Example:

```json
{
"company":"Google",
"role":"Software Engineer Intern",
"status":"Applied",
"deadline":"2026-08-01",
"location":"Bangalore",
"notes":"Applied through careers portal"
}
```

---

## Get All Applications

```
GET /api/applications
```

---

## Get Application By ID

```
GET /api/applications/:id
```

---

## Update Application

```
PUT /api/applications/:id
```

---

## Delete Application

```
DELETE /api/applications/:id
```

---

## Search Applications

```
GET /api/applications/search?company=Google
```

---

## Filter By Status

```
GET /api/applications/status/:status
```

Example:

```
GET /api/applications/status/Interview
```

---

# Dashboard APIs

## Get Dashboard Statistics

```
GET /api/dashboard/stats
```

Returns:

* Total applications
* Applied count
* Interview count
* Offer count
* Rejected count

---

## Get Upcoming Deadlines

```
GET /api/applications/deadlines
```

---

# AI API

## Resume Analysis

```
POST /api/ai/analyze
```

Request:

```json
{
"resume_text":"Resume content here"
}
```

Response:

```json
{
"score":85,
"strong_skills":[
"Java",
"React"
],
"missing_skills":[
"Docker",
"Cloud"
],
"suggestions":[
"Add measurable achievements"
]
}
```

---

# 🧠 Data Structures & Algorithms Integration

The project applies DSA concepts where applicable:

## Searching

Used for:

* Finding applications by company

## Sorting

Used for:

* Organizing deadlines
* Managing application lists

## Hash Maps

Used for:

* Dashboard statistics
* Status counting

## Priority Handling

Used for:

* Deadline tracking

---

# 📂 Project Structure

```
CareerPilot/

│

├── client/

│   ├── components/

│   ├── pages/

│   ├── services/

│   ├── hooks/

│   └── context/

│

├── server/

│   ├── controllers/

│   ├── models/

│   ├── routes/

│   ├── middleware/

│   ├── services/

│   └── config/

│

└── README.md
```

---

# 🚀 Future Enhancements

Planned improvements:

* Multiple resume version management
* Resume upload and storage
* Email reminders
* Interview calendar
* Internship recommendation system
* Skill gap analysis
* Learning roadmap generation
* Mobile application
* Browser extension

---

# 📌 Capstone Project Alignment

CareerPilot is developed as part of the:

**Integrated Software Engineering Capstone Project**
under the **Product Engineering Proficiency & DSA Mastery Bootcamp**

The project demonstrates:

✅ Full Stack Development
✅ REST API Development
✅ Authentication & Security
✅ Database Design
✅ AI Integration
✅ Software Architecture
✅ GitHub Collaboration
✅ Open Source Workflow
✅ DSA Application

