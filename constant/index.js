import { IoLogoWhatsapp, IoIosSearch } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoMenuOutline } from "react-icons/io5";

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
