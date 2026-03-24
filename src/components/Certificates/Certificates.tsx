import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Certificates() {
  return (
    <Container id="certificates">
      <ScrollAnimation animateIn="fadeInLeft">
       <h2>CERTIFICATES</h2>
       {/* <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
         <div className="certificate-item">
           <div className="cert-header">
            <h3>Cloud Computing</h3>
            <span className="date">Apr’2025</span>
          </div>
          <p>NPTEL | Certificate</p>
        </div>
      </ScrollAnimation> */}

      </ScrollAnimation>

      <div className="certificates-content">
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <div className="certificate-item">
            <div className="cert-header">
              <h3>Social Networks</h3>
              <span className="date">Sep’2025</span>
            </div>
            <p>NPTEL | Certificate</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <div className="certificate-item">
            <div className="cert-header">
              <h3>Computational Theory</h3>
              <span className="date">Sep’2025</span>
            </div>
            <p>Infosys Springboard | Certificate</p>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
          <div className="certificate-item">
            <div className="cert-header">
              <h3>Master Generative AI & Generative AI Tools</h3>
              <span className="date">Aug’2025</span>
            </div>
            <p>Certificate</p>
          </div>
        </ScrollAnimation> */}

        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <div className="certificate-item">
            <div className="cert-header">
              <h3>Fundamentals of Data Structures using C++</h3>
              <span className="date">Jul’2025</span>
            </div>
            <p>Lovely Professional University |  Certificate</p>
          </div>
        </ScrollAnimation>

        
      </div>
    </Container>
  )
}
