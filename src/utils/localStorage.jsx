
  const admins =[ {
    "id": 0,
    "email": "admin@company.com",
    "password": "123"
  }];
  const employees = [
    {
      "id": 1,
      "email": "employee1@company.com",
      "password": "123",
      "tasks": [
        {
          "date": "2026-06-20",
          "category": "Development",
          "title": "Build Login Page",
          "description": "Create login UI and validation.",
          "completed": false,
          "failed": false,
          "newTask": true,
          "accepted": false
        },
        {
          "date": "2026-06-22",
          "category": "Bug Fix",
          "title": "Fix Navbar",
          "description": "Resolve navbar responsiveness issues.",
          "completed": true,
          "failed": false,
          "newTask": false,
          "accepted": true
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@company.com",
      "password": "123",
      "tasks": [
        {
          "date": "2026-06-21",
          "category": "Design",
          "title": "Dashboard Mockup",
          "description": "Design dashboard screens in Figma.",
          "completed": false,
          "failed": false,
          "newTask": true,
          "accepted": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@company.com",
      "password": "123",
      "tasks": [
        {
          "date": "2026-06-18",
          "category": "Testing",
          "title": "API Testing",
          "description": "Test employee API endpoints.",
          "completed": false,
          "failed": true,
          "newTask": false,
          "accepted": true
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@company.com",
      "password": "123",
      "tasks": [
        {
          "date": "2026-06-25",
          "category": "Development",
          "title": "Task Context",
          "description": "Implement React Context for tasks.",
          "completed": false,
          "failed": false,
          "newTask": true,
          "accepted": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@company.com",
      "password": "123",
      "tasks": [
        {
          "date": "2026-06-23",
          "category": "Documentation",
          "title": "Project Docs",
          "description": "Write setup and usage documentation.",
          "completed": true,
          "failed": false,
          "newTask": false,
          "accepted": true
        }
      ]
    }
  ];

  export const setLocalStorage= ()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admins', JSON.stringify(admins));
  }

  export const getLocalStorage= ()=>{
    localStorage.getItem( JSON.parse(employees));
    localStorage.getItem( JSON.parse(admins));
  }