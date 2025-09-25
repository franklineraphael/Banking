import { Section } from "lucide-react";
import React from "react";
import HeaderBox from "../components/HeaderBox";

const Home = () => {
  const loggedIn = { firstName: "Frankline" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Acess and manage your account and transactions efficiently."
          />
          Welcome, Frankline
        </header>
      </div>
    </section>
  );
};

export default Home;
