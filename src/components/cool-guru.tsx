import { useRef, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight, Check, MapPin, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, courses, navItems } from "@/data/cool-guru";
import directorPortrait from "@/assets/tejas-creative-director.jpg";

const HERO_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";
const COURSE_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4";
const easeOut = [0.16, 1, 0.3, 1] as const;
const cardEase = [0.22, 1, 0.36, 1] as const;

export function WordsPullUp({ text, showAsterisk = false, className = "" }: { text: string; showAsterisk?: boolean; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true });
  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {text.split(" ").map((word, index, all) => (
        <span key={`${word}-${index}`} className="relative inline-block overflow-hidden pb-[0.08em] pr-[0.12em]">
          <motion.span initial={{ y: 20, opacity: 0 }} animate={visible ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.75, delay: index * 0.08, ease: easeOut }} className="relative inline-block">
            {word}{showAsterisk && index === all.length - 1 ? <sup className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] text-sun">*</sup> : null}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function WordsPullUpMultiStyle({ segments, className = "" }: { segments: Array<{ text: string; className?: string }>; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true });
  let wordIndex = 0;
  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {segments.flatMap((segment) => segment.text.split(" ").map((word) => {
        const currentIndex = wordIndex++;
        return <span key={`${word}-${currentIndex}`} className={`inline-block overflow-hidden pb-[0.1em] pr-[0.25em] ${segment.className ?? ""}`}><motion.span className="inline-block" initial={{ y: 20, opacity: 0 }} animate={visible ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.75, delay: currentIndex * 0.08, ease: easeOut }}>{word}</motion.span></span>;
      }))}
    </div>
  );
}

