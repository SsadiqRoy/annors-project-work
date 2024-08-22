export default function About() {
  return (
    <div className="summary">
      <div className="summary-container">
        <h1 className="center-element">Welcome to Our Online School Voting Platform</h1>
        <p>
          Our platform provides students with the opportunity to participate in school elections and make their voices heard. Here's a detailed
          summary of what you need to know:
        </p>

        <div className="summary-section">
          <h2>About Our Voting Platform</h2>
          <div className="summary-content">
            <p>Our online voting platform is designed to facilitate transparent and secure elections within our school community.</p>
            <p>Students can access the platform from any device with an internet connection, ensuring accessibility for all.</p>
            <img src="/images/voting-platform.png" alt="Voting Platform Screenshot" />
            <p>
              The platform utilizes advanced security measures to protect the integrity of each vote, ensuring that results are accurate and reliable.
            </p>
          </div>
        </div>

        <div className="summary-section">
          <h2>How It Works</h2>
          <div className="summary-content">
            <p>To participate, students log in using their unique credentials provided by the school administration.</p>
            <p>They can view detailed profiles of candidates, including their platforms and goals, to make informed decisions.</p>
            <img src="/images/candidate-profiles.png" alt="Candidate Profiles" />
            <p>Once logged in, students can cast their votes securely through the platform, which records each vote anonymously.</p>
          </div>
        </div>

        <div className="summary-section">
          <h2>Why Vote?</h2>
          <div className="summary-content">
            <p>Voting is crucial as it allows students to elect representatives who will advocate for their interests and concerns.</p>
            <p>It promotes civic engagement and teaches the importance of democratic participation from a young age.</p>
            <img src="/images/civic-engagement.png" alt="Civic Engagement" />
            <p>
              By participating in school elections, students contribute to a vibrant and inclusive school community where everyone's voice matters.
            </p>
          </div>
        </div>

        <div className="summary-footer">
          <p>&copy; 2024 Online School Voting Platform. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
