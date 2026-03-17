import React from "react";

// ── Image paths ───────────────────────────────────────────────────────────────
export const IMG_PSR_LOGO = "/psr-logo.svg";
export const IMG_PSR_LOGO_ENG = "/psr-logo-eng.svg";
export const IMG_HERO_BACKGROUND =
  "https://www.figma.com/api/mcp/asset/62ad3cab-12c8-482b-ad27-d3e31d9605c5";
export const IMG_BILLBOARD = "/billboard.png";
export const IMG_FRAME_MC = "/frame2087327238.svg";
export const IMG_GROUP_STUDIO = "/group.svg";
export const IMG_VECTOR_JV = "/vector.svg";
export const IMG_VECTOR_PHONE = "/vector11.svg";
export const IMG_RECTANGLE_STRIP =
  "https://www.figma.com/api/mcp/asset/b879437c-ba83-472c-9586-5ee39abdd587";

// ── Tech logos ────────────────────────────────────────────────────────────────
export const techLogos = [
  { src: "/Python_logo_and_wordmark 2.png", w: 96,  h: 26, name: "Python" },
  { src: "/Typescript 2.png",               w: 26,  h: 26, name: "TypeScript" },
  { src: "/React_Logo_SVG 2.png",           w: 25,  h: 26, name: "React" },
  { src: "/Next.js_wordmark 2.png",         w: 63,  h: 26, name: "Next.js" },
  { src: "/Tailwind_CSS_logo_with_dark_text 2.png", w: 129, h: 26, name: "Tailwind" },
  { src: "/go-logo-white 2.png",            w: 40,  h: 26, name: "Go" },
  { src: "/Docker_Logo 2.png",              w: 84,  h: 26, name: "Docker" },
  { src: "/Kubernetes_logo 2.png",          w: 119, h: 26, name: "Kubernetes" },
  { src: "/Postgresql_elephant 2.png",      w: 23,  h: 26, name: "PostgreSQL" },
  { src: "/Swift_logo 2.png",               w: 63,  h: 26, name: "Swift" },
  { src: "/Kotlin_logo_(2021-present) 2.png", w: 66, h: 26, name: "Kotlin" },
  { src: "/LLM-logo 2.png",                w: 29,  h: 26, name: "LLM" },
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
