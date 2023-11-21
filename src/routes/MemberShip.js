import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MembershipForm from "../components/Membershipform";

function MemberShip() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://tse1.mm.bing.net/th?id=OIP.oIPDGFni9OgBKxVX1NuNKAAAAA&pid=Api&P=0&h=220"
        title="MEMBERSHIP"
        btnClass="hide"
      />

      <MembershipForm />
      <Footer />
    </>
  );
}

export default MemberShip;
