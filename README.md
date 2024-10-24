# Cypress API Testing Suite

## 🚀 Overview

This repository contains a comprehensive API test suite using **Cypress**. The suite is designed to test common API functionalities such as GET, POST, PUT, DELETE requests, and includes the usage of **fixtures** for managing test data. It can be easily integrated into a CI/CD pipeline for automated testing.

## 📦 Features

- **GET Requests**: Test retrieval of data from endpoints.
- **POST Requests**: Validate creation of new records using fixture data.
- **PUT Requests**: Test the update of existing data with fixture data.
- **DELETE Requests**: Test the deletion of records from the API.
- **Negative Testing**: Ensure proper error handling for invalid inputs.

## 🛠️ Technologies Used

- **Cypress v13.15.0**
- **JavaScript (ES6+)**
- **Fixtures** for managing test data
- **Custom Cypress Commands**

## 🔧 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v7 or higher)
- **Cypress** (v13.15.0)

### 🏗️ Running the Tests

To execute the tests, run the following command in your terminal:

```bash
npx cypress open
```

This will launch the Cypress Test Runner. Select the `api.cy.js` file to run the tests in an interactive mode.

To run tests in headless mode, use:

```bash
npx cypress run
```

## 📂 Folder Structure

```
.
├── cypress
│   ├── e2e
│   │   └── api.cy.js           # Main API test suite
│   ├── fixtures
│   │   └── data.json             # JSON file containing test data
│   ├── support
│   │   ├── commands.js           # Custom Cypress commands for API testing
│   │   └── e2e.js                # Cypress support file
├── cypress.config.js             # Cypress configuration
└── README.md                     # Project documentation
```

## 📊 Test Cases

1. **GET Request**: Retrieve a list of users.
2. **POST Request**: Create a new post with fixture data.
3. **GET (Single Post)**: Retrieve a specific post by ID.
4. **PUT Request**: Update an existing post with fixture data.
5. **DELETE Request**: Delete a specific post by ID.
6. **Negative Test**: Validate proper error handling for invalid inputs.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy testing with Cypress! 🎉
