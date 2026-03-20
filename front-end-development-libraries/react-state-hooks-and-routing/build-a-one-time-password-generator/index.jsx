const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);
  const [disabled, setDisabled] = useState(false);

  // password generator function
  const passwordGenerator = () => {
    const randomNum = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(randomNum);
    setTimer(5);
    setDisabled(true);
  };

  // use effect to create countdown
  useEffect(() => {
    if (timer > 0) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      setDisabled(false);
    }
    return () => clearInterval(intervalRef.current);
  }, [timer]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{otp || "Click 'Generate OTP' to get a code"}</h2>
      <p id="otp-timer" aria-live="polite">
        {!otp
          ? ""
          : timer > 0
          ? `Expires in: ${timer} seconds`
          : "OTP expired. Click the button to generate a new OTP."}
      </p>
      <button
        onClick={passwordGenerator}
        id="generate-otp-button"
        disabled={disabled}
      >
        Generate OTP
      </button>
    </div>
  );
};
