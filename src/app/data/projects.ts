export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  detailImages: string[];
  color: string;
  summary: string;
  period: string;
  role: string;
  stack: string[];
  highlights: string[];
  overview: string;
  liveUrl?: string;
  githubUrl?: string;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  // Piction
  {
    slug: "piction",
    title: "Piction",
    category: "Full Stack Development",
    image: new URL("../../assets/images/piction_poster.png", import.meta.url).href,
    detailImages: [
      new URL("../../assets/images/piction_detail1.jpg", import.meta.url).href,
      new URL("../../assets/images/piction_detail2.png", import.meta.url).href,
      new URL("../../assets/images/piction_detail3.png", import.meta.url).href,
    ],
    color: "from-blue-500/20 to-indigo-500/20",
    summary: "描いた絵をオークションに出品できるサイト",
    period: "2024.06 - 2025.3",
    role: "チームリーダー、デザイン、フロントエンド",
    stack: ["JavaScript", "Flask", "SQlite", "Azure", "Figma", "HTML", "CSS"],
    liveUrl: "https://piction.yamamotoy.com",
    githubUrl: "https://github.com/tontontoto/Piction",
    highlights: [
      "絵を描く機能",
      "リアルタイムでオークション終了＆反映機能",
      "アイコントリミング機能"
    ],
    overview:
      "3分以内に描いた絵をオークションに出品ができます。自動的に出品時金額が決まる方式で、ゲーム性もあり、500円から2円/秒ずつ減額することで入札率と手を込めた絵の価値を上げています。"
  },
  // 匿名掲示板
  {
    slug: "bulletin-board",
    title: "匿名掲示板",
    category: "個人開発",
    image: new URL("../../assets/images/bulletin-board_thumbnail.png", import.meta.url).href,
    detailImages: [
      new URL("../../assets/images/bulletin-board_detail1.png", import.meta.url).href,
      new URL("../../assets/images/bulletin-board_detail2.png", import.meta.url).href,
      new URL("../../assets/images/bulletin-board_detail3.png", import.meta.url).href,
    ],
    color: "from-blue-500/20 to-indigo-500/20",
    summary: "匿名で掲示板を作成できるサイト",
    period: "2025.06 - 2025.7",
    role: "個人開発",
    stack: ["Next.js", "Laravel", "MySQL", "Railway"],
    liveUrl: "https://bulletin-board-tonton.netlify.app/",
    githubUrl: "https://github.com/tontontoto/bulletin-board.git",
    highlights: [
      "ログイン機能",
      "匿名で掲示板を作成できる",
      "掲示板に対して返信を行える"
    ],
    overview:
      "3分以内に描いた絵をオークションに出品ができます。自動的に出品時金額が決まる方式で、ゲーム性もあり、500円から2円/秒ずつ減額することで入札率と手を込めた絵の価値を上げています。"
  },
  {
    slug: "design",
    title: "My 名刺デザイン",
    category: "design",
    image: "",
    detailImages: [
      ""
    ],
    color: "from-purple-500/20 to-pink-500/20",
    summary: "名刺デザイン",
    period: "2025.06 - 2025.7",
    role: "個人開発",
    stack: ["Illustrator"],
    highlights: [
      "名刺デザイン"
    ],
    overview:
      "名刺のデザインをしました。紫、黒のカラーでデザインし、必要最低限の情報、QRコードでポートフォリオサイトを表示できるようにしました。"
  }
];

export const findProjectBySlug = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);
