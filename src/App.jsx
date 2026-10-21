import { useState } from "react";
import CustomerMode from "./CustomerMode";
import StaffMode from "./StaffMode";
import KpiDashboard from "./KpiDashboard";
import "./App.css";

const tabs = [
  { id: "cliente", label: "Cliente" },
  { id: "personal", label: "Personal" },
  { id: "kpis", label: "KPIs" },
];

export default function App() {
  const [tab, setTab] = useState("cliente");

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Promart Conversión en Tienda</h1>
          <p className="muted">Solución integrada: 8 factores · tecnología ligera · operación en piso</p>
        </div>
      </header>
      <nav className="tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={tab === t.id ? "tab active" : "tab"}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>
      <main className="main">
        {tab === "cliente" && <CustomerMode />}
        {tab === "personal" && <StaffMode />}
        {tab === "kpis" && <KpiDashboard />}
      </main>
    </div>
  );
}
