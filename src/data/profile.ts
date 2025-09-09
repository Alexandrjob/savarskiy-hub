export interface Stat {
  value: string;
  label: string;
  animation: 'counter';
}

export interface SocialLink {
  url: string;
  icon: 'linkedin' | 'github';
}

export interface ProfileData {
  name: string;
  email: string;
  bio: string;
  stats: Stat[];
  socials: {
    linkedin: string;
    github: string;
  };
  cta: {
    telegram: string;
    resumeUrl: string;
  };
}

export const profileData: ProfileData = {
  name: 'Александр Саварский',
  email: 'sshkajob@gmail.com',
  bio: 'Имею опыт работы в команде, быстро обучаюсь и умею работать в сжатые сроки. Обладаю опытом в разработке корпоративных ERP-систем и интеграции с внешними сервисами. Увлечен решением сложных задач и постоянным обучением новым технологиям.',
  stats: [
    { value: '1.4+', label: 'года опыта', animation: 'counter' },
    { value: '10+', label: 'личных проекта', animation: 'counter' },
    { value: '20+', label: 'технологий в стеке', animation: 'counter' },
  ],
  socials: {
    linkedin: 'https://www.linkedin.com/in/alexandr-savarskiy',
    github: 'https://github.com/Alexandrjob',
  },
  cta: {
    telegram: 'https://t.me/AlexandrHi',
    resumeUrl: '/alexandr-savarskiy-resume.pdf',
  },
};
