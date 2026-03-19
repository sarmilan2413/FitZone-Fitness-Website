import transImg from "@/assets/transformation.png";
import { Play } from "lucide-react";

const Transformation = () => (
  <section id="classes" className="py-20 px-6 md:px-16 max-w-7xl mx-auto text-center">
    <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground mb-10">
      GET YOUR <span className="text-primary">BODY</span> TRANSFORMATION IN <span className="text-primary">60</span> DAYS !!!
    </h2>
    <div className="relative inline-block border-2 border-primary rounded-lg overflow-hidden max-w-2xl w-full">
      <img src={transImg} alt="Body transformation" className="w-full h-72 md:h-96 object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-primary-foreground/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <Play className="w-7 h-7 text-gym-dark ml-1" />
        </div>
      </div>
    </div>
  </section>
);

export default Transformation;
