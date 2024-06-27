import { useEffect, useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    console.log("efecto");
  });

  return (
    <>
      <h3>Patata</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  );
}

export default App;
