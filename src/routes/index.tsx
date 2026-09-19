import { createFileRoute } from "@tanstack/react-router";
import { CoolGuruPage } from "@/components/cool-guru";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cool Guru — Creative Courses in Pune" },
      { name: "description", content: "Practical photography, videography, editing and digital creative courses in Hadapsar, Pune." },
      { property: "og:title", content: "Cool Guru — Creative Courses" },
      { property: "og:description", content: "Edit. Create. Grow. Practical creative education with Tejas Rama Pawar in Hadapsar, Pune." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoolGuruPage,
});