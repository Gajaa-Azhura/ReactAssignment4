import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-10">
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Yo, Welcome to MC React!</h2>
          <p className="text-lg text-gray-600">
            This is the dopest React site you’ll ever see, built with mad skills and Tailwind CSS. 
            We’re here to deliver slick web solutions that vibe with your needs.
          </p>
        </section>
        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
          <p className="text-lg text-gray-600">
            From next-level web dev to clean UI/UX and consulting, we got you covered. 
            Hit us up on the Contact page to level up your game!
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
// export default Home;