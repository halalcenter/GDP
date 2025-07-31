import { motion } from 'framer-motion';

const features = [
  {
    title: "Design Thinking Mindset",
    description: "Unlock a creative, user-first approach to problem-solving that bridges design and tech seamlessly.",
  },
  {
    title: "2-Day Online Bootcamp",
    description: "Hosted by Graphixel (GDP), this bootcamp brings hands-on learning, mentorship, and community.",
  },
  {
    title: "From Figma to UX Docs",
    description: "Master UI/UX essentials like wireframing, prototyping, and building complete design systems.",
  },
  {
    title: "Portfolio Ready",
    description: "Build real projects, take part in live challenges, and walk away with solid portfolio pieces.",
  },
  {
    title: "2-Day Online Bootcamp",
    description: "Hosted by Graphixel (GDP), this bootcamp brings hands-on learning, mentorship, and community.",
  },
  {
    title: "2-Day Online Bootcamp",
    description: "Hosted by Graphixel (GDP), this bootcamp brings hands-on learning, mentorship, and community.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-transparent text-white pt-32 pb-20 px-4 md:px-20" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-jetbrains text-center text-vision-blue mb-8"
        >
          About CodeStruct
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-950 max-w-3xl mx-auto mb-12 text-lg"
        >
          VisionCraft is a dynamic 2-day UI/UX bootcamp designed to immerse students and creators into the world of user-centered design. Discover how design works—from buttons to flows—and build skills that prepare you for the digital industry.
        </motion.p>

        <div className="grid gap-y-8 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
  {features.map((feature, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: idx * 0.14 }}
      className="bg-vision-blue rounded-3xl p-8 shadow-xl border border-gray-700 hover:shadow-vision-gold transition-all duration-300 group focus-within:ring-2 ring-vision-gold"
      tabIndex={0}
    >
      <h3 className="text-2xl font-bold text-vision-gold mb-3 group-hover:underline">
        {feature.title}
      </h3>
      <p className="text-gray-300 text-base leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default AboutSection;
