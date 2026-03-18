import trainImg from "@/assets/train-body.jpg";

const TrainBanner = () => (
  <section className="relative w-full h-[50vh] md:h-[60vh]">
    <img src={trainImg} alt="Training motivation" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gym-dark/40" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
      <p className="font-display font-bold text-3xl md:text-5xl text-primary-foreground mb-2">
        Train <span className="text-primary">your</span> body
      </p>
      <p className="font-display font-bold text-3xl md:text-5xl text-primary-foreground">
        It's time to convince your <span className="text-primary">mind</span>
      </p>
    </div>
  </section>
);

export default TrainBanner;
