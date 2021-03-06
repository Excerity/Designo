//  navbar animations
export const navVariants = {
    open: {
      opacity: 1,
      display: 'grid',
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      display: 'none',
      transition: {
        staggerDirection: -1,
      },
    },
  };;
  
  export const navItemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        stiffness: 1000,
        velocity: -100,
      },
    },
    closed: {
      display: 'none', 
      opacity: 0, 
      y: 50,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }
  