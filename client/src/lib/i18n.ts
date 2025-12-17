import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        process: "Process",
        pricing: "Pricing",
        reviews: "Reviews",
        contact: "Contact",
        book: "Book Trial"
      },
      hero: {
        title: "Online Private English Lessons — Personal, Effective, Result-Oriented",
        subtitle: "Master English with a certified TESOL tutor. Personalized online lessons tailored to your goals.",
        experience: "Teaching since 2020",
        cta_trial: "Book a Free Trial Lesson",
        cta_contact: "Contact via Telegram"
      },
      about: {
        title: "About Your Tutor",
        intro: "Hello! I am a certified English tutor dedicated to helping you achieve fluency.",
        desc1: "With a degree in Linguistics and a TESOL certification, I have been teaching students of all ages since 2020.",
        desc2: "I specialize in creating individual learning plans that work for YOU, whether you are a complete beginner or looking to polish your advanced skills.",
        stat1: "Years Experience",
        stat2: "Students Taught",
        stat3: "Lessons Given"
      },
      process: {
        title: "How Online Lessons Work",
        step1_title: "Connect Online",
        step1_desc: "We meet on Zoom or Google Meet from the comfort of your home.",
        step2_title: "Interactive Materials",
        step2_desc: "Engaging lessons using modern digital tools and resources.",
        step3_title: "Speaking Practice",
        step3_desc: "Focus on real communication and confidence building.",
        step4_title: "Track Progress",
        step4_desc: "Regular feedback and homework to ensure steady improvement."
      },
      services: {
        title: "Services & Pricing",
        price: "2000 RUB",
        per_lesson: "per lesson",
        duration: "50 minutes",
        includes: [
          "Personalized curriculum",
          "Interactive exercises",
          "Speaking focus",
          "Homework checking",
          "Flexible scheduling"
        ],
        trial_title: "Free Trial Lesson",
        trial_desc: "Get to know my teaching style and discuss your goals. Duration varies based on your level."
      },
      audience: {
        title: "Who These Lessons Are For",
        child: "Children (10+)",
        teen: "Teenagers",
        adult: "Adults",
        levels: "From Beginner (A0) to Advanced"
      },
      certifications: {
        title: "Education & Certifications",
        diploma: "Degree in English Linguistics",
        tesol: "TESOL Certification"
      },
      reviews: {
        title: "Student Reviews",
        leave_review: "Leave a Review",
        placeholder_1: "Great tutor! My son loves the lessons.",
        placeholder_2: "I finally feel confident speaking English at work.",
        form: {
          name: "Your Name (Optional)",
          type: "Student Type",
          type_adult: "Adult",
          type_parent: "Parent of Child",
          rating: "Rating",
          review: "Your Review",
          submit: "Submit Review"
        }
      },
      whyme: {
        title: "Why Choose Me",
        reasons: [
          { title: "Online Convenience", desc: "Learn from anywhere in the world." },
          { title: "Individual Approach", desc: "Lessons tailored specifically to your needs." },
          { title: "Clear Structure", desc: "Systematic approach to grammar and vocabulary." },
          { title: "Real Speaking", desc: "Maximum student talking time." }
        ]
      },
      contact: {
        title: "Ready to Start?",
        subtitle: "Message me on Telegram to book your free online trial lesson.",
        button: "Message on Telegram"
      },
      footer: {
        role: "Online Private English Tutor",
        copyright: "© 2024. All rights reserved."
      }
    }
  },
  ru: {
    translation: {
      nav: {
        about: "Обо мне",
        process: "Как проходит",
        pricing: "Стоимость",
        reviews: "Отзывы",
        contact: "Контакты",
        book: "Пробный урок"
      },
      hero: {
        title: "Индивидуальные уроки английского — Лично, Эффективно, На Результат",
        subtitle: "Выучите английский с сертифицированным преподавателем (TESOL). Персональные онлайн-уроки под ваши цели.",
        experience: "Опыт с 2020 года",
        cta_trial: "Записаться на бесплатный урок",
        cta_contact: "Связаться в Telegram"
      },
      about: {
        title: "О преподавателе",
        intro: "Привет! Я сертифицированный репетитор английского, и я помогу вам заговорить свободно.",
        desc1: "Имею диплом лингвиста и сертификат TESOL. Преподаю детям и взрослым с 2020 года.",
        desc2: "Я разрабатываю индивидуальные планы обучения, которые подходят именно ВАМ, будь вы новичок или продвинутый ученик.",
        stat1: "Лет опыта",
        stat2: "Учеников",
        stat3: "Проведено уроков"
      },
      process: {
        title: "Как проходят уроки",
        step1_title: "Онлайн формат",
        step1_desc: "Занимаемся в Zoom или Google Meet в удобном для вас месте.",
        step2_title: "Интерактивные материалы",
        step2_desc: "Увлекательные уроки с использованием современных цифровых ресурсов.",
        step3_title: "Разговорная практика",
        step3_desc: "Упор на живое общение и преодоление языкового барьера.",
        step4_title: "Прогресс и ДЗ",
        step4_desc: "Регулярная обратная связь и проверка домашних заданий."
      },
      services: {
        title: "Услуги и Стоимость",
        price: "2000 ₽",
        per_lesson: "за урок",
        duration: "50 минут",
        includes: [
          "Персональная программа",
          "Интерактивные упражнения",
          "Упор на говорение",
          "Проверка домашних заданий",
          "Гибкое расписание"
        ],
        trial_title: "Бесплатный пробный урок",
        trial_desc: "Познакомимся, определим уровень и обсудим цели. Длительность зависит от уровня."
      },
      audience: {
        title: "Для кого эти уроки",
        child: "Дети (10+)",
        teen: "Подростки",
        adult: "Взрослые",
        levels: "От нуля (A0) до продвинутого"
      },
      certifications: {
        title: "Образование и сертификаты",
        diploma: "Диплом лингвиста",
        tesol: "Сертификат TESOL"
      },
      reviews: {
        title: "Отзывы учеников",
        leave_review: "Оставить отзыв",
        placeholder_1: "Отличный репетитор! Сыну очень нравятся уроки.",
        placeholder_2: "Наконец-то чувствую уверенность, говоря на английском на работе.",
        form: {
          name: "Ваше имя (необязательно)",
          type: "Кто вы",
          type_adult: "Взрослый ученик",
          type_parent: "Родитель ученика",
          rating: "Оценка",
          review: "Ваш отзыв",
          submit: "Отправить отзыв"
        }
      },
      whyme: {
        title: "Почему выбирают меня",
        reasons: [
          { title: "Удобство онлайн", desc: "Занимайтесь из любой точки мира." },
          { title: "Индивидуальный подход", desc: "Уроки создаются специально под ваши нужды." },
          { title: "Четкая структура", desc: "Системный подход к грамматике и лексике." },
          { title: "Реальное общение", desc: "Максимум разговорной практики на уроке." }
        ]
      },
      contact: {
        title: "Готовы начать?",
        subtitle: "Напишите мне в Telegram, чтобы записаться на бесплатный пробный урок.",
        button: "Написать в Telegram"
      },
      footer: {
        role: "Частный репетитор английского онлайн",
        copyright: "© 2024. Все права защищены."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
