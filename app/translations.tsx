import React from "react";

export type Lang = "ru" | "en";

interface Translations {
  menuItems: { label: string; sectionId: string }[];
  heroTitle: React.ReactNode;
  heroSubtitle: React.ReactNode;
  heroCta: string;
  missionTitle: string;
  missionBody: React.ReactNode;
  missionApproachTitle: string;
  missionApproachItems: string[];
  structureTitle: string;
  structureItems: { title: string; text: string }[];
  circleLabels: [React.ReactNode, React.ReactNode, React.ReactNode];
  competenciesTitle: string;
  competencyCards: { title: string; desc: string }[];
  projectsTitle: string;
  projectsSubtitle: string;
  projectTabs: { key: "all" | "client" | "internal"; label: string }[];
  nextProject: string;
  formTitle: string;
  formName: string;
  formCompany: string;
  formCompanyPlaceholder: string;
  formInquiry: string;
  formMessagePlaceholder: string;
  formSubmit: string;
  formSubmitting: string;
  formErrorEmail: string;
  formErrorServer: string;
  successTitle: string;
  successDesc: string;
  successClose: string;
  legalTitle: string;
  legalText: string;
  companyMC: { name: string; inn: string; address: string };
  companySDB: { name: string; inn: string; address: string };
  linkOffer: string;
  linkPrivacy: string;
  copyright: string;
  prevImage: string;
  nextImage: string;
}

