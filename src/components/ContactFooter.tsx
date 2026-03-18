import { Instagram, Twitter } from "lucide-react";

const ContactFooter = () => (
  <footer id="contact" className="bg-gym-dark py-16 px-6 md:px-16">
    <div className="max-w-2xl mx-auto space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full bg-transparent border-b border-muted-foreground/40 py-3 text-primary-foreground font-body placeholder:text-muted-foreground/60 outline-none focus:border-primary transition-colors"
      />
      <input
        type="email"
        placeholder="Your E-mail"
        className="w-full bg-transparent border-b border-muted-foreground/40 py-3 text-primary-foreground font-body placeholder:text-muted-foreground/60 outline-none focus:border-primary transition-colors"
      />
      <textarea
        placeholder="Message"
        rows={3}
        className="w-full bg-transparent border-b border-muted-foreground/40 py-3 text-primary-foreground font-body placeholder:text-muted-foreground/60 outline-none focus:border-primary transition-colors resize-none"
      />
    </div>
    <div className="max-w-2xl mx-auto mt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
      <p className="text-primary font-display font-semibold">Contact us : +94 76 225 4861</p>
      <div className="flex items-center gap-3">
        <span className="text-primary font-display font-semibold">Follow us :</span>
        <Instagram className="w-5 h-5 text-primary-foreground hover:text-primary cursor-pointer transition-colors" />
        <Twitter className="w-5 h-5 text-primary-foreground hover:text-primary cursor-pointer transition-colors" />
        <span className="text-primary-foreground text-sm">@fitzone</span>
      </div>
    </div>
  </footer>
);

export default ContactFooter;
