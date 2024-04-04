export const listVariants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
  hidden: {
    x: -20,
    opacity: 0,
  },
};
export const cellVariants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.01,
    },
  }),
  hidden: {
    x: -20,
    opacity: 0,
  },
};
