import basicImg from "@/assets/basic-fitness.png";
import bodyImg from "@/assets/bodybuilding.png";

const services = [
  {
    img: basicImg,
    title: "Basic",
    highlight: "Fitness",
    items: ["Stretching and flexibility", "Aerobic exercise", "Strength training", "Sports nutrition"],
  },
  {
    img: bodyImg,
    title: "Body",
    highlight: "Building",
    items: ["Professional bodybuilding", "Classic physique", "Men's physique", "Women's physique"],
  },
];

const Services = () => (
  <section id="services" className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
    <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground mb-12">
      OUR <span className="text-primary">SERVICES</span> :
    </h2>
    <div className="grid md:grid-cols-2 gap-10">
      {services.map((s) => (
        <div key={s.title} className="flex flex-col items-center">
          <div className="border-2 border-primary rounded-lg overflow-hidden w-full max-w-sm">
            <img src={s.img} alt={`${s.title} ${s.highlight}`} className="w-full h-72 object-cover" />
          </div>
          <h3 className="font-display font-bold text-lg mt-4">
            {s.title} <span className="text-primary">{s.highlight}</span>
          </h3>
          <ul className="mt-3 space-y-1 font-body text-foreground">
            {s.items.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                {item}
              </li>
            ))}
          </ul>
          <button className="mt-4 px-6 py-2 bg-gym-dark text-primary-foreground font-display font-semibold text-sm rounded hover:bg-primary hover:text-primary-foreground transition-colors">
            Learn more
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
