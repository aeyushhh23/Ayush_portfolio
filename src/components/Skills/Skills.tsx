import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Skills() {
  return (
    <Container id="skills">
      <ScrollAnimation animateIn="fadeInLeft">
        <h2>SKILLS</h2>
      </ScrollAnimation>

      <div className="skills-content">
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <div className="skill-category">
            <h3>Languages:</h3>
            <p>C, C++, Java, Python, JavaScript, TypeScript, PHP, HTML5, CSS3</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <div className="skill-category">
            <h3>Frameworks:</h3>
            <p>Next.js, React.js, Express.js, Node.js, Socket.io, Tailwind CSS, REST API Development</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
          <div className="skill-category">
            <h3>Database & Services:</h3>
            <p>PostgreSQL, MySQL, MongoDB, AWS (Basic), Linux, Postman</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <div className="skill-category">
            <h3>Soft Skills:</h3>
            <p>Logical Analysis, Algorithmic Thinking, Task Prioritization, Rapid Tool Adoption</p>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  )
}