export const t: Record<Lang, Translations> = {
  ru: {
    menuItems: [
      { label: "Миссия", sectionId: "mission" },
      { label: "Структура", sectionId: "structure" },
      { label: "Компетенции", sectionId: "competencies" },
      { label: "Проекты", sectionId: "projects" },
    ],
    heroTitle: <>Развиваем<br /><span style={{whiteSpace:"nowrap"}}>цифровые продукты</span></>,
    heroSubtitle: (
      <>
        Мы упаковываем сложные смыслы в премиальный<br className="mobile-br" /> дизайн,
        разрабатываем отраслевые операционные<br className="mobile-br" /> системы
        и выстраиваем каналы продаж для<br className="mobile-br" /> стартапов,
        крупного бизнеса и государства.
      </>
    ),
    heroCta: "Обсудить задачу",
    missionTitle: "Миссия",
    missionBody: (
      <>
        Объединяя фундаментальные знания<br className="mobile-br" /> в бизнесе,
        маркетинге и продукте создавать<br className="mobile-br" /> цифровые решения
        для решения возникающих<br className="mobile-br" /> глобальных вызовов.
      </>
    ),
    missionApproachTitle: "Подход ПСР",
    missionApproachItems: [
      "Рассчитываем экономику, оцениваем риски и проектируем бизнес-модель до написания первой строчки кода.",
      "Проектируем продукт так, чтобы он был масштабируемым, защищенным от конкурентов и готовым к продаже/инвестициям.",
      "Проектируем архитектуру, способную стать единым цифровым стандартом для целых индустрий.",
    ],
    structureTitle: "Структура группы",
    structureItems: [
      {
        title: "Управляющая компания",
        text: "Стратегическое планирование, управление активами, структурирование и упаковка бизнеса для привлечения капитала, сопровождение сделок по покупке и продаже компаний.",
      },
      {
        title: "Продуктовая студия",
        text: "Наш центр дизайна, разработки и дистрибуции. Решаем сложные задачи для внешних заказчиков и запускаем внутренние продукты группы.",
      },
      {
        title: "Совместные предприятия",
        text: "Технологические компании, созданные внутри группы в партнерстве с лидерами рынка.",
      },
    ],
    circleLabels: [
      <>Совместные<br />предприятия</>,
      <>Продуктовая<br />студия</>,
      <>Управляющая<br />компания</>,
    ],
    competenciesTitle: "Компетенции",
    competencyCards: [
      {
        title: "Брендинг и визуальная упаковка",
        desc: "Создаем не просто интерфейсы, а полноценный визуальный код.\nОт архитектуры бренда до премиальных сайтов и среды пользователя. Переводим тяжелую техническую логику в форму, понятную бизнесу и людям.",
      },
      {
        title: "Инженерия и искусственный интеллект",
        desc: "Проектируем системы, соответствующие государственным стандартам безопасности и готовые к интеграции с передовыми сервисами. Внедряем нейросети для автоматизации корпоративных процессов и снижения издержек.",
      },
      {
        title: "Дистрибуция и продажи",
        desc: "Выстраиваем стратегии запуска продукта на рынке, проектируем системы привлечения клиентов и запускаем рекламу, ориентированную исключительно на финансовый результат.",
      },
      {
        title: "Построение бизнеса",
        desc: "Подготавливаем проекты к инвестиционным раундам, проводим анализ рынка, собираем финансовые модели и помогаем выстраивать долгосрочные партнерства с государственными и корпоративными структурами.",
      },
    ],
    projectsTitle: "Реализованные проекты",
    projectsSubtitle: "Отраслевые операционные системы и клиентские решения",
    projectTabs: [
      { key: "all", label: "Все проекты" },
      { key: "client", label: "Работа с клиентами" },
      { key: "internal", label: "Внутренние стартапы" },
    ],
    nextProject: "Следующий проект",
    formTitle: "Запрос на проект",
    formName: "Имя",
    formCompany: "Компания",
    formCompanyPlaceholder: "Название компании",
    formInquiry: "Запрос",
    formMessagePlaceholder: "Текст сообщения",
    formSubmit: "Отправить запрос",
    formSubmitting: "Отправка...",
    formErrorEmail: "Укажите email",
    formErrorServer: "Ошибка отправки. Попробуйте ещё раз.",
    successTitle: "Запрос успешно отправлен",
    successDesc:
      "Мы получили ваш запрос и уже передали его команде. Свяжемся с вами в ближайшее время, чтобы обсудить детали проекта.",
    successClose: "Закрыть",
    legalTitle: "Правовая информация",
    legalText:
      "Порог входа в проект — от 2 168 000 рублей. Это стоимость месячного цикла работы над цифровым продуктом.",
    companyMC: {
      name: 'Управляющая компания ООО "УК ПСР"',
      inn: "7736362669",
      address: "123557, город Москва, Электрический пер, д. 3/10 стр. 1, помещ. 3/5",
    },
    companySDB: {
      name: 'Разработчик цифровых продуктов ООО "ПСР"',
      inn: "7704463921",
      address: "123112, город Москва, Пресненская наб, д. 8 стр. 1, помещ. 492с",
    },
    linkOffer: "Оферта",
    linkPrivacy: "Политика обработки персональных данных",
    copyright: "© 2018-2026 ПСР. Все права защищены.",
    prevImage: "Предыдущее изображение",
    nextImage: "Следующее изображение",
  },

  en: {
    menuItems: [
      { label: "Mission", sectionId: "mission" },
      { label: "Structure", sectionId: "structure" },
      { label: "Expertise", sectionId: "competencies" },
      { label: "Projects", sectionId: "projects" },
    ],
    heroTitle: <>Creating<br /><span style={{whiteSpace:"nowrap"}}>digital products</span></>,
    heroSubtitle: (
      <>
        We package complex concepts into premium designs, develop industry-specific
        operating systems, and build distribution channels for startups, large
        enterprises, and government agencies.
      </>
    ),
    heroCta: "Discuss the problem",
    missionTitle: "Mission",
    missionBody:
      "By combining fundamental expertise in business, marketing, and product, we create digital solutions to address emerging global challenges.",
    missionApproachTitle: "PSR Approach",
    missionApproachItems: [
      "We analyze the economics, assess risks, and design the business model before writing a single line of code.",
      "We design the product to be scalable, protected from competitors, and ready for sale or investment.",
      "We design an architecture capable of becoming a unified digital standard for entire industries.",
    ],
    structureTitle: "Group Structure",
    structureItems: [
      {
        title: "Management Company",
        text: "Strategic planning, asset management, business structuring and packaging to attract capital, and support for company acquisition and sale transactions.",
      },
      {
        title: "Product Studio",
        text: "Our center for design, development, and distribution. We solve complex challenges for external clients and launch the group's internal products.",
      },
      {
        title: "Joint Ventures",
        text: "Technology companies created within the group in partnership with market leaders.",
      },
    ],
    circleLabels: [
      <>Joint<br />Ventures</>,
      <>Product<br />Studio</>,
      <>Management<br />Company</>,
    ],
    competenciesTitle: "Expertise",
    competencyCards: [
      {
        title: "Branding and Visual Design",
        desc: "We create not just interfaces, but a full-fledged visual language. From brand architecture to premium websites and user environments. We translate complex technical logic into a form that is understandable to both businesses and people.",
      },
      {
        title: "Engineering and Artificial Intelligence",
        desc: "We design systems that comply with government security standards and are ready for integration with cutting-edge services. We implement neural networks to automate corporate processes and reduce costs.",
      },
      {
        title: "Distribution and Sales",
        desc: "We build product launch strategies, design client acquisition systems, and run advertising campaigns focused exclusively on financial results.",
      },
      {
        title: "Business Development",
        desc: "We prepare projects for investment rounds, conduct market analysis, build financial models, and help establish long-term partnerships with government and corporate structures.",
      },
    ],
    projectsTitle: "Projects",
    projectsSubtitle: "Industry-specific operating systems and client solutions.",
    projectTabs: [
      { key: "all", label: "All projects" },
      { key: "client", label: "Client work" },
      { key: "internal", label: "Internal startups" },
    ],
    nextProject: "Next project",
    formTitle: "Contact Us",
    formName: "Name",
    formCompany: "Company",
    formCompanyPlaceholder: "Company name",
    formInquiry: "Inquiry",
    formMessagePlaceholder: "Message",
    formSubmit: "Send request",
    formSubmitting: "Sending...",
    formErrorEmail: "Email is required",
    formErrorServer: "Failed to send. Please try again.",
    successTitle: "Request sent successfully",
    successDesc:
      "We have received your request and passed it to our team. We will get in touch with you shortly to discuss the project details.",
    successClose: "Close",
    legalTitle: "Legal information",
    legalText:
      "The minimum investment threshold for the project is 2,168,000 rubles. This is the cost of a monthly cycle of work on a digital product.",
    companyMC: {
      name: 'LLC "MC SDB"',
      inn: "7736362669",
      address: "123557, Moscow, Elektrichesky Lane, 3/10, bldg. 1, apt. 3/5",
    },
    companySDB: {
      name: 'LLC "SDB"',
      inn: "7704463921",
      address: "123112, Moscow, Presnenskaya Embankment, 8, bldg. 1, apt. 492c",
    },
    linkOffer: "Offer",
    linkPrivacy: "Privacy Policy",
    copyright: "© 2018-2026 PSR. All rights reserved.",
    prevImage: "Previous image",
    nextImage: "Next image",
  },
};
