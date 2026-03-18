import yogaImg from "@/assets/yoga.jpg";

const WhyFitness = () => (
  <section id="about" className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
    <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground mb-10">
      WHY <span className="text-primary">FITNESS</span> IS IMPORTANT ?
    </h2>
    <div className="flex flex-col md:flex-row gap-10 items-center">
      <div className="md:w-2/5 shrink-0">
        <div className="border-2 border-primary rounded-lg overflow-hidden">
          <img src={yogaImg} alt="Fitness class" className="w-full h-64 md:h-80 object-cover" />
        </div>
      </div>
      <p className="font-body text-base md:text-lg text-foreground leading-relaxed text-justify">
        Being physically active improves overall health and well-being. It helps enhance brain function,
        manage weight, and reduce the risk of various diseases. Regular exercise strengthens bones and
        muscles, while also improving your ability to perform daily activities with ease. Even small
        amounts of physical activity can make a positive difference in your life.
      </p>
    </div>
  </section>
);

export default WhyFitness;
