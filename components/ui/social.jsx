import Link from "next/link";
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, IconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={IconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
