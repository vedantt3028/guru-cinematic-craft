# Cool Guru Academy

Create a React + Vite + TypeScript + Tailwind CSS landing page for a creative education academy called "Cool Guru — Creative Courses".

IMPORTANT:

Keep the DESIGN SYSTEM, LAYOUT, ANIMATION STYLE, TYPOGRAPHY, SPACING, RESPONSIVENESS and overall cinematic feel exactly as specified below.

Only replace the Prisma-specific branding/content with the Cool Guru content provided in this prompt.

The final website should feel like a premium cinematic creative academy — NOT a generic coaching institute or education template.

Use framer-motion for animations and lucide-react for icons.

==================================================

BRAND

==================================================

Brand name:

COOL GURU

Subtitle:

CREATIVE COURSES

Brand tagline:

"Edit. Create. Grow."

Core positioning:

Creative education focused on practical skills in:

- Photography

- Videography

- Video Editing

- Digital Marketing

- Creative Content

Target audience:

Students, creators and working professionals.

Instructor:

TEJAS RAMA PAWAR

Professional description:

DIRECTOR OF 35+ AD FILMS

Location:

HADAPSAR, PUNE

Phone:

8605816066

==================================================

FONTS

==================================================

Load two Google Fonts in index.html:

Almarai

Weights: 300, 400, 700, 800

Instrument Serif

Italic only

Use Almarai as the global default font.

Use Instrument Serif italic for selected editorial accent text in the About section.

In index.css:

* {

  font-family: 'Almarai', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;

}

In tailwind.config.js extend:

colors.primary: #DEDBC8

fontFamily.serif: ['"Instrument Serif"', 'serif']

==================================================

COLOR SYSTEM

==================================================

Global background:

#000000

About card:

#101010

Feature cards:

#212121

Primary text:

#E1E0CC

Tailwind primary:

#DEDBC8

Gray text:

text-gray-400

text-gray-500

Main accent:

Warm Cool Guru yellow inspired by the promotional posters.

Use yellow selectively for:

- Important highlights

- Course/pricing accents

- CTA emphasis

- Small graphic details

Do not turn the entire website yellow.

Keep the overall visual language black + warm cream + yellow.

==================================================

CUSTOM CSS UTILITIES

==================================================

Create:

.noise-overlay

Use an inline SVG data URI with feTurbulence:

baseFrequency="0.85"

numOctaves="3"

This is used as a texture overlay on the hero video.

Create:

.bg-noise

Use an inline SVG data URI with feTurbulence:

baseFrequency="0.9"

numOctaves="4"

Use this subtly in the Features section.

==================================================

SECTION 1 — HERO

==================================================

Full viewport height:

h-screen

Entire section:

p-4 md:p-6

Inside container:

rounded-2xl md:rounded-[2rem]

overflow-hidden

relative

Use a cinematic background video.

Hero video URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4

Video:

autoPlay

loop

muted

playsInline

object-cover

w-full

h-full

Add noise overlay:

.noise-overlay

opacity-[0.7]

mix-blend-overlay

pointer-events-none

Add gradient:

bg-gradient-to-b from-black/30 via-transparent to-black/60

==================================================

NAVBAR

==================================================

Absolutely positioned at the top center.

Black pill hanging from the top edge:

bg-black

rounded-b-2xl md:rounded-b-3xl

px-4 py-2 md:px-8

Navigation items:

"Our Courses"

"Workshops"

"About"

"Projects"

"Contact"

Text:

text-[10px] sm:text-xs md:text-sm

Gap:

gap-3 sm:gap-6 md:gap-12 lg:gap-14

Navbar text color:

rgba(225, 224, 204, 0.8)

Hover:

#E1E0CC

Keep navbar minimal and premium.

==================================================

HERO CONTENT

==================================================

Content is bottom aligned:

absolute bottom-0 left-0 right-0

Use a 12-column grid.

Left:

8 columns

Right:

4 columns

MAIN HERO HEADING:

"Cool Guru"

Use the WordsPullUp component.

Responsive sizes:

text-[26vw]

sm:text-[24vw]

md:text-[22vw]

lg:text-[20vw]

xl:text-[19vw]

2xl:text-[20vw]

font-medium

leading-[0.85]

tracking-[-0.07em]

Color:

#E1E0CC

Add a superscript asterisk (*) after the final "u" or at the end of "Guru".

Use the same superscript treatment:

absolute

top-[0.65em]

-right-[0.3em]

text-[0.31em]

WordsPullUp animation:

Each word slides upward from:

y: 20

to:

y: 0

Stagger:

0.08s

Triggered using:

