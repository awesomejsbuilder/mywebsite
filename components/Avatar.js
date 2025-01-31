import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/avatar3.png'} alt="" width={631} height={563} className="w-full h-full translate-z-0"/>
  </div>;
};

export default Avatar;
