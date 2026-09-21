# 🚀 UnQue API Automation Suite

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green?logo=node.js)](https://nodejs.org/)
[![Jest](https://img.shields.io/badge/Test_Runner-Jest-C21325?logo=jest)](https://jestjs.io/)
[![Supertest](https://img.shields.io/badge/HTTP_Assertion-Supertest-blue)](https://github.com/ladjs/supertest)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

An enterprise-ready **REST API Automation Testing Framework** built with **Node.js**, **Jest**, and **Supertest**. This repository demonstrates modular SDET architecture, robust HTTP assertions, response schema validation, positive & negative test coverage, and clean test design principles targeting RESTful web services.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Test Coverage & Matrix](#-test-coverage--matrix)
- [Prerequisites & Installation](#-prerequisites--installation)
- [Running Tests](#-running-tests)
- [Sample Execution Log](#-sample-execution-log)
- [Best Practices Implemented](#-best-practices-implemented)
- [Author & Credits](#-author--credits)
- [License](#-license)

---

## 🎯 Overview

The **UnQue API Automation Suite** validates backend microservices and REST APIs endpoints using an asynchronous JavaScript test pipeline. It covers full CRUD operations (Create, Read, Update, Delete) against REST endpoints, ensuring data integrity, schema validity, status code compliance, and error-handling behavior.

Designed specifically as an **SDET Portfolio Project**, it highlights clean code practices, environment-based configuration management, and deterministic assertion patterns.

---

## ✨ Key Features

- ⚡ **Asynchronous Test Execution**: Driven by `Jest` test runner with sequential execution (`--runInBand`) to avoid rate limiting and race conditions.
- 📡 **HTTP Request Orchestration**: Powered by `Supertest` for seamless API request building, header manipulation, and response handling.
- 🎯 **Comprehensive Assertion Suite**: Validates HTTP status codes (`200 OK`, `201 Created`, `204 No Content`, `404 Not Found`), response payload properties, JSON structure, and data formats (e.g., regex email verification).
- 🔄 **Full CRUD Coverage**: Comprehensive automated tests covering `GET`, `POST`, `PUT`, and `DELETE` requests.
- 🛡️ **Negative Testing Capabilities**: Verifies proper error responses when querying non-existent resources or invalid IDs.
- ⚙️ **Centralized Configuration**: Decoupled base URL and environment parameters for easy multi-environment configuration (Development, Staging, Production).

---

## 🛠️ Tech Stack & Frameworks

| Technology | Role / Purpose |
| :--- | :--- |
| **Node.js** | JavaScript Runtime Environment |
| **Jest** | Test Runner & Framework |
| **Supertest** | HTTP Endpoint Assertion Library |
| **ReqRes REST API** | Target Backend REST Endpoint |
| **CommonJS (CJS)** | Module Architecture |

---

## 📁 Project Architecture

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

---

## 🧪 Test Coverage & Matrix

Below is the structured matrix of automated test scenarios included in this suite:

| Endpoint | HTTP Method | Expected Status | Scenario Type | Test Description |
| :--- | :---: | :---: | :---: | :--- |
| `/users/2` | `GET` | `200 OK` | Positive | Retrieves user details, verifies `id`, `email`, and `@reqres.in` domain format. |
| `/users/23` | `GET` | `404 Not Found` | Negative | Asserts proper 404 response body and status code when requesting a non-existent user. |
| `/users` | `POST` | `201 Created` | Positive | Creates a new user record, validates returned `id`, payload fields, and `createdAt` timestamp. |
| `/users/2` | `PUT` | `200 OK` | Positive | Updates user profile details, validates modified attributes and `updatedAt` timestamp. |
| `/users/2` | `DELETE` | `204 No Content` | Positive | Deletes user resource and verifies standard HTTP `204` status response. |

---

## ⚙️ Prerequisites & Installation

### 1. Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended) - [Download Node.js](https://nodejs.org/)
- **npm** (v8.0.0 or higher)

### 2. Clone the Repository
```bash
git clone https://github.com/harshita713lab/unque-api-automation.git
cd unque-api-automation
```

### 3. Install Dependencies
```bash
npm install
```

---

## 🚀 Running Tests

To run the automated test suite locally:

```bash
npm test
```

*Note: The test script executes `jest --runInBand` to run test files serially, preventing concurrent request interference.*

---

## 📊 Sample Execution Log

When tests are executed successfully, the following output is generated in the console:

```text
PASS  __tests__/users.test.js
  Users API Automation Suite (ReqRes)
    ✓ GET /users/2 - Should return user details with status 200 (142 ms)
    ✓ GET /users/23 - Should return 404 for non-existing user (88 ms)
    ✓ POST /users - Should create a new user with status 201 (115 ms)
    ✓ PUT /users/2 - Should update user details (95 ms)
    ✓ DELETE /users/2 - Should delete user with status 204 (90 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.24 s
Ran all test suites.
```

---

## 💡 Best Practices Implemented

1. **Decoupled Configuration**: Kept base URLs out of test logic by storing them in `config/config.js`.
2. **Explicit Status Assertions**: Every HTTP response explicitly asserts exact status codes according to RFC standards.
3. **Data Integrity Checks**: Validates response structure using `toHaveProperty` and domain validation using `toContain`.
4. **Isolated Test Cases**: Each test block operates independently without cross-test state mutation.
5. **Serial Execution (`--runInBand`)**: Ensures stability and prevents request throttling when interacting with live mock servers.

---

## 👩‍💻 Author

**Harshita Rathore**  
*SDET / Automation Test Engineer*  
- GitHub: [@harshita713lab](https://github.com/harshita713lab)

---

## 📜 License

This project is licensed under the [ISC License](LICENSE).
