import { stringify } from "postcss";

const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "failed": false,
          "title": "Complete Project Report",
          "description": "Prepare the final project report for submission.",
          "date": "2024-11-16",
          "category": "Documentation"
        },
        {
          "active": false,
          "newTask": false,
          "failed": true,
          "title": "Update Database Schema",
          "description": "Revise the schema for the customer database.",
          "date": "2024-11-12",
          "category": "Database"
        },
        {
          "active": true,
          "newTask": false,
          "failed": false,
          "title": "Test API Endpoints",
          "description": "Perform tests on all API endpoints for the e-commerce application.",
          "date": "2024-11-18",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "failed": false,
          "title": "Design Landing Page",
          "description": "Create a responsive landing page for the product launch.",
          "date": "2024-11-17",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": false,
          "failed": false,
          "title": "Debug User Login",
          "description": "Fix issues in the user login module.",
          "date": "2024-11-15",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "failed": false,
          "title": "Update Inventory",
          "description": "Ensure all inventory items are up to date in the system.",
          "date": "2024-11-14",
          "category": "Operations"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "failed": true,
          "title": "Prepare Presentation",
          "description": "Create slides for the upcoming client meeting.",
          "date": "2024-11-15",
          "category": "Presentation"
        },
        {
          "active": true,
          "newTask": true,
          "failed": false,
          "title": "Conduct Code Review",
          "description": "Review the latest commits for potential issues.",
          "date": "2024-11-16",
          "category": "Code Review"
        },
        {
          "active": true,
          "newTask": false,
          "failed": false,
          "title": "Fix Styling Issues",
          "description": "Resolve CSS bugs reported on the company website.",
          "date": "2024-11-18",
          "category": "Design"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "failed": false,
          "title": "Write Unit Tests",
          "description": "Add unit tests for the payment module.",
          "date": "2024-11-19",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "failed": true,
          "title": "Optimize Queries",
          "description": "Improve query performance in the analytics dashboard.",
          "date": "2024-11-13",
          "category": "Database"
        },
        {
          "active": true,
          "newTask": true,
          "failed": false,
          "title": "Plan Sprint Tasks",
          "description": "Organize tasks for the next sprint cycle.",
          "date": "2024-11-20",
          "category": "Management"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "failed": false,
          "title": "Analyze Feedback",
          "description": "Review feedback from users and prepare a report.",
          "date": "2024-11-17",
          "category": "Analysis"
        },
        {
          "active": true,
          "newTask": true,
          "failed": false,
          "title": "Refactor Code",
          "description": "Refactor old code to improve maintainability.",
          "date": "2024-11-15",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "failed": true,
          "title": "Prepare Budget Plan",
          "description": "Draft a budget for the next quarter.",
          "date": "2024-11-12",
          "category": "Finance"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin))
  }


  export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
  }