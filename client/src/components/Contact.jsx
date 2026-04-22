const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-cyan-400 font-mono text-xl mb-4">04. What's Next?</h2>
      <h1 className="text-6xl font-bold text-white mb-6">Get In Touch</h1>
      <p className="text-slate-400 mb-10 text-xl leading-relaxed">
        I'm currently looking for internship opportunities or freelance projects. 
        Whether you have a question or just want to say hi, my inbox is always open!
      </p>
      
      <a 
        href="mailto:imeshnbandara826@gmail.com" 
        className="inline-block border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-md font-bold hover:bg-cyan-400/10 transition-all"
      >
        Say Hello
      </a>

      <div className="mt-16 flex justify-center gap-8 text-slate-400 text-lg">
        <a href="https://github.com/imeshbandara" className="hover:text-cyan-400 transition">GitHub</a>
        <a href="https://linkedin.com/in/imesh-bandara-57a129388" className="hover:text-cyan-400 transition">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;