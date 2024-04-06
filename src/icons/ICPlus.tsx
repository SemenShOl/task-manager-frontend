import { motion } from "framer-motion";

type Props = {
  onClick?: () => void;
  className: string;
};

export const ICPlus = ({ onClick, className }: Props) => {
  return (
    <motion.svg
      whileHover={{
        rotate: 360,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      className={className}
      onClick={onClick}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="35"
      width="35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"></path>
    </motion.svg>
  );
};
