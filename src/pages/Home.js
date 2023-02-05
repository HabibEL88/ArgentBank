import React from "react";

import Card from "../components/Card";
import Chat from "../assets/icon-chat.png";
import Money from "../assets/icon-money.png";
import Security from "../assets/icon-security.png";

import "../style/Home.css";

const Home = () => {

  const cardData = [
    {
      icon: Chat,
      title:"You are our #1 priority",
      text:"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
      icon: Money,
      title:"More savings means higher rates",
      text:"The more you save with us, the higher your interest rate will be!"
    },
    {
      icon: Security,
      title:"Security you can trust",
      text:"We use top of the line encryption to make sure your data and money is always safe."
    }
  ]

  return (
    <React.Fragment>
      <main className="home">
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {
            cardData.map((data) => {
              return (
                <Card icon={data.icon} title={data.title} text={data.text}></Card>
              )
            })
          }
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
