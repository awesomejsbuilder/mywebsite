import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link className="hover:text-accent transition-all duration-500" href={""}>
        <RiYoutubeLine />
      </Link>
      <Link className="hover:text-accent transition-all duration-500" href={""}>
        <RiInstagramLine />
      </Link>
      <Link className="hover:text-accent transition-all duration-500" href={""}>
        <RiFacebookLine />
      </Link>
      <Link className="hover:text-accent transition-all duration-500" href={""}>
        <RiDribbbleLine />
      </Link>
      <Link className="hover:text-accent transition-all duration-500" href={""}>
        <RiBehanceLine />
      </Link>
      <Link className="hover:text-accent transition-all duration-500" href={""}>
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
