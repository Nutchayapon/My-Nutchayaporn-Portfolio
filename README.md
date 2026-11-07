# Portfolio — Nutchayaporn Kuntarosd

เว็บพอร์ตโฟลิโอที่แปลงมาจาก Claude Design เป็นโปรเจกต์ **Astro + React** (เว็บแบบ static โหลดเร็ว เอาขึ้น Vercel / Netlify ได้ทันที)

## เริ่มใช้งานในเครื่อง

ต้องมี **Node.js 22 ขึ้นไป** (เวอร์ชันล่าสุดของ 22 หรือใหม่กว่า) — ดาวน์โหลดที่ nodejs.org

```bash
npm install        # ติดตั้งครั้งแรกครั้งเดียว
npm run dev        # เปิดเว็บทดสอบที่ http://localhost:4321 (แก้ไฟล์แล้วหน้าเว็บรีเฟรชเอง)
npm run build      # สร้างเว็บจริงไว้ในโฟลเดอร์ dist/
npm run preview    # ดูผลลัพธ์จาก dist/ ก่อนอัปขึ้นเว็บ
```

## หน้าเว็บ (route) ↔ บอร์ดใน Claude Design

| URL | ไฟล์หน้า | Component | บอร์ดเดิม |
|---|---|---|---|
| `/` | `src/pages/index.astro` | `Home.jsx` | Page 1 — Home (มี intro กุหลาบ เล่นครั้งแรกที่เข้าเว็บ) |
| `/intro` | `src/pages/intro.astro` | `Intro.jsx` | Page 0 — Intro |
| `/explore` | `src/pages/explore.astro` | `Explore.jsx` | Page 2 — Explore |
| `/projects` | `src/pages/projects/index.astro` | `Projects.jsx` | 2.1 — Projects |
| `/projects/general` | `src/pages/projects/general/index.astro` | `GeneralProjects.jsx` | 2.1.1 — General Projects |
| `/projects/general/cooperative` | `…/general/cooperative.astro` | `CooperativeProjects.jsx` | 2.1.1.1 |
| `/projects/general/super-ai` | `…/general/super-ai.astro` | `SuperAIProjects.jsx` | 2.1.1.2 |
| `/projects/general/conference` | `…/general/conference.astro` | `ConferenceProjects.jsx` | 2.1.1.3 |
| `/projects/personal` | `src/pages/projects/personal.astro` | `PersonalProjects.jsx` | 2.1.2 |
| `/experience` | `src/pages/experience.astro` | `Experience.jsx` | 2.2 — Experience |
| `/skills` | `src/pages/skills.astro` | `SkillsCertificates.jsx` | 2.3 — Skills & Certificates |

## โครงสร้างไฟล์

```
public/
  images/        รูปทั้งหมด (ชื่อไฟล์อ่านง่าย เช่น cert-red-carbon.jpg, photo-coop.jpg)
  cv/            ไฟล์ CV ที่ปุ่ม DOWNLOAD MY CV ดาวน์โหลด
  favicon.png
src/
  layouts/Base.astro          <head> ที่ใช้ร่วมกันทุกหน้า: ฟอนต์, title, description, รูปตอนแชร์ลิงก์
  pages/                      1 ไฟล์ = 1 หน้า (URL ตามชื่อไฟล์)
  components/pages/*.jsx      เนื้อหา + ลูกเล่นของแต่ละหน้า (React)
  styles/*.css                สไตล์ของแต่ละหน้า (ชื่อเดียวกับ component)
```

## แก้เนื้อหาบ่อย ๆ ทำตรงไหน

- **ข้อความ / โปรเจกต์ / รางวัล** → แก้ใน `src/components/pages/<หน้า>.jsx` (ค้นหาข้อความที่อยากแก้ได้เลย)
- **เปลี่ยนรูป** → วางไฟล์ใหม่ใน `public/images/` แล้วแก้ชื่อไฟล์ใน `.jsx` (`src="/images/…"`)
- **อัปเดต CV** → แทนที่ `public/cv/CV_Nutchayaporn_Kuntarosd.pdf` (ชื่อเดิม)
- **สี / ขนาด / แอนิเมชัน** → แก้ใน `src/styles/<หน้า>.css`
- **เพิ่มหน้าใหม่** → สร้าง `.jsx` + `.css` + ไฟล์ใน `src/pages/` แบบเดียวกับหน้าอื่น

## ต้องทำก่อนเปิดเว็บจริง (TODO)

1. **ลิงก์ LinkedIn / GitHub** ในหน้า Home ยังเป็น `href="#"` → แก้ใน `src/components/pages/Home.jsx` (มีคอมเมนต์ `TODO` กำกับไว้)
2. หลัง deploy ครั้งแรก เปลี่ยน `site:` ใน `astro.config.mjs` เป็นลิงก์เว็บจริง (เพื่อให้รูปตอนแชร์ลิงก์ถูกต้อง)
3. ตัดสินใจว่าจะแสดงเบอร์โทรในส่วน CONTACT ต่อสาธารณะหรือไม่

## อัปขึ้น GitHub + Vercel

1. GitHub Desktop → **File → Add local repository** (เลือกโฟลเดอร์นี้) → **Publish repository**
   หรือใช้คำสั่ง: `git init && git add . && git commit -m "first version"` แล้ว push ขึ้น repo ใหม่
2. vercel.com → **Add New → Project → Import** repo นี้ → Framework = Astro (ตรวจให้อัตโนมัติ) → **Deploy**
3. ต่อจากนี้: แก้ไฟล์ → commit → push → Vercel อัปเดตเว็บให้เอง

## หมายเหตุทางเทคนิค

- หน้าที่มีลูกเล่น (Home, Intro, Experience, Skills) ใช้ React แบบ `client:load`; หน้าอื่นเป็น HTML ล้วน ไม่มี JavaScript
- Intro กุหลาบในหน้า Home เล่นครั้งแรกที่เข้าเว็บในแท็บนั้น (จำด้วย `sessionStorage`) กลับมาหน้า Home อีกครั้งจะไม่เล่นซ้ำ
- ฟอนต์ Instrument Serif + Newsreader ติดตั้งผ่าน npm (`@fontsource/*`) ไม่ต้องโหลดจาก Google Fonts
- ผู้ใช้ที่ตั้งค่า "ลดการเคลื่อนไหว" (reduced motion) จะเห็นหน้าแบบไม่มีแอนิเมชัน
