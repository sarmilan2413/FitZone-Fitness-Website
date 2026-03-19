import heroImg from "@/assets/hero.png";

const HeroSection = () => (
  <section id="home" className="px-4 pb-8 pt-2 md:px-8 lg:px-12">
    <div className="relative mx-auto w-full max-w-[1120px] overflow-hidden rounded-[2rem] border border-primary/25 shadow-[0_20px_55px_rgba(0,0,0,0.3)]">
      <img
        src={heroImg}
        alt="Woman lifting barbell in gym"
        className="h-[72vh] min-h-[520px] w-full object-cover object-center md:h-[78vh] md:object-[center_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/45 to-[#5f430c]/45" />
      <div className="absolute inset-0 z-10 flex items-end px-6 pb-14 md:px-16">
        <div className="flex w-full flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[620px]">
            
            <h1 className="font-display text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-[3.3rem]">
              LET'S <span className="text-primary">GRIND</span> YOUR BODY
            </h1>
          </div>

          <div className="text-left md:text-right">
            <p className="mb-5 font-display text-3xl font-bold text-primary-foreground md:text-[2.6rem]">
              GET FIT WITH <span className="text-primary">FITZONE</span>
            </p>
            
            <a
              href="#contact"
              className="inline-block rounded-2xl bg-[#5f430c]/85 px-8 py-3 font-display text-lg font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-black"
            >
              Become a member
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
