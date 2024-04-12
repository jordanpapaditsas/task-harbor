# Task Harbor
Task Harbor is a full-stack web application built with Angular, PrimeNG, ASP.NET Core, and SQL Server. It serves as a platform for managing tasks with CRUD operations, user registration, and authentication.

## Table of Contents

- [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Technologies](#Technologies)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)

## Features

- User Registration: Allows users to create new accounts.
- User Login: Provides authentication for registered users.
- Task Management: Allows users to create, read, update, and delete tasks.
- Responsive Design: Supports various screen sizes.
- Secure Authentication: Implements secure authentication using JWT tokens.
  
## Prerequisites

- [Node.js](https://nodejs.org/)
- [SQL Server Management Studio](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [Visual Studio](https://visualstudio.microsoft.com/downloads/)
- [Visual Studio Code](https://code.visualstudio.com/download)



## Technologies

#### *Frontend*
- Angular  
- PrimeNG  
- HTML/CSS  
- TypeScript

#### *Backend*
- ASP.NET Core  
- C#  
- Entity Framework Core  
- SQL Server

## Installation 

1. Clone the repository:
```md
 git clone https://github.com/jordanpapaditsas/task-harbor.git
 ```
2. Navigate to the cloned project directory:
```md
 cd task-harbor
```
3. Install Node.js
4. Install Project Dependencies
```md
npm install
npm install primeng
```
5. Build the project with ng serve
6. Open Visual Studio and navigate to the project's solution folder and open the file with the .sln
7. Run the application using IIS Express or your preferred development server
8. Create a new database in SQL server
9. Update the connection string in appsettings.json with your database credentials
10. Run Entity Framework Core migrations to create the database schema
11. Run API
12. Open your web browser and navigate to http://localhost:4200 to access the Angular frontend


## Contributing
Contributions are welcome! If you'd like to contribute to Task Harbor, please fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License.
