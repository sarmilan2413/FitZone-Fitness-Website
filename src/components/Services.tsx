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
    <div className="grid gap-10 md:grid-cols-2 md:gap-14">
      {services.map((s) => (
        <div key={s.title} className="flex flex-col">
          <div className="w-full overflow-hidden rounded-lg border-2 border-primary">
            <img src={s.img} alt={`${s.title} ${s.highlight}`} className="w-full h-72 object-cover" />
          </div>
          <h3 className="mt-4 text-center font-display text-2xl font-bold md:text-3xl">
            {s.title} <span className="text-primary">{s.highlight}</span>
          </h3>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <ul className="list-disc space-y-1 pl-6 font-body text-foreground md:text-lg">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <button className="self-start whitespace-nowrap rounded-full bg-[#2a1e12] px-5 py-2 font-display text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-black sm:mb-1 sm:self-auto">
              Learn more..
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
