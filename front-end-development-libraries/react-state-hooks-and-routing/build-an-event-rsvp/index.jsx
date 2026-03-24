const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState("");
  const [dietary, setDietary] = useState("");
  const [additionalGuests, setAdditionalGuests] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>Event RSVP Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Name:
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              placeholder="Your Name"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Your Email"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Number of Attendees:
            <input
              value={attendees}
              onChange={(e) => setAttendees(e.target.value)}
              type="number"
              required
              min="1"
              placeholder="Number of Attendees"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Dietary Preferences:
            <input
              value={dietary}
              onChange={(e) => setDietary(e.target.value)}
              type="text"
              placeholder="Dietary Preferences (Optional)"
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Bringing additional guests?
            <input
              checked={additionalGuests}
              onChange={(e) => setAdditionalGuests(e.target.checked)}
              type="checkbox"
            />
          </label>
        </div>
        <button type="submit">Submit RSVP</button>
      </form>
      {submitted && (
        <div className="submitted-message">
          <h3>RSVP Submitted!</h3>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Number of attendees:</strong> {attendees}
          </p>
          <p>
            <strong>Dietary preferences:</strong> {dietary}
          </p>
          <p>
            <strong>Bringing additional guests:</strong>
            {additionalGuests ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}
