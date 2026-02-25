import { Send } from 'lucide-react';
import React from "react"
import { Link } from "react-router-dom"
import { useForm, ValidationError } from "@formspree/react";

const Footer = () => {
  const [state, handleSubmit] = useForm("mlgwboey");

  return (
    <footer className="w-full bg-[#034b78] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">


        <div className="flex flex-col lg:flex-row justify-between gap-8">


          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
              Have a project in mind?
            </p>

            <Link to="/contact" className="group inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
                Let's Talk
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </h2>
              <div className="h-px bg-white mt-4 w-0 group-hover:w-full transition-all duration-500" />
            </Link>
          </div>


          <div className="space-y-4 w-full lg:w-[320px]">
            {state.succeeded ? (
              <div>
                <p className="text-xl font-extralight tracking-wide mb-1">
                  Thank you!
                </p>
                <p className="text-white/60 text-sm">
                  Your message has been sent successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">


                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-xl font-extralight tracking-wide">
                    Write us
                  </p>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="border border-white w-20 md:w-auto my-2 md:my-0 px-4 py-1.5 rounded-full text-xs hover:bg-white hover:text-black transition duration-300 inline-flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed tracking-tight"
                  >
                    {state.submitting ? "Sending..." : "Send"}
                    <Send size={14} />
                  </button>
                </div>


                <div className="tracking-wider">
                  <input
                    id="message"
                    type="text"
                    name="message"
                    placeholder="Message"
                    required
                    className="w-full bg-transparent border-b border-white/40 py-1 placeholder-white/60 focus:outline-none focus:border-white"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

 
                <div className="tracking-wider">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full bg-transparent border-b border-white/40 py-1 placeholder-white/60 focus:outline-none focus:border-white"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>


                <input type="text" name="_gotcha" className="hidden" />
              </form>
            )}
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-sm tracking-wide">


          <div className="space-y-3">
            <p className="text-white/40 uppercase text-xs tracking-widest">
              Navigation
            </p>
            <div className="space-y-1 flex flex-col">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/insights" className="footer-link">Insights</Link>
              <Link to="/services" className="footer-link">Services</Link>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <p className="text-white/40 uppercase text-xs tracking-widest">
              Social
            </p>
            <div className="space-y-1 flex flex-col">
              <a href="#" className="footer-link">Twitter ↗</a>
              <a href="" className="footer-link">Instagram ↗</a>
              <a href="#" className="footer-link">LinkedIn ↗</a>
            </div>
          </div>


          <div className="space-y-3">
            <p className="text-white/40 uppercase text-xs tracking-widest">
              Contact
            </p>
            <div className="space-y-1 flex flex-col">
              <a
                href="mailto:grapsdxb@gmail.com?subject=Project%20Inquiry"
                className="footer-link"
              >
                grapsdxb@gmail.com
              </a>
              <a
                href="https://wa.me/971505032497"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                WhatsApp ↗
              </a>
              <a
                href="https://maps.google.com/?q=Dubai,UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Dubai — UAE ↗
              </a>
            </div>
          </div>
        </div>


        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-8 pt-6 border-t border-white/10 text-xs text-white/60 text-center sm:text-left">
          <p>© 2026 Graps Tech</p>
          <a
            href="https://wa.me/923081633120"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Developed by Aisha
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;