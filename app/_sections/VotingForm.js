"use client";

export default function VotingForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="voting-form" onSubmit={handleSubmit}>
      <VotingSection title="president">
        <FormGroup name="Emilia Ansah gyimah" image="user-1" groupName="president" />
        <FormGroup name="Samuel Effah boafo" image="user-2" groupName="president" />
        <FormGroup name="christopher arhin" image="user-3" groupName="president" />
        <FormGroup name="David Osie Ampah" image="user-4" groupName="president" />
      </VotingSection>

      <VotingSection title="general secretary">
        <FormGroup name="Francisca Tetter" image="user-1" groupName="general-secretary" />
        <FormGroup name="Prah Amisah" image="user-2" groupName="general-secretary" />
        <FormGroup name="Awal Mustapha" image="user-3" groupName="general-secretary" />
        <FormGroup name="Kwaku Appiah" image="user-4" groupName="general-secretary" />
      </VotingSection>

      <VotingSection title="financial secretary">
        <FormGroup name="Princilla Wiah" image="user-1" groupName="financial-secretary" />
        <FormGroup name="Tantanbe Simon" image="user-2" groupName="financial-secretary" />
        <FormGroup name="Elijah Sekyi Doh" image="user-3" groupName="financial-secretary" />
        <FormGroup name="Mensha Okrah" image="user-4" groupName="financial-secretary" />
      </VotingSection>

      <div className="center-element">
        <button className="btn btn-full btn-blue">submit</button>
      </div>
    </form>
  );
}

function FormGroup({ image, name, groupName }) {
  return (
    <div className="form-group">
      <label className="label-candidate" htmlFor={name}>
        <span className="candidate">
          <span className="candidate-image">
            <img src={`/images/users/${image}.jpeg`} alt="User's Name" />
          </span>
          <span>{name}</span>
        </span>
      </label>
      <input type="radio" className="input-radio" name={`${groupName}`} id={name} value={name} required />
    </div>
  );
}

function VotingSection({ children, title }) {
  return (
    <div className="voting-form-section">
      <h3 className="voting-form-section-title">{title}</h3>

      {children}
    </div>
  );
}
