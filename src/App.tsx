import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}> MY Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        MY Button
      </Button>
    </div>
  );
}

export default App;
