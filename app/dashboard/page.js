import VotingSection from "../_sections/VotingSection";

export default function Page() {
  return (
    <div className="voting">
      <div className="voting-title">
        <h2>Welcome to the General Elections Voting Page</h2>
      </div>

      <VotingSection title="president" />
      <VotingSection title="general secretary" />
      <VotingSection title="finacial secretary" />
      <VotingSection title="women's commissioner" />

      <div className="voting-copy">
        <p>&copy; 2024 KNUST Elections. All Rights Reserved</p>
      </div>
    </div>
  );
}
