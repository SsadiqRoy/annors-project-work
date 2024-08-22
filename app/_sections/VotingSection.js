export default function VotingSection({ title }) {
  return (
    <section className="voting_section">
      <div className="voting_section-title">
        <h3>{title}</h3>
      </div>

      <table>
        <thead>
          <tr>
            <th>candidates</th>
            <th>votes</th>
            <th>votes(%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="voting-table-candidate">
                <span className="voting-table-candidate-image">
                  <img src="/images/users/user-1.jpeg" alt="User's Name" />
                </span>
                <span className="">Emilia Ansah Gyifah</span>
              </span>
            </td>
            <td>1,283</td>
            <td>53.7%</td>
          </tr>
          <tr>
            <td>
              <span className="voting-table-candidate">
                <span className="voting-table-candidate-image">
                  <img src="/images/users/user-2.jpeg" alt="User's Name" />
                </span>
                <span className="">Samuel Effah Boafo</span>
              </span>
            </td>
            <td>1,283</td>
            <td>53.7%</td>
          </tr>
          <tr>
            <td>
              <span className="voting-table-candidate">
                <span className="voting-table-candidate-image">
                  <img src="/images/users/user-3.jpeg" alt="User's Name" />
                </span>
                <span className="">Christopher Arhin</span>
              </span>
            </td>
            <td>1,283</td>
            <td>53.7%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
