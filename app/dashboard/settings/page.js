import Link from "next/link";

export default function Settings() {
  return (
    <div className="settings">
      <h1>Welcome to KNUST Online Voting Platform</h1>
      <p>
        Our platform enables secure and convenient voting from the comfort of your home or on the go. Make your voice heard in school elections and
        decisions that matter to you.
      </p>

      <div className="settings-features">
        <div className="settings-feature">
          <h3>Secure Voting</h3>
          <p>Utilizing advanced encryption and security measures to ensure your vote is private and tamper-proof.</p>
        </div>
        <div className="settings-feature">
          <h3>User-Friendly Interface</h3>
          <p>An intuitive interface designed for ease of use, making voting accessible to everyone.</p>
        </div>
        <div className="settings-feature">
          <h3>Transparent Process</h3>
          <p>Providing transparency in the voting process with audit trails and verification mechanisms.</p>
        </div>
        <div className="settings-feature">
          <h3>Mobile Compatibility</h3>
          <p>Optimized for mobile devices to allow voting anytime, anywhere.</p>
        </div>
        <div className="settings-feature">
          <h3>Multi-language Support</h3>
          <p>Available in multiple languages to accommodate a diverse student body.</p>
        </div>
        <div className="settings-feature">
          <h3>Real-time Updates</h3>
          <p>Live updates on voting progress and results to keep participants informed.</p>
        </div>
        <div className="settings-feature">
          <h3>Anonymous Voting</h3>
          <p>Ensuring voter anonymity throughout the entire voting process.</p>
        </div>
        <div className="settings-feature">
          <h3>Post-election Audit</h3>
          <p>Conducting audits to verify the accuracy and integrity of voting results.</p>
        </div>
        <div className="settings-feature">
          <h3>Data Protection</h3>
          <p>Strict adherence to data protection regulations to safeguard voter information.</p>
        </div>
        <div className="settings-feature">
          <h3>Scalability</h3>
          <p>Designed to handle increased traffic and data demands during peak periods.</p>
        </div>
        <div className="settings-feature">
          <h3>Integration with Student Information Systems</h3>
          <p>Integration with existing student databases for seamless voter registration.</p>
        </div>
        <div className="settings-feature">
          <h3>Publicity and Promotion</h3>
          <p>Effective promotion to encourage voter participation and engagement.</p>
        </div>
        <div className="settings-feature">
          <h3>Emergency Contingency Plans</h3>
          <p>Preparedness for unforeseen events that may disrupt voting.</p>
        </div>
        <div className="settings-feature">
          <h3>Feedback Analysis</h3>
          <p>Analysis of voter feedback to improve platform usability and engagement strategies.</p>
        </div>
        <div className="settings-feature">
          <h3>Student Involvement</h3>
          <p>Engaging students in the platform's design and implementation process.</p>
        </div>
      </div>

      <div className="settings-help-section">
        <h2>Help and Support</h2>
        <p>If you need assistance or have questions about our school online voting platform, please refer to the following resources:</p>
        <ul>
          <li>
            <strong>Getting Started:</strong> Learn how to log in, and navigate the voting platform.
          </li>
          <li>
            <strong>FAQs:</strong> Find answers to commonly asked questions about the voting process and platform usage.
          </li>
          <li>
            <strong>Contact Support:</strong> Reach out to our support team for technical assistance or general inquiries.
          </li>
        </ul>
        <p>
          For more information or detailed assistance, please visit our&nbsp;
          <Link href="#">Help Page</Link>.
        </p>
      </div>

      <div className="settings-contact-section">
        <h2>Contact Us</h2>
        <p>If you have any concerns or feedback about our school voting platform, please feel free to contact our help desk:</p>
        <p>
          <strong>Email:</strong> knustsrcec12gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +233(0) 558221431
        </p>
        <p>
          <strong>Office Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM (GMT)
        </p>
      </div>

      <div className="settings-comment-box">
        <h2>Provide Feedback</h2>
        <p>We value your opinion! Please use the form below to share any comments, concerns, or suggestions regarding our platform:</p>
        <form>
          <label htmlFor="comment">Your Comment:</label>
          <textarea id="comment" name="comment" placeholder="Type your message here..." required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="settings-map-section">
        <h2>Location of Our School</h2>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.422151424722!2d-1.5724310837221782!3d6.674137860325415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdc8e50f6193e0d%3A0x2933d803040d1f55!2sKwame%20Nkrumah%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sgh!4v1694791926812!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="settings-footer">
        <p>&copy; 2024 School Online Voting Platform. All rights reserved.</p>
      </div>
    </div>
  );
}
