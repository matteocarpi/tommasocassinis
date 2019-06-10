import React from "react";

import '../../assets/styles/contactPage.scss';

class ContactPage extends React.Component {
  render() {
    return (
      <div className="contact-page page-wrap">
        <main className="tommy">
        </main>

        <div className="side-column" >

          <img className="partner-logo" src="/assets/img/partners/Logo-Controluce-Nero.png" alt=""/>

          <h2>ROME / ITALY</h2>

          <a href="mailto:tommsocassinis@gmail.com">tommasocassinis@gmail.com</a>

          <div className="social">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tommaso_cassinis/"><i className=" first fab fa-instagram"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/tommasocassinis"><i className="fab fa-vimeo-v"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sommato.sinissac"><i className="fab fa-facebook-f"></i></a>
            {/* <a href=""><i class="fab fa-twitter"></i></a> */}
          </div>

        </div>
      </div>
    )
  }
}

export default ContactPage;
