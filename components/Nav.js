// icons
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav
      className="flex flex-col items-center xl:justify-center
   gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%]
   z-50 top-0 w-full xl:w-16  xl:max-w-md  xl:h-screen"
    >
      <div
        className="flex w-full xl:flex-col items-center justify-between xl:justify-between gap-y-10 px-4 md:px-40
    xl:px-0 h-[88px] bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl
    xl:rounded-full"
      >
        {navData.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`relative flex items-center group hover:text-accent transition-all duration-500 ${
                link.path === pathname && "text-accent"
              }`}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center rounded-[3px] p-[6px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>

                  {/* triange */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
