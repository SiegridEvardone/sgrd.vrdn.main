import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1k77p57',
        'template_scqyiiy',
        form.current,
        'c_3Df2kf9A48x2E4N'
      )
      .then(
        () => {
          alert("Message sent successfully! 🎉");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-body min-h-fit p-6 lg:p-12"
    >
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-40 pointer-events-none z-0"></div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl">CONTACT</h3>
        <span className="text-4xl font-semibold text-style p-0 bn40 inline-block">
          Let's Connect!
        </span>
        <p className="text-secondary text-lg mt-1 p-1">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6 text-left px-5 sm:px-20 mt-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap gap-2">
          <div className="flex-grow">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name:
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-400 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          <div className="flex-grow">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-400 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message:
          </label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 border border-gray-400 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 rounded text-white text-style bg-[linear-gradient(to_right,_#ff9100,_#f10366,_#6173ff)] hover:brightness-110 transition"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </section>
  );
};