export function AnimatedLetter({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}

function ArrowCTA({ children, href }: { children: ReactNode; href: string }) {
  return <Button asChild variant="cinematic" className="h-auto gap-2 py-1.5 pl-5 pr-1.5 text-sm hover:gap-3 sm:text-base"><a href={href}><span>{children}</span><span className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-cream transition-transform duration-300 group-hover:scale-110 sm:size-10"><ArrowRight aria-hidden="true" /></span></a></Button>;
}

export function Navbar() {
  return <nav aria-label="Main navigation" className="absolute left-1/2 top-0 z-30 -translate-x-1/2 rounded-b-2xl bg-ink px-4 py-2 md:rounded-b-3xl md:px-8"><div className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">{navItems.map(([label, href]) => <a key={label} href={href} className="whitespace-nowrap text-[10px] text-cream/80 transition-colors hover:text-cream sm:text-xs md:text-sm">{label}</a>)}</div></nav>;
}

export function Hero() {
  return <section className="h-screen p-4 md:p-6"><div className="relative h-full overflow-hidden rounded-2xl bg-panel md:rounded-[2rem]"><video autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 size-full object-cover" aria-label="Cinematic creative production reel"><source src={HERO_VIDEO} type="video/mp4" /></video><div className="noise-overlay pointer-events-none absolute inset-0 opacity-70 mix-blend-overlay" /><div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/80" /><Navbar /><div className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-1 items-end gap-5 px-4 pb-5 sm:px-6 md:grid-cols-12 md:px-8 md:pb-8 lg:px-10"><h1 className="col-span-1 min-w-0 text-[26vw] font-medium leading-[0.85] tracking-[-0.07em] text-cream sm:text-[24vw] md:col-span-8 md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"><WordsPullUp text="Cool Guru" showAsterisk /></h1><div className="col-span-1 mb-1 max-w-md md:col-span-4 md:mb-4"><motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5, ease: easeOut }} className="mb-5 text-xs leading-[1.2] text-primary/70 sm:text-sm md:text-base">Learn in-demand creative skills through practical learning, real-world projects and expert guidance. Build better skills and bigger opportunities across photography, videography, editing and digital creativity.</motion.p><motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.7, ease: easeOut }}><ArrowCTA href="#courses">Explore Courses</ArrowCTA></motion.div></div></div></div></section>;
}

export function Instructor() {
  return <div className="mt-14 grid gap-5 md:grid-cols-[1.25fr_0.75fr] md:items-end"><motion.div initial={{ clipPath: "inset(15% 0 15% 0)", opacity: 0 }} whileInView={{ clipPath: "inset(0% 0 0% 0)", opacity: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1, ease: easeOut }} className="relative min-h-[430px] overflow-hidden rounded-lg md:min-h-[620px]"><img src={directorPortrait} alt="Creative director holding a cinema camera in a film studio" loading="lazy" width={1408} height={1760} className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-[1.02]" /><div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" /></motion.div><div className="pb-3"><p className="mb-5 text-[10px] uppercase tracking-[0.24em] text-sun sm:text-xs">Your instructor</p><h3 className="text-4xl font-bold uppercase leading-[0.9] text-cream sm:text-5xl lg:text-6xl">Tejas Rama Pawar</h3><p className="mt-5 border-l border-sun pl-4 text-xs uppercase tracking-[0.2em] text-cream/60 sm:text-sm">Director of 35+ Ad Films</p></div></div>;
}

export function About() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const revealText = "Creativity becomes a career when practice meets perspective. Cool Guru brings both together through hands-on learning, real projects and guidance rooted in professional filmmaking.";
  const { scrollYProgress } = useScroll({ target: textRef, offset: ["start 0.8", "end 0.2"] });
  return <section id="about" className="scroll-mt-8 bg-ink px-4 py-20 sm:px-6 md:py-32"><div className="mx-auto max-w-6xl rounded-lg bg-panel px-5 py-12 sm:px-10 md:px-14 md:py-20"><div className="text-center"><p className="mb-8 text-[10px] uppercase tracking-[0.25em] text-primary sm:text-xs">Creative Education</p><WordsPullUpMultiStyle className="mx-auto max-w-4xl text-3xl leading-[0.95] text-cream sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl" segments={[{ text: "Tejas Rama Pawar," }, { text: "a director and creative professional.", className: "font-serif italic text-sun" }, { text: "Teaching practical creative skills for the real world." }]} /><div className="mx-auto mt-10 max-w-2xl space-y-4 text-xs leading-relaxed text-primary sm:text-sm md:text-base"><p>Cool Guru is built for students, creators and working professionals who want to develop practical skills in photography, videography, video editing, digital marketing and creative content.</p><p>Learn through practical training, real-world projects and expert guidance while building skills for bigger creative opportunities.</p></div></div><Instructor /><p ref={textRef} className="mx-auto mt-24 max-w-5xl text-center text-2xl font-light leading-[1.2] text-cream sm:text-4xl md:text-5xl lg:text-6xl">{Array.from(revealText).map((char, index) => { const progress = index / revealText.length; return <AnimatedLetter key={`${char}-${index}`} progress={scrollYProgress} range={[Math.max(0, progress - 0.1), Math.min(1, progress + 0.05)]}>{char}</AnimatedLetter>; })}</p></div></section>;
}

function CardLink() { return <a href="#contact" className="group mt-auto inline-flex items-center gap-2 text-sm text-cream">Learn more <ArrowRight className="size-4 -rotate-45 transition-transform group-hover:translate-x-1" aria-hidden="true" /></a>; }

export function FeatureCard() {
  return <motion.article variants={{ hidden: { scale: 0.95, opacity: 0 }, show: { scale: 1, opacity: 1 } }} className="relative min-h-[380px] overflow-hidden rounded-lg bg-panel-raised lg:min-h-0"><video autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 size-full object-cover"><source src={COURSE_VIDEO} type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" /><p className="absolute inset-x-0 bottom-0 p-6 text-2xl leading-tight text-cream">Create what you imagine.</p></motion.article>;
}

export function CourseCard({ course }: { course: (typeof courses)[number] }) {
  return <motion.article variants={{ hidden: { scale: 0.95, opacity: 0 }, show: { scale: 1, opacity: 1 } }} className="flex min-h-[380px] flex-col rounded-lg bg-panel-raised p-5 lg:min-h-0"><div className="mb-6 flex items-center justify-between"><span className="text-xs text-dim">{course.number}</span>{course.duration ? <span className="rounded-full border border-sun/50 px-3 py-1 text-[10px] uppercase text-sun">{course.duration}</span> : null}</div><h3 className="text-2xl leading-[1.05] text-cream">{course.title}</h3><p className="mt-4 text-xs leading-relaxed text-cream/60">{course.description}</p>{course.price ? <div className="mt-5 border-y border-cream/10 py-4"><div className="flex items-end gap-3"><strong className="text-3xl text-sun">{course.price}</strong><del className="pb-1 text-xs text-dim">{course.originalPrice}</del></div>{course.details?.map((detail) => <p key={detail} className="mt-1 text-[10px] uppercase tracking-[0.1em] text-cream/70">{detail}</p>)}</div> : null}<ul className="my-5 space-y-2">{course.points.map((point) => <li key={point} className="flex items-center gap-2 text-xs text-cream/65"><Check className="size-3.5 shrink-0 text-primary" aria-hidden="true" />{point}</li>)}</ul><CardLink /></motion.article>;
}

