export default function NotVoting({ college }) {
  return (
    <div className="not-voting">
      <p>
        There are currently no ongoing elections at <br /> <strong>{college || ""}</strong>
      </p>
    </div>
  );
}
