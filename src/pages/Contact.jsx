import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-5">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="5"
              placeholder="What's good?"
            ></textarea>
          </div>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Send It!
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
// export default Contact;