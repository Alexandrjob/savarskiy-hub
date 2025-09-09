export const personalInfo = {
  name: "Александр Саварский",
  title: "Backend Developer",
  email: "sshkajob@gmail.com",
  links: [
    { name: "GitHub", url: "https://github.com/Alexandrjob" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/alexandr-savarskiy/" },
    { name: "Telegram", url: "https://t.me/AlexandrHi" },
  ],
};

export const aboutMe = {
    title: "Обо мне",
    description: [
        { text: "Backend-разработчик с опытом коммерческой разработки более 1 года. Специализируюсь на Go и C#. Участвовал в проекте по модернизации высоконагруженной ERP-системы, занимался разработкой и оптимизацией бэкенда. Ищу возможность применить свои навыки для разработки сложных и масштабируемых backend-решений." },
    ]
};

export const experience = {
    title: "Опыт работы",
    items: [
        {
            company: "ООО ФайберТрейд (Future Technologies)",
            companyUrl: "https://future-tech.ru/",
            position: "Программист (C#)",
            period: "Сентябрь 2025 - Настоящее время",
            description: "Разработка и поддержка модульной системы управления производственными процессами на C# .NET Framework, включая интеграцию с внешними системами, разработку UI и бизнес-логики, а также оптимизацию производительности."
        },
        {
            company: "АО НПК Катрен",
            companyUrl: "https://katren.ru/",
            position: "Программист-разработчик",
            period: "Март 2023 — Март 2024",
            description: "Принимал ключевое участие в стратегическом проекте по миграции монолитной ERP-системы с устаревшего стека (Delphi) на современную архитектуру (ASP.NET Core), заложив фундамент для повышения стабильности и упрощения дальнейшей поддержки продукта."
        }
    ]
};

export const skills = {
    title: "Навыки",
    categories: [
        {
            name: "Языки программирования",
            items: ["Go", "C#", "SQL (T-SQL)", "TypeScript"]
        },
        {
            name: "Технологии и фреймворки",
            items: ["ASP.NET Core", "Gin", "Docker", "PostgreSQL", "MS SQL", "Enity Framework", "Kafka", "Redis", "ClickHouse"]
        },
        {
            name: "Инструменты",
            items: ["Git", "Postman", "Swagger"]
        },
        {
            name: "Подходы",
            items: ["REST API", "CRUD", "Микросервисы", "SOLID"]
        }
    ]
};

export const projects = {
    title: "Проекты",
    items: [
        {
            id: "warehouse-test",
            name: "Система Управления Складом",
            description: "Бэкенд-сервис для автоматизации складского учета на .NET.",
            stack: [".NET", "ASP.NET Core", "PostgreSQL", "Docker"],
            liveUrl: "https://github.com/Alexandrjob/warehouse_test",
            repoUrl: "https://github.com/Alexandrjob/warehouse_test"
        },
        {
            id: "good-api-test",
            name: "Микросервис Каталога Товаров",
            description: "Микросервис каталога товаров с асинхронным обновлением данных на Go.",
            stack: ["Go", "Gin", "PostgreSQL", "Redis", "NATS", "ClickHouse"],
            liveUrl: "https://github.com/google-gemini/gemini-cli", // Заглушка
            repoUrl: "https://github.com/google-gemini/gemini-cli"
        },
        {
            id: "bank-api-go",
            name: "Банковский API",
            description: "Бэкенд-сервис для проведения банковских транзакций на Go.",
            stack: ["Go", "Gin", "Docker", "PostgreSQL", "Swaggo"],
            liveUrl: "https://github.com/google-gemini/gemini-cli", // Заглушка
            repoUrl: "https://github.com/google-gemini/gemini-cli"
        },
        {
            id: "kafka-go",
            name: "Обработчик Потоков Kafka",
            description: "Надежный консьюмер Kafka для потоковой обработки данных на Go.",
            stack: ["Go", "Kafka", "Sarama", "Docker"],
            liveUrl: "https://github.com/google-gemini/gemini-cli", // Заглушка
            repoUrl: "https://github.com/google-gemini/gemini-cli"
        }
    ]
};

