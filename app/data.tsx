import React from "react";

// ── Image paths ───────────────────────────────────────────────────────────────
export const IMG_PSR_LOGO = "/psr-logo.svg";
export const IMG_PSR_LOGO_ENG = "/psr-logo-eng.svg";
export const IMG_HERO_BACKGROUND =
  "https://www.figma.com/api/mcp/asset/62ad3cab-12c8-482b-ad27-d3e31d9605c5";
export const IMG_BILLBOARD = "/billboard.png";
export const IMG_FRAME_MC =
  "https://www.figma.com/api/mcp/asset/3628f8b7-9e3a-4c9a-9e6e-36e298e4cb22";
export const IMG_GROUP_STUDIO =
  "https://www.figma.com/api/mcp/asset/3102ebc6-87ee-4e8e-b50f-08516070eba8";
export const IMG_VECTOR_JV =
  "https://www.figma.com/api/mcp/asset/8c745a9b-4ed5-4fca-97f5-fd92174338d0";
export const IMG_VECTOR_PHONE =
  "https://www.figma.com/api/mcp/asset/48276092-9f68-4304-bc0b-db4e3a9bbb76";
export const IMG_RECTANGLE_STRIP =
  "https://www.figma.com/api/mcp/asset/b879437c-ba83-472c-9586-5ee39abdd587";

// ── Tech logos ────────────────────────────────────────────────────────────────
export const techLogos = [
  {
    src: "/Anthropic_Logo_2.webp",
    w: 151,
    h: 17,
    name: "Anthropic",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/fd6eb185-d6c1-4bc7-a422-cf730dd7b209",
    w: 128,
    h: 34,
    name: "Python",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/fd7ec9d6-91bb-49de-8db8-9c6be0f7618f",
    w: 84,
    h: 34,
    name: "Next.js",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/8d49329a-3602-47bd-b3da-016fb0b8765d",
    w: 112,
    h: 34,
    name: "Docker",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/33736b53-b86c-4d4e-8eed-f27224386b68",
    w: 88,
    h: 34,
    name: "Kotlin",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/20425845-e791-4320-ab80-bc2a76fd439b",
    w: 159,
    h: 34,
    name: "Kubernetes",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/c03cadc5-ff38-4fc8-a25e-5e7bfdb75ca3",
    w: 108,
    h: 34,
    name: "Flutter",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/819ca119-29cf-4b9e-a3bc-a96ccdcc2bc9",
    w: 39,
    h: 34,
    name: "LLM",
  },
];

// ── Structure icons (order: MC, Studio, JV) ───────────────────────────────────
export const structureIcons = [IMG_FRAME_MC, IMG_GROUP_STUDIO, IMG_VECTOR_JV];

// ── Competency card images ────────────────────────────────────────────────────
export const competencyImages = [
  { desktop: IMG_HERO_BACKGROUND, mobile: "/comp1m.png" },
  { desktop: "/competences2.png", mobile: "/comp2m.png" },
  { desktop: "/competences3.png", mobile: "/comp3m.png" },
  { desktop: "/competences4.png", mobile: "/comp4m.png" },
];

// ── Projects ──────────────────────────────────────────────────────────────────
export type TabKey = "all" | "client" | "internal";

export interface ProjectData {
  id: string;
  tabKey: "client" | "internal";
  name: { ru: string; en: string };
  category: { ru: string; en: string };
  images: string[];
  description: { ru: React.ReactNode; en: React.ReactNode };
}

export const projects: ProjectData[] = [
  {
    id: "pdd",
    tabKey: "internal",
    name: { ru: "пдд.рф", en: "пдд.рф" },
    category: {
      ru: "ИИ / Образовательные и автомобильные технологии",
      en: "AI / Educational and Automotive Technologies",
    },
    images: [IMG_BILLBOARD],
    description: {
      ru: (
        <>
          Операционная система для подготовки водителей и цифровой стандарт отрасли.
          Рынок автошкол нуждался в сквозной инфраструктуре. Мы отказались от создания
          очередного каталога и спроектировали единую операционную систему на базе
          архитектуры «цифровых двойников».
          <br />
          <br />
          Система формирует цифровой профиль каждого участника: курсанта (с алгоритмом
          прогнозирования успешности сдачи), инструктора и самой автошколы. Руководство
          сетей и государственные органы получают консолидированную панель управления,
          где расписание, экономика и качество обучения тысяч филиалов видны в реальном
          времени.
        </>
      ),
      en: (
        <>
          An operating system for driver training and a digital industry standard. The
          driving school market needed an end-to-end infrastructure. We decided against
          creating yet another directory and designed a unified operating system based on
          &ldquo;digital twin&rdquo; architecture.
          <br />
          <br />
          The system generates a digital profile for every participant: the student (with
          an algorithm to predict exam success), the instructor, and the driving school
          itself. Network management and government agencies receive a consolidated
          dashboard where the schedules, finances, and training quality of thousands of
          branches are visible in real time.
        </>
      ),
    },
  },
  {
    id: "sportsskills",
    tabKey: "client",
    name: { ru: "Спортивные навыки", en: "SportsSkills" },
    category: {
      ru: "ИИ / Образовательные и спортивные технологии",
      en: "AI / Educational and Sports Technologies",
    },
    images: ["/sportsbanner.png"],
    description: {
      ru: (
        <>
          Операционная система для спортивной индустрии и управления компетенциями.
          Спортивные навыки решают эту проблему, заменяя десятки разрозненных таблиц и
          приложений на единый инфраструктурный стандарт. Платформа создает цифровые
          профили спортсменов, тренеров и спортивных учреждений. Спортивные школы и
          федерации получают инструмент для прозрачного управления тренировочным
          процессом, отчетностью и экономикой.
          <br />
          <br />
          Результат: Создана полноценная экосистема. Учреждения получают инструмент
          управления бизнесом, тренеры — систему контроля результатов, а спортсмены —
          оцифрованный актив своих достижений.
        </>
      ),
      en: (
        <>
          An operating system for the sports industry and competency management. Sports
          Skills solves this problem by replacing dozens of disparate spreadsheets and
          applications with a single infrastructure standard. The platform creates digital
          profiles for athletes, coaches, and sports organizations. Sports schools and
          federations gain a tool for transparent management of the training process,
          reporting, and finances.
          <br />
          <br />
          Result: A comprehensive ecosystem has been created. Institutions gain a business
          management tool, coaches receive a performance tracking system, and athletes
          obtain a digital record of their achievements.
        </>
      ),
    },
  },
];
