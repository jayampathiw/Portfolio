import React from "react";
import { 
  DiJavascript1, DiJava, DiNodejsSmall, DiHtml5, DiCss3, DiMongodb 
} from 'react-icons/di';
import { 
  FaReact, FaAngular, FaAws, FaEthereum, FaDocker, FaGitAlt, FaGithub, FaNpm, FaGitlab, 
  FaShieldAlt, FaFileAlt, FaCloudDownloadAlt, FaChartLine, FaCogs, FaClipboardCheck, 
  FaEnvelope, FaLock, FaIdCard, FaTachometerAlt, FaVial, FaMobileAlt, FaSass, FaBootstrap, FaCubes, 
  FaCodeBranch, FaJenkins
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiSpringboot, SiGraphql, SiApollographql, SiSolidity, 
  SiWeb3Dotjs, SiBlockchain, SiOpensea, SiLayer5, SiHardhat, SiFoundry, SiIpfs, 
  SiChainlink, SiRxjs, SiNgrx, SiRedux, SiSass, SiBootstrap, SiTailwindcss, SiMaterialui, 
  SiJest, SiJasmine, SiKarma, SiCypress, SiRabbitmq, SiOracle, SiMysql, SiPostgresql, 
  SiWebpack, SiBamboo, SiKubernetes, SiJira, SiLog4j, SiTenderly, SiOpenzeppelin, 
  SiJsonwebtokens, SiKeycloak, SiAtlassian, SiGnuprivacyguard, SiHiveBlockchain, SiReactivex, SiMaterialdesign
} from 'react-icons/si';
import { 
  AiFillApi, AiOutlineCloud, AiOutlineContainer 
} from 'react-icons/ai';
import { 
  MdAccessibility, MdOutlineSecurity 
} from 'react-icons/md';
import { 
  RiDatabase2Fill, RiGitRepositoryFill 
} from 'react-icons/ri';
import { TbProtocol } from "react-icons/tb";

const iconMap = {
  DiJavascript1,
  SiTypescript,
  DiJava,
  FaAngular,
  FaReact,
  DiNodejsSmall,
  SiSpringboot,
  DiHtml5,
  DiCss3,
  SiGraphql,
  SiApollographql,
  SiSolidity,
  SiWeb3Dotjs,
  FaEthereum,
  SiBlockchain,
  SiOpensea,
  SiLayer5,
  SiHardhat,
  SiFoundry,
  SiIpfs,
  SiChainlink,
  SiRxjs,
  SiNgrx,
  SiRedux,
  SiSass,
  FaSass,
  FaBootstrap,
  SiTailwindcss,
  SiMaterialui,
  SiMaterialdesign,
  MdAccessibility,
  AiFillApi,
  RiDatabase2Fill,
  SiOracle,
  SiMysql,
  SiPostgresql,
  SiRabbitmq,
  FaGitAlt,
  FaDocker,
  SiKubernetes,
  FaJenkins,
  SiWebpack,
  FaNpm,
  SiJira,
  FaGithub,
  SiBamboo,
  SiLog4j,
  FaAws,
  SiTenderly,
  TbProtocol,
  SiOpenzeppelin,
  SiJest,
  SiJasmine,
  SiKarma,
  SiNextdotjs,
  SiCypress,
  MdOutlineSecurity,
  FaGitlab,
  RiGitRepositoryFill,
  SiJsonwebtokens,
  SiKeycloak,
  FaShieldAlt,
  FaFileAlt,
  FaCloudDownloadAlt,
  FaChartLine,
  FaCogs,
  FaClipboardCheck,
  FaEnvelope,
  FaLock,
  DiMongodb,
  SiHiveBlockchain,
  SiReactivex,
  FaIdCard,
  FaTachometerAlt,
  FaVial,
  FaMobileAlt,
  FaCubes,
  FaCodeBranch,
  SiGnuprivacyguard,
  AiOutlineContainer,
  AiOutlineCloud,
  SiAtlassian,
  
};

const TechnologyIcon = ({ icon, className = "" }) => {
  const IconComponent = iconMap[icon];

  if (!IconComponent) {
    console.warn(`Icon not found: ${icon}`);
    return null;
  }

  return <IconComponent className={className} />;
};

export default TechnologyIcon;