export function Courses() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, margin: "-100px" });
  return <section id="courses" className="relative min-h-screen scroll-mt-8 overflow-hidden bg-ink px-4 py-20 sm:px-6 md:py-28"><div className="bg-noise pointer-events-none absolute inset-0 opacity-15" /><div className="relative mx-auto max-w-[1500px]"><div className="mb-12 max-w-3xl"><WordsPullUpMultiStyle className="justify-start text-xl font-normal leading-tight sm:text-2xl md:text-3xl lg:text-4xl" segments={[{ text: "Learn. Create. Grow.", className: "text-cream" }, { text: "Better skills. Bigger opportunities.", className: "text-dim" }]} /></div><motion.div ref={ref} initial="hidden" animate={visible ? "show" : "hidden"} variants={{ show: { transition: { staggerChildren: 0.15 } } }} transition={{ ease: cardEase }} className="grid gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4"><FeatureCard />{courses.map((course) => <CourseCard key={course.number} course={course} />)}</motion.div></div></section>;
}

export function WorkshopSection() {
  return <section id="workshops" className="scroll-mt-8 bg-ink px-4 py-12 sm:px-6 md:py-20"><motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9, ease: easeOut }} className="relative mx-auto min-h-[760px] max-w-[1500px] overflow-hidden rounded-lg md:min-h-[700px]"><img src={directorPortrait} alt="Creative professional with a cinema camera" loading="lazy" width={1408} height={1760} className="absolute inset-0 size-full object-cover object-center md:object-[70%_35%]" /><div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/15" /><div className="relative z-10 flex min-h-[760px] max-w-3xl flex-col justify-between p-6 sm:p-10 md:min-h-[700px] md:p-14"><div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-sun sm:text-xs">8-Week Weekend Workshop</p><h2 className="mt-6 max-w-2xl text-5xl font-extrabold uppercase leading-[0.85] text-cream sm:text-6xl md:text-7xl lg:text-8xl">Turn your camera into a career.</h2><p className="mt-6 text-xs uppercase tracking-[0.18em] text-cream/70 sm:text-sm">Photography & Videography Workshop</p><p className="mt-3 text-lg text-cream">Learn. Shoot. Work on Live Projects.</p><div className="mt-8 grid max-w-xl grid-cols-2 gap-x-5 gap-y-4">{["Practical Learning", "Real-World Projects", "Expert Guidance", "Only 15 Seats"].map((point) => <div key={point} className="flex items-center gap-2 text-[10px] uppercase tracking-[0.1em] text-cream/70"><Check className="size-3.5 shrink-0 text-sun" />{point}</div>)}</div></div><div className="mt-14 grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end"><div><p className="text-xs text-cream/60">For students, creators & working professionals</p><p className="mt-3 text-4xl font-bold text-sun">₹9,999</p><p className="mt-2 text-xs uppercase tracking-[0.15em] text-cream">Weekend Batches</p><p className="mt-6 text-sm font-bold text-cream">TEJAS RAMA PAWAR</p><p className="text-xs text-cream/60">Director of 35+ Ad Films</p></div><ArrowCTA href={`tel:${contact.phone}`}>Book Your Free Counselling Call</ArrowCTA></div></div></motion.div></section>;
}

