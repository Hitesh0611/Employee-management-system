localStorage.clear()

const employees = [
    {
        "id": 1,
        "firstName": "rajesh",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Fix website bug",
                "description": "Resolve critical bug affecting checkout process.",
                "date": "2025-02-17",
                "category": "Development",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Improve UI responsiveness",
                "description": "Make the website fully responsive for mobile devices.",
                "date": "2025-02-18",
                "category": "Design",
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ],
        "task_count": {
            "active": 1,
            "new_task": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Amit",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Write API documentation",
                "description": "Document all API endpoints with examples.",
                "date": "2025-02-17",
                "category": "Documentation",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Deploy staging environment",
                "description": "Set up a new staging server for testing new features.",
                "date": "2025-02-18",
                "category": "DevOps",
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ],
        "task_count": {
            "active": 1,
            "new_task": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Vikram",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Optimize database queries",
                "description": "Improve SQL queries to reduce response time.",
                "date": "2025-02-17",
                "category": "Database",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Patch security vulnerabilities",
                "description": "Fix reported security issues in authentication.",
                "date": "2025-02-18",
                "category": "Security",
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ],
        "task_count": {
            "active": 1,
            "new_task": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Suresh",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Refactor legacy code",
                "description": "Improve the maintainability of old code.",
                "date": "2025-02-17",
                "category": "Development",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Create unit tests",
                "description": "Write unit tests for the authentication module.",
                "date": "2025-02-18",
                "category": "Testing",
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ],
        "task_count": {
            "active": 1,
            "new_task": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Arjun",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Improve security measures",
                "description": "Implement better security protocols for the app.",
                "date": "2025-02-17",
                "category": "Security",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Update the user interface",
                "description": "Redesign the user interface to improve user experience.",
                "date": "2025-02-18",
                "category": "UI/UX",
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ],
        "task_count": {
            "active": 1,
            "new_task": 1,
            "completed": 0,
            "failed": 0
        }
    }
];




const admin = [
    {
        "id": 1,
        "email": "admin@me.com",
        "password": "123"
    }
];

export const setLocalstorage = () => {
    if (!localStorage.getItem("employees")) {
        localStorage.setItem("employees", JSON.stringify(employees));
    }
    if (!localStorage.getItem("admin")) {
        localStorage.setItem("admin", JSON.stringify(admin));
    }
};

export const getLocalStorage = () => {
    return {
        employees: JSON.parse(localStorage.getItem("employees")) || [],
        admin: JSON.parse(localStorage.getItem("admin")) || []
    };
};

// export { setLocalstorage, getLocalStorage };
