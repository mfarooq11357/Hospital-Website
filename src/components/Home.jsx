import React, { useState,useEffect } from 'react';
import "./Home.css"
import ScrollReveal from 'scrollreveal';
const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal();
    const revealConfig = {
      origin: 'bottom',
      distance: '10px',
      duration: 1000,
      delay: 100,
    };

    // Apply ScrollReveal to multiple classes
    sr.reveal('.hero, .values-container, .gHkLMpwoer, .logo-containerclasslogo, .purpose-container4321, .value-item, .hero h1, .hero h2, .hero p, .values-container h1, .value-item h2, .value-item p, .Kmnpotrety, .QwepOtresy, .MnkJoiUwep, .purpose-container4321 h1, .purpose-container4321 h3, .purpose-container4321 p ', revealConfig);
  }, []);
    return (
        
        <div>
  <main>
      <section className="hero">
        <div className="hero-text">
          <h1>In Pursuit Of Better Health</h1>
          <h2>"Surgical Cotton: A Vital Component in Medical Procedures"</h2>
          <p>
            Surgical cotton is an essential medical product that plays a critical
            role in maintaining aseptic conditions during surgical procedures and wound care.
          </p>
        </div>
        <div className="hero-image">
          <img src="https://nacmpk.com/wp-content/uploads/2023/11/bandageNF.png" alt="Surgical Cotton" />
        </div>
      </section>
    </main>
    <div className="values-container">
      <h1>Precision in Every Thread, Compassion in Every Roll: Crafting Quality, Delivering Care</h1>
      <div className="values-grid">
        <div className="value-item">
          <h2>Innovation</h2>
          <p>Elevating Healing Horizons: Our Surgical Cotton Innovations Redefine Precision, Redefine Care.</p>
        </div>
        <div className="value-item">
          <h2>Teamwork</h2>
          <p>Unleashing Synergy; Achieving Brilliance: Teamwork That Weaves Success Beyond Boundaries!</p>
        </div>
        <div className="value-item">
          <h2>Sustainable</h2>
          <p>Sustainability Woven in Every Strand: Crafting a Greener Future, Thread by Thread.</p>
        </div>
        <div className="value-item">
          <h2>Integrity</h2>
          <p>Integrity, the Thread That Binds Us: Weaving Trust, Quality, and Honor Into Every Fabric of Our Work.</p>
        </div>
        <div className="value-item">
          <h2>Excellence</h2>
          <p>Pursuing Excellence, One Thread at a Time: Where Precision Meets Passion, and Quality Unravels Brilliance.</p>
        </div>
        <div className="value-item">
          <h2>Commitment</h2>
          <p>Bound by Commitment, Woven with Dedication: Crafting Success Through Unyielding Determination in Every Fiber.</p>
        </div>
      </div>
    </div>



    <div className="gHkLMpwoer">
      <div className="JknpoUwert">
        <h1 className="Kmnpotrety">Committed to Quality</h1>
        <p className="QwepOtresy">
          Quality & Commitment Unbroken: Crafting Excellence, Stitching Trust in Every Fiber
        </p>
        <div className="IkjLerOtuw">
          <div className="MnkJoiUwep">
            <div className="IconWrapper">
              <i className="Icon DevIcon">🔧</i>
            </div>
            <div>
            <h2 className="Subtitle">Development</h2>
            <p className="Description">
              "Empowering Growth, One Thread at a Time: Stitching the Future through Innovation and Sustainable Development."
            </p></div>
          </div>
          <div className="MnkJoiUwep">
            <div className="IconWrapper">
              <i className="Icon RegIcon">📋</i>
            </div>
            <div>
            <h2 className="Subtitle">Regulatory</h2>
            <p className="Description">
              Navigating Success Through Compliance, Regulatory Excellence and Industry Standards
            </p>
            </div>
          </div>
          <div className="MnkJoiUwep">
            <div className="IconWrapper">
              <i className="Icon BioIcon">🧬</i>
            </div>
            <div>
            <h2 className="Subtitle">Biotech</h2>
            <p className="Description">
              Revolutionizing Health; Bridging Tomorrow’s Solutions of Biotech Innovation.
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ImageWrapper">
        <img src="https://nacmpk.com/wp-content/uploads/2021/01/pharma-company-template-products-section-img.jpg" alt="Lab" className="LabImage" />
      </div>
    </div>




    <div className="logo-containerclasslogo">
  <img src="https://nacmpk.com/wp-content/uploads/2023/11/iso2015N1.png" alt="ISO 9001 Certified" className="logoclasslogo" />
  <img src="https://nacmpk.com/wp-content/uploads/2023/11/dasfN.png" alt="IAF" className="logoclasslogo" />
  <img src="https://nacmpk.com/wp-content/uploads/2023/11/iso13485N.png" alt="PS" className="logoclasslogo" />
  <img src="https://nacmpk.com/wp-content/uploads/2023/11/IGC_LOGO_N.png" alt="UKAS" className="logoclasslogo" />
</div>
<div className="purpose-container4321">
  <h2>Our Purpose</h2>
  <h1>Unveiling Absorbency in Every Thread, Where Tradition Meets Technology</h1>
  <h3>Purifying Care, Stitching Comfort: Unraveling the Essence of Well-being Through Innovative Absorbent Cotton Solutions</h3>
  <p>
    Our purpose is to produce high-quality absorbent cotton products that meet the diverse needs of various industries, particularly healthcare. These products play a crucial role in medical applications, wound care, hygiene products, and other uses where absorbency and purity are paramount. The company aims to contribute to the well-being of individuals by providing reliable, safe, and effective absorbent cotton solutions. This involves a commitment to innovation, quality control, and adherence to industry standards, ensuring that the products meet or exceed customer expectations and regulatory requirements.
  </p>
</div>


          
        </div>
    );
};

export default Home;
