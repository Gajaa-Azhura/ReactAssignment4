import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="main-container">
        <section className="section">
          <h2 className="section-title">Yo, Welcome to MC React!</h2>
          <p className="section-text">
            Welcome to MC React, your one-stop destination for cutting-edge web solutions! We’re a team of passionate developers and designers who specialize in creating modern, responsive, and user-friendly websites that help your business stand out in the digital world. Using the latest technologies like React, Tailwind CSS, and more, we craft experiences that are not only visually stunning but also highly functional.
          </p>
          <p className="section-text">
            Whether you’re a small startup looking to make your mark or an established brand wanting to revamp your online presence, we’ve got the skills and expertise to bring your vision to life. Let’s build something amazing together!
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">What We Do</h2>
          <p className="section-text">
            At MC React, we offer a wide range of services tailored to meet your needs. Our goal is to help you succeed online, and we do that by delivering top-notch solutions that drive results.
          </p>
          <ul className="services-list">
            <li className="service-item">Custom Web Development: We build fast, scalable, and secure websites using React and modern frameworks.</li>
            <li className="service-item">UI/UX Design: Our designs are not just pretty—they’re intuitive and user-focused, ensuring a seamless experience.</li>
            <li className="service-item">Consulting & Strategy: Need help planning your digital journey? We provide expert advice to help you grow.</li>
            <li className="service-item">Maintenance & Support: We don’t just build and leave—we’re here to support and maintain your site for the long haul.</li>
          </ul>
          <p className="section-text">
            Ready to take your online presence to the next level? Let’s chat about your project and see how we can help you achieve your goals.
          </p>
          <Link to="/contact">
            <button className="cta-button">Contact Us Now!</button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}