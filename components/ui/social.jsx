import Link from "next/link";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/jayampathiw" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/jayampathy-wijesena/",
  },
  {
    icon: <FaStackOverflow />,
    path: "https://stackoverflow.com/users/5192289/jayampathy-wijesena",
  },
];

const Social = ({ containerStyles, IconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={IconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
