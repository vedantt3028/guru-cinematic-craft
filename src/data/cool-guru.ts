export const contact = {
  phone: "8605816066",
  location: "Hadapsar, Pune",
};

export const courses = [
  {
    number: "01",
    title: "Photography & Videography.",
    description: "Learn to shoot, understand visual storytelling and work on real-world projects.",
    points: ["Practical Learning", "Real-World Projects", "Expert Guidance", "Weekend Batches"],
  },
  {
    number: "02",
    title: "Video Editing.",
    description: "Build practical editing skills and learn the tools used to bring creative ideas to life.",
    points: ["Adobe Premiere Pro", "Adobe After Effects", "CapCut"],
    duration: "3 Months",
    price: "₹14,999",
    originalPrice: "₹24,999",
    details: ["Only 15 Seats", "Batch Starts 15th October", "Come with your Laptop"],
  },
  {
    number: "03",
    title: "Digital Marketing.",
    description: "Develop practical digital skills for creators, brands and modern creative careers.",
    points: ["Practical Creative Skills", "Career-Focused Learning", "Creative Content", "Better Opportunities"],
  },
];

export const navItems = [
  ["Our Courses", "#courses"],
  ["Workshops", "#workshops"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
] as const;