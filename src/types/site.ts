import Images from "@/utils/images";

type FooterItem = {
  title: string;
  href: string;
  items: { title: string; link: string }[];
  // StoreItems?: { ImgUrl: string }[] | undefined;
  Icons?: any[] | undefined;
};

type FooterData = {
  Footer: FooterItem[];
};

export const Header = {
  logo: "Exclusive",
  Menu: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about-us",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Sign Up",
      href: "/sign-up",
    },
  ],
  Accordion: [
    {
      title: "Womens Fashion",
      items: [
        {
          title: "Clothing",
          href: "/clothing",
        },
        {
          title: "Jewellery",
          href: "/jewellery",
        },
        {
          title: "Accessories",
          href: "/accessories",
        },
      ],
    },
    {
      title: "Mens Fashion",
      items: [
        {
          title: "Tshirts",
          href: "/tshirts",
        },
        {
          title: "Jeans",
          href: "/jeans",
        },
        {
          title: "Jackets",
          href: "/jackets",
        },
      ],
    },
    {
      title: "Electronics",
      link: "/electronics",
    },
    {
      title: "Home & Lifestyle",
      link: "/lifestyle",
    },
    {
      title: "Medicine",
      link: "/pharmacy",
    },
    {
      title: "Sports & Outdoor",
      link: "/sports",
    },
    {
      title: "Baby Toys",
      link: "/toys",
    },
    {
      title: "Groceries & Pets",
      link: "/groceries",
    },
    {
      title: "Health & Beauty",
      link: "/beauty",
    },
  ],
};

export const FooterData = {
  Footer: [
    {
      title: "Exclusive",
      href: "/",
      items: [
        {
          title: "Subscribe",
          link: "/subscribe",
        },
        {
          title: "Get 10% off on our first orders",
          link: "/offer",
        },
      ],
      Email: [
        {
          placeholder: "Enter Your Email",
          ImgUrl: Images?.SendIcon,
        },
      ],
    },
    {
      title: "Support",
      href: "/support",
      items: [
        {
          title: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
          link: "",
        },
        {
          title: "exclusive@gmail.com",
          link: "/email-send",
        },
        {
          title: "+88015-88888-9999",
          link: "/call",
        },
      ],
    },
    {
      title: "Account",
      href: "/account",
      items: [
        {
          title: "My Account",
          link: "/account",
        },
        {
          title: "Login / Register",
          link: "/register",
        },
        {
          title: "Cart",
          link: "/cart",
        },
        {
          title: "Wishlist",
          link: "/wishlist",
        },
        {
          title: "Shop",
          link: "/shop",
        },
      ],
    },
    {
      title: "Quick Link",
      href: "/quicklinks",
      items: [
        {
          title: "Privacy Policy",
          link: "/privacy-policy",
        },
        {
          title: "Terms Of Use",
          link: "/terms",
        },
        {
          title: "FAQ",
          link: "/faq",
        },
        {
          title: "Contact",
          link: "/contact",
        },
      ],
    },
    {
      title: "Download App",
      href: "/downloadapp",
      items: [
        {
          title: "Save $3 with App New User Only",
          link: "/",
        },
      ],
      StoreItems: [
        {
          ImgUrl: Images?.QrCode,
        },
        {
          ImgUrl: Images?.GoogleAppStore,
        },
        {
          ImgUrl: Images?.ApplePlayStore,
        },
      ],
      Icons: [
        {
          ImgUrl: Images?.FacebookIcon,
          Link: "",
        },
        {
          ImgUrl: Images?.TwitterIcon,
          Link: "",
        },
        {
          ImgUrl: Images?.InstagramIcon,
          Link: "",
        },
        {
          ImgUrl: Images?.LinkedInIcon,
          Link: "",
        },
      ],
    },
  ],
};