useInView

==================================================

HERO DESCRIPTION

==================================================

Right column text:

"Learn in-demand creative skills through practical learning, real-world projects and expert guidance. Build better skills and bigger opportunities across photography, videography, editing and digital creativity."

Use:

text-primary/70

text-xs sm:text-sm md:text-base

leading-[1.2]

Framer Motion:

fade up from y:20

delay:0.5s

Ease:

[0.16, 1, 0.3, 1]

==================================================

HERO CTA

==================================================

Primary CTA:

"Explore Courses"

Pill shape:

bg-primary

rounded-full

Black text.

font-medium

text-sm sm:text-base

Right side:

black circle

bg-black

rounded-full

w-9 h-9 sm:w-10 sm:h-10

Inside:

ArrowRight from lucide-react

Icon:

white / cream

Hover:

gap increases using hover:gap-3

Circle:

group-hover:scale-110

Framer Motion:

fade up from y:20

delay:0.7s

Ease:

[0.16, 1, 0.3, 1]

==================================================

SECTION 2 — ABOUT

==================================================

Background:

bg-black

Use a padded section with centered content.

Inner card:

bg-[#101010]

centered

max-w-6xl

==================================================

ABOUT LABEL

==================================================

Small label:

"CREATIVE EDUCATION"

Color:

text-primary

Size:

text-[10px] sm:text-xs

==================================================

ABOUT MAIN HEADING

==================================================

Use WordsPullUpMultiStyle.

Create 3 segments:

"Tejas Rama Pawar,"

normal Almarai

"a director and creative professional."

italic Instrument Serif

"Teaching practical creative skills for the real world."

normal Almarai

Use:

text-3xl

sm:text-4xl

md:text-5xl

lg:text-6xl

xl:text-7xl

max-w-3xl

mx-auto

leading-[0.95]

sm:leading-[0.9]

Each word animates:

y:20 → y:0

Stagger:

0.08s

Use useInView once:true.

==================================================

ABOUT DESCRIPTION

==================================================

Use this content:

"Cool Guru is built for students, creators and working professionals who want to develop practical skills in photography, videography, video editing, digital marketing and creative content."

Second sentence:

"Learn through practical training, real-world projects and expert guidance while building skills for bigger creative opportunities."

Use:

text-[#DEDBC8]

text-xs sm:text-sm md:text-base

==================================================

INSTRUCTOR

==================================================

Within the About section, create a premium instructor block.

Large portrait/image area.

Instructor:

TEJAS RAMA PAWAR

Title:

DIRECTOR OF 35+ AD FILMS

Keep this visually editorial.

Do not invent additional:

- awards

- years of experience

- brands

- film credits

- student numbers

- achievements

Only use:

"Director of 35+ Ad Films"

==================================================

SCROLL-LINKED TEXT ANIMATION

==================================================

Create a body paragraph with individual character animation.

Use useScroll with:

target offset:

['start 0.8', 'end 0.2']

Each character is wrapped in an AnimatedLetter component.

Each character opacity transitions:

0.2 → 1

based on scroll position.

Character staggering:

charProgress = index / totalChars

range:

[

  charProgress - 0.1,

  charProgress + 0.05

]

This creates a progressive text reveal effect.

==================================================

SECTION 3 — FEATURES / COURSES

==================================================

Minimum height:

min-h-screen

Background:

bg-black

Add subtle:

.bg-noise

opacity-[0.15]

==================================================

FEATURE HEADER

==================================================

Use WordsPullUpMultiStyle.

Line 1:

"Learn. Create. Grow."

Color:

cream

Line 2:

"Better skills. Bigger opportunities."

Color:

text-gray-500

Typography:

text-xl

sm:text-2xl

md:text-3xl

lg:text-4xl

font-normal

==================================================

FEATURE GRID

==================================================

Use a 4-column card grid.

Desktop:

4 columns

Tablet:

2 columns

Mobile:

1 column

Use:

lg:h-[480px]

Gap:

gap-3

sm:gap-2

md:gap-1

Cards should have staggered entrance animation.

Animation:

scale: 0.95 → 1

opacity: 0 → 1

Triggered by:

useInView

once:true

margin:

"-100px"

Stagger:

0.15s

Ease:

[0.22, 1, 0.36, 1]

==================================================

CARD 1 — CINEMATIC VIDEO

==================================================

Full video background.

Video URL:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4

Properties:

autoPlay

loop

muted

playsInline

object-cover

Full card background.

Bottom text:

"Create what you imagine."

Use:

#E1E0CC

Add subtle gradient from transparent to black.

==================================================

CARD 2 — PHOTOGRAPHY & VIDEOGRAPHY

==================================================

Background:

#212121

Number:

01

Title:

"Photography & Videography."

Small supporting description:

"Learn to shoot, understand visual storytelling and work on real-world projects."

Checklist:

✓ Practical Learning

✓ Real-World Projects

✓ Expert Guidance

✓ Weekend Batches

Use Check icon from lucide-react.

Icon color:

text-primary

Description text:

text-gray-400

Bottom link:

"Learn more"

ArrowRight icon rotated:

-45deg

==================================================

CARD 3 — VIDEO EDITING

==================================================

Background:

#212121

Number:

02

Title:

"Video Editing."

Description:

"Build practical editing skills and learn the tools used to bring creative ideas to life."

Tools:

✓ Adobe Premiere Pro

✓ Adobe After Effects

✓ CapCut

Additional information:

"3 Months"

Price:

"₹14,999"

Show original price subtly:

"₹24,999"

Also show:

"Only 15 Seats"

"Batch Starts 15th October"

"Come with your Laptop"

Keep the promotional price visually prominent.

Bottom link:

"Learn more"

ArrowRight rotated -45deg.

==================================================

CARD 4 — DIGITAL MARKETING & CREATIVE SKILLS

==================================================

Background:

#212121

Number:

03

Title:

"Digital Marketing."

Description:

"Develop practical digital skills for creators, brands and modern creative careers."

Checklist:

✓ Practical Creative Skills

✓ Career-Focused Learning

✓ Creative Content

✓ Better Opportunities

Bottom link:

"Learn more"

ArrowRight rotated -45deg.

IMPORTANT:

Do not invent a specific duration, price, curriculum or placement promise for Digital Marketing because it is not provided in the supplied poster.

==================================================

ADDITIONAL FEATURED WORKSHOP

==================================================

After the 4-card grid, create a large featured workshop panel.

Make it visually distinct and cinematic.

Label:

"8-WEEK WEEKEND WORKSHOP"

Main headline:

"TURN YOUR CAMERA INTO A CAREER."

Category:

"PHOTOGRAPHY & VIDEOGRAPHY WORKSHOP"

Supporting text:

"Learn. Shoot. Work on Live Projects."

Create 4 small feature points:

PRACTICAL LEARNING

REAL-WORLD PROJECTS

EXPERT GUIDANCE

ONLY 15 SEATS

Audience:

"For students, creators & working professionals"

Price:

"₹9,999"

Format:

"Weekend Batches"

Instructor:

"TEJAS RAMA PAWAR"

Subtitle:

"Director of 35+ Ad Films"

CTA:

"Book Your Free Counselling Call"

Phone:

"8605816066"

Use a large cinematic photography visual of a creative professional holding a camera.

==================================================

EDITING PROGRAM FEATURE

==================================================

Create another premium horizontal feature section.

Main heading:

"Learn In-Demand Better Skills."

Supporting heading:

"Create a career that actually pays."

Duration:

"3 Months"

Tools:

Premiere Pro

After Effects

CapCut

Use short labels:

"Edit Like a Pro"

"Bring Ideas to Life"

"Create Anywhere"

Pricing:

Original:

₹24,999

Offer:

₹14,999

Seats:

Only 15 Seats Available

Batch:

Starts 15th October

Requirement:

Come with your Laptop

Location:

Hadapsar, Pune

Phone:

8605816066

CTA:

"Book Free Counselling"

==================================================

SHARED COMPONENTS

==================================================

Create reusable components:

WordsPullUp

WordsPullUpMultiStyle

AnimatedLetter

Navbar

Hero

About

Instructor

FeatureCard

CourseCard

WorkshopSection

EditingProgram

CTA

Footer

==================================================

WORD PULL-UP ANIMATION

==================================================

WordsPullUp:

Split text by spaces.

Each word:

motion.span

Initial:

y:20

opacity:0

Animate:

y:0

opacity:1

Stagger:

0.08s

Use:

useInView

once:true

WordsPullUp must support:

showAsterisk

When enabled, add a superscript "*" after the final character of the final word.

==================================================

WORDS PULL-UP MULTI STYLE

==================================================

Component accepts:

[

  {

    text: "...",

    className: "..."

  }

]

Split all segments into individual words while preserving their className.

Words are wrapped in:

inline-flex

flex-wrap

justify-center

Each word uses the same pull-up animation.

==================================================

RESPONSIVE BREAKPOINTS

==================================================

Fully responsive across:

Mobile

Tablet

Desktop

Large desktop

Hero heading:

text-[26vw]

sm:text-[24vw]

md:text-[22vw]

lg:text-[20vw]

xl:text-[19vw]

2xl:text-[20vw]

Feature cards:

1 column mobile

2 columns md

4 columns lg

Navbar gaps:

gap-3

sm:gap-6

md:gap-12

lg:gap-14

Use responsive typography and spacing throughout.

No horizontal overflow.

==================================================

CTA / CONTACT

==================================================

Create a final CTA area before the footer.

Heading:

"Better Skills. Bigger Opportunities."

Supporting text:

"Start building practical creative skills with Cool Guru."

Primary CTA:

"Book Free Counselling"

Secondary CTA:

"Explore Courses"

Phone:

8605816066

Location:

Hadapsar, Pune

Phone should be clickable on mobile.

==================================================

FOOTER

==================================================

Brand:

COOL GURU

Subtitle:

CREATIVE COURSES

Tagline:

"Edit. Create. Grow."

Links:

Our Courses

Workshops

About

Projects

Contact

Contact:

8605816066

Hadapsar, Pune

Social placeholders:

Instagram

YouTube

Facebook

LinkedIn

==================================================

DESIGN DIRECTION

==================================================

The design must be:

Dark

Moody

Cinematic

Premium

Editorial

Minimal

Creative

Modern

Use:

Black backgrounds

Warm cream typography

Subtle yellow accents

Large typography

Large cinematic images/video

Soft gradients

Subtle noise

Rounded containers

Editorial spacing

Avoid:

Generic education UI

Bright multi-color sections

Excessive cards

Corporate SaaS styling

Cheap-looking gradients

Excessive shadows

Overly rounded cartoon-style components

Excessive animations

The website should feel closer to a premium creative studio / film academy than a conventional coaching institute.

==================================================

ANIMATION DIRECTION

==================================================

Use Framer Motion throughout.

Animations should be smooth and premium.

Include:

- Pull-up text animations

- Fade-up animations

- Scroll-triggered reveals

- Character-by-character text reveal

- Card scale + fade entrance

- Image reveal

- Button hover

- Subtle image scale

- Navbar transitions

- Staggered elements

Use cinematic easing.

Primary eases:

[0.16, 1, 0.3, 1]

and

[0.22, 1, 0.36, 1]

Do NOT over-animate.

==================================================

CONTENT ACCURACY

==================================================

Use the supplied Cool Guru posters as the source of truth.

Verified information:

Brand:

Cool Guru — Creative Courses

Tagline:

Edit. Create. Grow.

Instructor:

Tejas Rama Pawar

Professional description:

Director of 35+ Ad Films

Phone:

8605816066

Location:

Hadapsar, Pune

Editing program:

3 Months

Editing software:

Premiere Pro

After Effects

CapCut

Editing original price:

₹24,999

Editing offer:

₹14,999

Editing seats:

15

Editing batch:

Starts 15th October

Editing requirement:

Come with your Laptop

Photography & Videography workshop:

8 Weeks

Workshop format:

Weekend Batches

Workshop price:

₹9,999

Workshop seats:

15

Workshop audience:

Students, creators & working professionals

Workshop benefits:

Practical Learning

Real-World Projects

Expert Guidance

Workshop CTA:

Book Your Free Counselling Call

Brand phrases:

"Edit. Create. Grow."

"Learn In-Demand Better Skills."

"Create a career that actually pays."

"Better Skills. Bigger Opportunities."

"Learn. Shoot. Work on Live Projects."

==================================================

DO NOT INVENT CONTENT

==================================================

Do NOT invent:

- Student testimonials

- Student numbers

- Placement percentages

- Guaranteed jobs

- Awards

- Additional professional credits

- Years of experience

- Client names

- Brand partnerships

- Fake reviews

- Fake statistics

- Course prices not provided

- Course durations not provided

- Digital Marketing curriculum not provided

- Guaranteed career outcomes

If information is missing, use an editable placeholder or omit it.

==================================================

TECH STACK

==================================================

Use:

React 18

Vite

TypeScript

Tailwind CSS 3

Framer Motion

Lucide React

Use clean reusable components.

Keep all course/program information in centralized data objects so that content can easily be updated later.

The final result should be production-quality, polished and responsive.

The most important requirement is:

KEEP THE PROVIDED PRISMA REFERENCE DESIGN SYSTEM AND INTERACTION STYLE, BUT TRANSFORM THE BRAND AND CONTENT INTO A PREMIUM CINEMATIC COOL GURU CREATIVE ACADEMY WEBSITE USING THE POSTER INFORMATION ABOVE.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fe9d10b0-da5d-4fc4-a09b-279126e37dcc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
