const admins =[ 
  {
    id: 0,
    name: "Admin",
    email: "admin@company.com",
    password: "123"
  }
];
const employees = [
  {
    id: 1,
    name: "Aarav",
    email: "employee1@company.com",
    password: "123",

    taskCounts: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        title: "Build Login Page",
        description: "Create login UI and validation.",
        date: "2026-06-20",
        priority: "high",
        assignTo: "Aarav",

        active: false,
        newTask: true,
        completed: false,
        failed: false
      },

      {
        title: "Fix Navbar",
        description: "Resolve navbar responsiveness issues.",
        date: "2026-06-22",
        priority: "medium",
        assignTo: "Aarav",

        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 2,
    name: "Vihaan",
    email: "employee2@company.com",
    password: "123",

    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 0
    },

    tasks: [
      {
        title: "Dashboard Mockup",
        description: "Design dashboard screens in Figma.",
        date: "2026-06-21",
        priority: "high",
        assignTo: "Vihaan",

        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 3,
    name: "Kabir",
    email: "employee3@company.com",
    password: "123",

    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 1
    },

    tasks: [
      {
        title: "API Testing",
        description: "Test employee API endpoints.",
        date: "2026-06-18",
        priority: "medium",
        assignTo: "Kabir",

        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    name: "Arjun",
    email: "employee4@company.com",
    password: "123",

    taskCounts: {
      active: 0,
      newTask: 1,
      completed: 0,
      failed: 0
    },

    tasks: [
      {
        title: "Task Context",
        description: "Implement React Context for tasks.",
        date: "2026-06-25",
        priority: "low",
        assignTo: "Arjun",

        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 5,
    name: "Aditya",
    email: "employee5@company.com",
    password: "123",

    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        title: "Project Docs",
        description: "Write setup and usage documentation.",
        date: "2026-06-23",
        priority: "low",
        assignTo: "Aditya",

        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

  export const setLocalStorage= ()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admins', JSON.stringify(admins));
  }

  export const getLocalStorage= ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admins = JSON.parse(localStorage.getItem('admins'));
    return {employees,admins};
  }