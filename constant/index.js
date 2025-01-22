import { IoLogoWhatsapp, IoIosSearch } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMenuOutline } from "react-icons/io5";
import { sp } from "@/utils/fn";

export const icons = {
  search: <IoIosSearch />,
  whatsapp: <IoLogoWhatsapp />,
  telegram: <FaTelegramPlane />,
  menuBurger: <IoMenuOutline />,
  instagram: <AiFillInstagram />,
};

export const images = {
  logo: "/icon/Logo.png",
  arrow: "/icon/arrowHero.svg",
  eNamad: "/images/imageFooter.png",
};

export const navElSection1 = [
  { id: 1, title: "صفحه اصلی", href: "/" },
  { id: 2, title: "خدمات و تعرفه", href: "/learn" },
  { id: 3, title: "آموزش‌وبسایت", href: "/learn" },
  { id: 4, title: "مراکز", href: "/cnters" },
];

export const navElSection2 = [
  { id: 1, title: "مجله سلامت", href: "/health" },
  { id: 2, title: "مجوزها", href: "/license" },
  { id: 4, title: "تماس باما", href: "/contact-us" },
];

export const socialmedia = [
  { id: 1, icon: icons.instagram, href: "/" },
  { id: 2, icon: icons.whatsapp, href: "/" },
  { id: 3, icon: icons.telegram, href: "/" },
];

export const contactEl = [
  { id: 1, title: "پشتیبانی خدمات", href: "/" },
  { id: 2, title: "پشتیبانی فنی", href: "/" },
  { id: 3, title: "ارسال تیکت", href: "/" },
  { id: 4, title: "ثبت شکایات و تخلف", href: "/" },
];

export const otherPageEl = [
  { id: 1, title: "قوانین و مقررات", href: "/" },
  { id: 2, title: "حریم خصوصی کاربران", href: "/" },
  { id: 3, title: "مجوزها و افتخارات", href: "/" },
  { id: 4, title: "پنل کاربری", href: "/" },
];

export const servicesEl = [
  {
    id: 1,
    image: "/images/services/services1.png",
    title: "پزشک عمومی",
    count: sp(638),
    href: "/",
  },
  {
    id: 2,
    image: "/images/services/services2.png",
    title: "متخصص زنان و ماما",
    count: sp(568),
    href: "/",
  },
  {
    id: 3,
    image: "/images/services/services3.png",
    title: "روانشناس و روانپزشک",
    count: sp(201),
    href: "/",
  },
  {
    id: 4,
    image: "/images/services/services4.png",
    title: "دندان پزشک",
    count: sp(23),
    href: "/",
  },
  {
    id: 5,
    image: "/images/services/services5.png",
    title: "پزشک متخصص و فوق تخصص",
    count: sp(2538),
    href: "/",
  },
];
