import { motion } from 'framer-motion';

const Hero = () => {
  return (
    
    <div
  className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary bg-cover bg-center"
  style={{
    backgroundImage: `url('/backer.jpeg')`,
  }}
>
  <div
    className="absolute inset-0 bg-cover bg-center md:hidden"
    style={{ backgroundImage: "url('/back.jpeg')" }}
  ></div>
  <div
    className="absolute inset-0 bg-cover bg-center hidden md:block"
    style={{ backgroundImage: "url('/backer.jpeg')" }}
  ></div>
      
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center text-white px-4">
      <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="text-lg md:text-xl mb-2"
>
  COLLABORATION. DEVELOPMENT. LEADERSHIP.
</motion.p>
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl"
>
  Growth Driven Pioneers
  
</motion.h1>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          onClick={() => window.location.href = "#about"}
        >
          Get Started
        </motion.button>

        
      </div>



      
    </div>

    




  );
};

export default Hero;