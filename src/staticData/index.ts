import { AssetCardI, FooterLinksI } from "../types/index.interface";

export const AssetCardData: AssetCardI[] = [
  {
    bgColor: "#FFF4F0",
    title: "Stocks",
    imgSrc: "/src/assets/stocks.svg",
    description:
      "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
    history: "14% per annum",
    risk: "Medium",
  },
  {
    bgColor: "#F6F2FF",
    title: "Real Estate",
    imgSrc: "/src/assets/estate.svg",
    description:
      "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
    history: "14% per annum",
    risk: "Medium",
  },
  {
    bgColor: "#ECFEFE",
    title: "Fixed Income",
    imgSrc: "/src/assets/income.svg",
    description:
      "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.",
    history: "14% per annum",
    risk: "Medium",
  },
];


export const footerMain: FooterLinksI[] = [
  { title: "About Us", href: "" },
  { title: "Careers", href: "" },
  { title: "FAQs", href: "" },
  { title: "Contact Info", href: "" },
  { title: "Press", href: "" },
  { title: "Rise Impact", href: "" },
];

export const footerExplore: FooterLinksI[] = [
  { title: "Investmet Club", href: "" },
  { title: "Blog", href: "" },
];

export const footerProducts: FooterLinksI[] = [
  { title: "Rise App", href: "" },
  { title: "Wallets", href: "" },
  { title: "Asset Classes", href: "" },
];

export const footerContact: FooterLinksI[] = [
  { title: "0818 714 7405", href: "" },
  { title: "hello@rise.capital", href: "" },
  { title: "Newsletter", href: "" },
  { title: "Instagram", href: "" },
  { title: "Twitter", href: "" },
];
