import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"



export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:ayushpandey02310@gmail.com"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:ayushpandey02310@gmail.com">ayushpandey02310@gmail.com</a>
        </div>
        <div>
          <a href="tel:+916295907652"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+916295907652">(+91) 6295907652</a>
        </div>
      </div>
    </Container>
  )
}