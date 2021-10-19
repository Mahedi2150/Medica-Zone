import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section class="contact-section">
        <div class="contact-bg">
          <h3>Get in Touch with Us</h3>
          <h2>contact us</h2>
          <div class="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p class="text">
            “To be a doctor, then, means much more than to dispense pills or to
            patch up or repair torn flesh and shattered minds. To be a doctor is
            to be an intermediary between man and GOD” (Felix Marti-Ibanez in To
            Be a Doctor).
          </p>
        </div>

        <div class="contact-body">
          <div class="contact-info">
            <div>
              <span>
                <i class="fas fa-mobile-alt"></i>
              </span>
              <span>Phone No.</span>
              <span class="text">+8801709047889</span>
            </div>
            <div>
              <span>
                <i class="fas fa-envelope-open"></i>
              </span>
              <span>E-mail</span>
              <span class="text">mahedi.hasan8089@gmail.com</span>
            </div>
            <div>
              <span>
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <span>Address</span>
              <span class="text">
                Dhanmondi Main Office, Dhaka, Bangladesh, 1217
              </span>
            </div>
            <div>
              <span>
                <i class="fas fa-clock"></i>
              </span>
              <span>Opening Hours</span>
              <span class="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
            </div>
          </div>

          <div class="contact-form">
            <form>
              <div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <input type="email" class="form-control" placeholder="E-mail" />
                <input type="text" class="form-control" placeholder="Phone" />
              </div>
              <textarea
                rows="5"
                placeholder="Message"
                class="form-control"
              ></textarea>
              <input type="submit" class="btn-regular" value="send message" />
            </form>

            <div>
              <img
                src="https://image.freepik.com/free-vector/medical-video-call-consultation-illustration_88138-415.jpg"
                alt=""
              />
            </div>
          </div>
        </div>


      </section>
    </div>
  );
};

export default Contact;
