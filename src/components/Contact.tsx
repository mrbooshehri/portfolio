import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, handleSubmit] = useForm("xqakdnak");

  useEffect(() => {
    const formElement = formRef.current as HTMLFormElement;

    if (state) {
      formElement.reset();
    }
  }, [state]);

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Get in Touch
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Contact Information
            </h3>
            <div className="flex items-center gap-4 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-emerald-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
              <span>mrbooshehri@gmail.comi]k</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-emerald-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              <span>+98 (936) 145 6697</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-emerald-400"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              <span>Tehran, Tehran</span>
            </div>
          </div>
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>
              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 resize-none py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition disabled:opacity-35"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