export function EditingProgram() {
  const tools = [{ name: "Premiere Pro", label: "Edit Like a Pro" }, { name: "After Effects", label: "Bring Ideas to Life" }, { name: "CapCut", label: "Create Anywhere" }];
  return <section id="projects" className="scroll-mt-8 bg-ink px-4 py-16 sm:px-6 md:py-24"><div className="mx-auto grid max-w-[1500px] gap-12 border-y border-cream/15 py-14 lg:grid-cols-12 lg:py-20"><div className="lg:col-span-7"><p className="mb-8 text-[10px] uppercase tracking-[0.24em] text-sun">3-Month Editing Program</p><h2 className="max-w-4xl text-4xl font-bold leading-[0.95] text-cream sm:text-5xl md:text-6xl lg:text-7xl">Learn In-Demand Better Skills.</h2><p className="mt-4 font-serif text-3xl italic text-dim sm:text-4xl md:text-5xl">Create a career that actually pays.</p><div className="mt-12 grid gap-3 sm:grid-cols-3">{tools.map((tool) => <div key={tool.name} className="border-t border-cream/20 pt-4"><p className="text-sm text-cream">{tool.name}</p><p className="mt-1 text-xs text-dim">{tool.label}</p></div>)}</div></div><div className="flex flex-col justify-between gap-10 lg:col-span-5"><div><div className="flex items-end gap-4"><strong className="text-5xl text-sun sm:text-6xl">₹14,999</strong><del className="pb-2 text-sm text-dim">₹24,999</del></div><div className="mt-8 grid grid-cols-2 gap-4 text-xs text-cream/70"><p>Only 15 Seats Available</p><p>Starts 15th October</p><p>Come with your Laptop</p><p>{contact.location}</p></div></div><div className="flex flex-wrap items-center gap-5"><ArrowCTA href={`tel:${contact.phone}`}>Book Free Counselling</ArrowCTA><a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-cream"><Phone className="size-4" />{contact.phone}</a></div></div></div></section>;
}

export function CTA() {
  return <section id="contact" className="scroll-mt-8 bg-sun px-4 py-20 text-ink sm:px-6 md:py-28"><div className="mx-auto max-w-[1500px]"><Sparkles className="mb-8 size-8" aria-hidden="true" /><h2 className="max-w-5xl text-5xl font-extrabold leading-[0.88] sm:text-6xl md:text-7xl lg:text-8xl">Better Skills. Bigger Opportunities.</h2><p className="mt-6 max-w-xl text-sm text-ink/70 sm:text-base">Start building practical creative skills with Cool Guru.</p><div className="mt-10 flex flex-wrap gap-3"><Button asChild className="h-12 rounded-full bg-ink px-6 text-cream hover:bg-ink/85"><a href={`tel:${contact.phone}`}>Book Free Counselling</a></Button><Button asChild variant="outline" className="h-12 rounded-full border-ink/30 bg-transparent px-6 text-ink hover:bg-ink/10"><a href="#courses">Explore Courses</a></Button></div><div className="mt-14 flex flex-wrap gap-8 text-sm"><a href={`tel:${contact.phone}`} className="inline-flex items-center gap-2"><Phone className="size-4" />{contact.phone}</a><span className="inline-flex items-center gap-2"><MapPin className="size-4" />{contact.location}</span></div></div></section>;
}

export function Footer() {
  return <footer className="bg-ink px-4 pb-8 pt-14 sm:px-6 md:pt-20"><div className="mx-auto max-w-[1500px]"><div className="grid gap-12 border-b border-cream/10 pb-12 md:grid-cols-[1fr_auto_auto]"><div><p className="text-4xl font-extrabold leading-none text-cream">COOL GURU</p><p className="mt-2 text-[10px] tracking-[0.32em] text-sun">CREATIVE COURSES</p><p className="mt-6 text-sm text-dim">Edit. Create. Grow.</p></div><div className="grid grid-cols-2 gap-x-8 gap-y-3">{navItems.map(([label, href]) => <a key={label} href={href} className="text-xs text-cream/60 transition-colors hover:text-cream">{label}</a>)}</div><div className="space-y-3 text-xs text-cream/60"><a href={`tel:${contact.phone}`} className="block hover:text-cream">{contact.phone}</a><p>{contact.location}</p><div className="flex flex-wrap gap-4 pt-4">{["Instagram", "YouTube", "Facebook", "LinkedIn"].map((social) => <span key={social}>{social}</span>)}</div></div></div><p className="pt-6 text-[10px] uppercase tracking-[0.16em] text-dim">© {new Date().getFullYear()} Cool Guru — Creative Courses</p></div></footer>;
}

export function CoolGuruPage() { return <main><Hero /><About /><Courses /><WorkshopSection /><EditingProgram /><CTA /><Footer /></main>; }