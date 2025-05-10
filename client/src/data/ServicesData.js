import { faCalendar, faShield, faStar, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const services = [
  {
    icon: <FontAwesomeIcon icon={faUserGroup} />,
    title: "Pet Sitting",
    price: "From $25/hour",
    description:
      "Professional in-home pet sitting services with daily updates and care routines tailored to your pet's needs.",
    features: [
      "Feeding & Water",
      "Playtime & Exercise",
      "Medication Administration",
      "Daily Updates",
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faStar} />,
    title: "Dog Walking",
    price: "From $20/walk",
    description:
      "Regular exercise and outdoor activities for your canine companion, including individual or group walks.",
    features: [
      "Individual Walks",
      "Group Walks",
      "Park Visits",
      "Basic Training",
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faCalendar} />,
    title: "Overnight Care",
    price: "From $75/night",
    description:
      "24/7 care for your pets in the comfort of your own home, ensuring they maintain their routine.",
    features: [
      "Overnight Stay",
      "Evening & Morning Care",
      "House Security",
      "Emergency Response",
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faShield} />,
    title: "Pet Daycare",
    price: "From $35/day",
    description:
      "Supervised daycare services where your pet can socialize and play in a safe environment.",
    features: [
      "Supervised Play",
      "Socialization",
      "Training Sessions",
      "Health Monitoring",
    ],
  },
];