import { FaLock, FaPlane, FaUser, FaFilter, FaExclamationTriangle, FaFingerprint } from 'react-icons/fa';

type dataProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const data: dataProps[] = [
  {
    title: "Secure Private Browsing",
    description: "Experience secure private browsing. The gateway filter obfuscates your digital footprint, ensuring sensitive data remains confidential.",
    icon: <FaLock/>,
  },
  {
    title: "Offline Mode Functionality",
    description: "Our robust offline mode lets you use key features without an internet connection. It caches essential data for uninterrupted access.",
    icon: <FaPlane/>,
  },
  {
    title: "User-Friendly Interface",
    description: "Navigate with an intuitive interface. Buttons and menus are strategically placed to enhance your experience, simplifying complex tasks.",
    icon: <FaUser/>,
  },
  {
    title: "Advanced Filtering Options",
    description: "Gain granular control with advanced filtering. Create custom rules to block specific domains or content, building a personalized environment.",
    icon: <FaFilter/>,
  },
  {
    title: "Real-Time Threat Alerts",
    description: "Stay ahead of online threats with real-time alerts. The system monitors your connection and instantly notifies you of suspicious activities.",
    icon: <FaExclamationTriangle/>,
  },
  {
    title: "Seamless One-Tap Activation",
    description: "Activate your private gateway with a single tap. This streamlined approach makes privacy and security accessible to everyone, instantly protecting you.",
    icon: <FaFingerprint/>,
  },
];