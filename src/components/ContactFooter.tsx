import { FormEvent, useState } from "react";
import { Instagram, Twitter } from "lucide-react";

const ContactFooter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill all fields");
    } else {
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <footer id="contact" className="bg-gym-dark px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto w-full max-w-5xl rounded-none bg-black px-6 py-8 md:px-10 md:py-10">
        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl rounded-2xl bg-[#2a1e12] p-4 md:p-5">
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="h-10 w-full rounded-full border border-transparent bg-white px-4 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
            />
            <input
              type="email"
              placeholder="Your E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-10 w-full rounded-full border border-transparent bg-white px-4 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
            />
            <textarea
              placeholder="Message"
              rows={1}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full resize-none rounded-full border border-transparent bg-white px-4 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex rounded-full bg-black px-5 py-2 font-display text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-black"
          >
            Send Message
          </button>
        </form>

        <div className="mx-auto mt-4 flex w-full max-w-2xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display font-semibold text-primary">Contact us : +94 76 225 4861</p>
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold text-primary">Follow us :</span>
            <Instagram className="h-4 w-4 cursor-pointer text-primary transition-colors hover:text-primary-foreground" />
            <Twitter className="h-4 w-4 cursor-pointer text-primary transition-colors hover:text-primary-foreground" />
            <span className="text-sm font-semibold text-primary-foreground">@fitzone</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
