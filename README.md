# UnQue API Automation Suite

Automated REST API testing framework built with **Node.js**, **Jest**, and **Supertest**. This project tests 5 CRUD operations (GET, POST, PUT, DELETE) against the ReqRes API.

---

## 🛠️ Tech Stack

- **Node.js** - JavaScript Runtime Environment
- **Jest** - Test Runner & Assertion Library
- **Supertest** - HTTP Requests
- **ReqRes API** - REST API Endpoints

---

## 📁 Project Structure

```text
unque-api-automation/
├── __tests__/
│   └── users.test.js
├── config/
│   └── config.js
├── .gitignore
├── jest.config.js
├── package.json
└── README.md
```

 ## 🧪 Test Coverage

| Endpoint | HTTP Method | Expected Status | Description |
| :--- | :---: | :---: | :--- |
| `/users/2` | `GET` | `200` | Fetches single user details |
| `/users/23` | `GET` | `404` | Verifies non-existing user response |
| `/users` | `POST` | `201` | Creates a new user record |
| `/users/2` | `PUT` | `200` | Updates user details |
| `/users/2` | `DELETE` | `204` | Deletes user record |


## Installation & Setup
1. **Clone the repository:** 
```
git clone [https://github.com/harshita713lab/unque-api-automation.git](https://github.com/harshita713lab/unque-api-automation.git)
cd unque-api-automation
```
2. **Install dependencies:**
```
npm install
```
3. **Run the tests:**
```
npm test
```

## Author
**Name: Harshita Rathore**
##### GitHub: @harshita713lab
