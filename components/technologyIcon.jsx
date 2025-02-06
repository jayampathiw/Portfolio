"use client";

import React from "react";
import {
  DiJavascript1,
  DiJava,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiMongodb,
} from "react-icons/di";
import {
  FaReact,
  FaAngular,
  FaAws,
  FaEthereum,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaGitlab,
  FaShieldAlt,
  FaFileAlt,
  FaCloudDownloadAlt,
  FaChartLine,
  FaCogs,
  FaClipboardCheck,
  FaEnvelope,
  FaLock,
  FaIdCard,
  FaTachometerAlt,
  FaVial,
  FaMobileAlt,
  FaSass,
  FaBootstrap,
  FaCubes,
  FaCodeBranch,
  FaJenkins,
  FaDatabase,
  FaServer,
  FaCode,
  FaBrain, // Added alternative icons
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiSpringboot,
  SiGraphql,
  SiApollographql,
  SiSolidity,
  SiWeb3Dotjs,
  SiOpenzeppelin,
  SiIpfs,
  SiChainlink,
  SiNgrx,
  SiRedux,
  SiTailwindcss,
  SiMaterialdesign,
  SiJest,
  SiJasmine,
  SiCypress,
  SiRabbitmq,
  SiOracle,
  SiMysql,
  SiPostgresql,
  SiWebpack,
  SiKubernetes,
  SiJira,
  SiJsonwebtokens,
  SiKeycloak,
  SiGnuprivacyguard,
  SiReactivex,
} from "react-icons/si";
import { AiFillApi, AiOutlineCloud, AiOutlineContainer } from "react-icons/ai";
import { MdAccessibility, MdOutlineSecurity } from "react-icons/md";
import { TbProtocol } from "react-icons/tb";

// Mapping of icon identifiers to components
const iconMap = {
  // Keep existing working mappings
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
  SiOpenzeppelin,
  SiIpfs,
  SiChainlink,
  SiNgrx,
  SiRedux,
  FaSass,
  FaBootstrap,
  SiTailwindcss,
  SiMaterialdesign,
  MdAccessibility,
  AiFillApi,
  FaDatabase, // Replacement for some database icons
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
  FaServer, // Alternative for missing server icons
  FaAws,
  TbProtocol,
  SiJest,
  SiJasmine,
  SiCypress,
  MdOutlineSecurity,
  FaGitlab,
  FaCode, // Alternative for missing code icons
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
  FaBrain, // Alternative for missing brain icons
};

const TechnologyIcon = ({ icon, className = "" }) => {
  const IconComponent = iconMap[icon];

  if (!IconComponent) {
    console.warn(`Icon not found: ${icon}`);
    // Return a default icon or null
    return <FaCode className={className} />;
  }

  return <IconComponent className={className} />;
};

export default TechnologyIcon;
