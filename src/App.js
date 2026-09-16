import "./App.css";

import girl from "./assets/snap.png";
import user1 from "./assets/user1.png";
import user2 from "./assets/user2.png";
import user3 from "./assets/user3.png";
import user4 from "./assets/user4.png";

const title = "HAPPY 22ND BIRTHDAY Chinmaye!";

function App() {
  return (
    <div className="birthday-page">

      {/* ================================
          HERO / BIRTHDAY SCENE
          ================================ */}

      <section className="birthday-hero">

        {/* Background confetti */}
        <div className="confetti-container">
          {Array.from({ length: 45 }).map((_, i) => (
            <span
              key={i}
              className={`confetti confetti-${i % 8}`}
            >
              {i % 3 === 0
                ? "●"
                : i % 3 === 1
                ? "♥"
                : "✦"}
            </span>
          ))}
        </div>


        {/* Birthday title */}
        <div className="birthday-title">
          {title.split("").map((letter, index) => (
            <span
              key={index}
              className="title-letter"
              style={{
                "--letter-delay": `${index * 0.045}s`
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>


        {/* People */}
        <div className="person person-1">
          <img src={user1} alt="Birthday guest" />
        </div>

        <div className="person person-2">
          <img src={user2} alt="Birthday guest" />
        </div>

        <div className="person person-3">
          <img src={user3} alt="Birthday guest" />
        </div>

        <div className="person person-4">
          <img src={user4} alt="Birthday guest" />
        </div>


        {/* Birthday girl */}
        <div className="girl-container">
          <img
            className="birthday-girl"
            src={girl}
            alt="Birthday girl holding a birthday cake"
          />
        </div>


        {/* Sparkles */}
        <div className="sparkle sparkle-1">✦</div>
        <div className="sparkle sparkle-2">✧</div>
        <div className="sparkle sparkle-3">✦</div>
        <div className="sparkle sparkle-4">✧</div>
        <div className="sparkle sparkle-5">♥</div>


        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span>scroll for a little surprise</span>
          <div className="scroll-arrow">↓</div>
        </div>

      </section>


      {/* ================================
          BIRTHDAY MESSAGE
          ================================ */}

      <section className="message-section">

        <div className="message-card">

          <h2>Dear Chinmaye,</h2>

          <p>
            Wishing you the happiest 22nd birthday! 🎂
          </p>

          <p>
            This little corner of the internet is just for you.
            I hope your upcoming year is filled with positivity ( for once XD ), laughter,
            dreams coming true and lots of beautiful
            memories  ✨.
          </p>

        </div>

      </section>

    </div>
  );
}

export default App;