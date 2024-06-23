# .payroll by MoneyHQ

## Overview

.payroll by MoneyHQ is a simple and intuitive payroll software designed to assist businesses that pay employees monthly in managing their payroll and compliance requirements, with a current focus on companies in Nigeria.

### Problem

According to the World Bank, small businesses in developing countries face significant barriers to proper financial management due to limited knowledge and resources.

Also, in a 2020 report titled "Financing SMEs and Entrepreneurs", the OECD noted that accounting and financial management are critical pain points for small and medium enterprises (SMEs) in developing nations

.payroll by MoneyHQ is the first of a suite of products that seeks to address this pain for businesses and their owners.

### User Personas

#### Manuela, Founder

Manuala is a the founder of ManIT, an architecture & interior design company in Lagos, NG.

Revenue is between $50k - $150k and she has 11 full time employees. She’s also a cofounder at a mental health tech startup with her friend, Michael. They just raised capital and have a team of 29 full time employees and 6 contractors (4 local, 2 from Fiverr)

- Background: Owns a small business in Nigeria; limited accounting knowledge.
- Goal: Simplify payroll management, ensure timely remittance of taxes and general compliance with other regulatory obligations.
- Pain Points: Finds accounting complex and time-consuming.
- Technology Comfort Level: Basic; uses technology primarily for business management.
- Behavior: Seeks cost-effective, user-friendly solutions.

#### Travis, Accountant

Travis is a chartered accountant with over 5 years work experience. He has spent the last 3 years at FroootyLivin’ - a brand with branches all over southern Nigeria and he spends 18 hours every month computing payroll, pension schedules for Frootylivin’

- Background: Professional accountant working with SMEs. Does some payroll and accounting gigs.
- Goals: Needs tools to automate repetitive tasks.
- Pain Points: Finds low-level accounting tasks tedious, boring and repetitive, struggles with tax compliance. Needs tools that simplify the tasks.
- Technology Comfort Level: Proficient with Microsoft Suite and two other accounting software.
- Behavior: Prefers software that reduces manual work, export results in Excel and perhaps integrates with existing workflows and tools.

### Features

#### High-Level

- **Signup** - User can create an account and register their company
- **Login** - User can log into their account using their credentials.
- **Home/ Dashboard** - View dashboard summarising recent activities and upcoming payroll dates.
- **Review Employee Data** - User can review and adjust employee data, including salaries and deductions.
- **Run Payroll** - The user can initiate the payroll process by selecting a pay period
- **Confirm and Submit Payroll** - User can confirm payroll details and submit for processing.
- **Payroll Processing** - System calculates salaries, taxes, deductions, and generates payslips
- **View Payroll Reports** - Users can view payroll, pension schedules, and tax schedules in various formats.
- **Payroll History** - View a list of past payroll runs with details such as date, total amount, & status.
- **Employee Management** - Manage employee information, including adding, editing, or offboarding employees.
- **Add/Invite/Upload Employees** - Add new employees individually or in bulk through forms or file uploads.

## Implementation

### Tech Stack

#### Frontend

- React
- JavaScript
- SASS
- Axios
- React-router-dom
- React-spinners
- React Bootstrap

#### Backend

- Node.js / Express
- Javascript
- Database - MySQL
- Dotenv
- CORS
- UUID

### APIs

List any external sources of data that will be used in your app.

### Sitemap

- **Onboarding** - Guides new users through the initial setup of the payroll system, including company information, tax settings, and employee data import.
- **Home/Dashboard** - Displays an overview of key metrics and recent activities.
- **Payroll** - Manage and view payroll information, process payroll, and view detailed history of past payrolls.
- **Employees** - View and manage employee details (adding new employees and updating existing employees profiles).
- **Reports** - Generate and view payroll-related reports, such as tax reports and payment summaries.

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data
- [Proposed Database Structure 🔗](https://docs.google.com/spreadsheets/d/1Ptr7Bds45jA3-GLStM2kNGnWzbIPpoXiEf4Qrm5CKPw/edit?usp=sharing)

- **Users** - Stores user credentials and roles for accessing the system
- **Company** - Stores information about the company itself
- **Employees** - Captures personal and employment details of employees
- **Departments** - Defines different departments within the company
- **Positions** - This table stores job positions within the company.
- **Pay Periods** - Defines different payroll periods (in this case, months).
- **Deduction Types** - Lists various types of deductions applicable to employees
- **Pension Rates** - Stores pension rate information
- **NG PAYE Rates 2024** - Defines tax brackets and corresponding rates for PAYE
- **Pension Fund Administrators** - Stores information about different pension fund administrators
- **Pension** - Manages pension contributions and deductions.
- **PAYE** - Manages Pay As You Earn tax details.
- **Deductions** - Manages all types of deductions from employees' salaries.
- **Loans and Advances** - Manages loans and advances given to employees.
- **Loan Repayment** - Tracks repayments made towards loans and advances.
- **Bonuses** - Manages bonuses awarded to employees.
- **States** - Captures state names and information
- **Tax Authorities** - Stores information about tax authorities in different states
- **Payroll** - Records payroll transactions for employees


### Endpoints

- POST: /api/onboarding

#### Employees 
- GET: /api/employees
- POST: /api/employees
- PUT: /api/employees/:id
- PATCH: /employees/:id/archive
- POST: /api/employees/upload (Nice to have - Bulk Upload)

#### Payroll & Payslip
- GET: /api/payroll/history
- POST: /api/payroll/run
######
- GET: /api/payslip/:id
- GET: /api/payslip/download/:id

### Auth

My project will require login or a user profile functionality but this will be a nice to have.

## Roadmap

0. Think of the visual design of the product and draw wireframe
1. Set up GitHub repositories for frontend and backend
2. Set up project structure for React frontend
3. Set up project structure for Node/Express backend
4. Set up MySQL database and connect to backend
5. Define, setup and gather seed data for database
6. Implement read employee endpoint (/api/employees)
7. Implement create employee endpoint (/api/employees)
8. Implement update employee endpoint (/api/employees/:id)
9. Create employee list page (frontend)
10. Create employee detail page (frontend)
11. Implement add employee functionality (frontend)
12. Implement edit employee functionality (frontend)
13. Create payroll run page with step-by-step process (frontend)
14. Implement run payroll endpoint
15. Implement payroll history endpoint
16. Create payroll history page (frontend)
17. Generate payslip endpoint
18. Download payslip endpoint
19. Create payslip generation page (frontend)
20. Create modal to download payslips (frontend)


## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.
- Bulk Upload
- Archive Employees
- User Signup, login, profile
