import { useState } from "react";
import { products } from "./data";

export default function StaffMode() {
  const [squadron, setSquadron] = useState(false);
  const [checklist, setChecklist] = useState({
    "Chalecos distintivos": false,
    "Supervisores en piso": false,
    "Reponedores capacitados": false,
    "Triaje de consultas": false,
  });
  const [auditSku, setAuditSku] = useState(products[0].id);
  const [auditStatus, setAuditStatus] = useState("OK");
  const [auditLog, setAuditLog] = useState([]);

  const toggleCheck = (key) => {
    setChecklist((c) => ({ ...c, [key]: !c[key] }));
  };

  const addAudit = (e) => {
    e.preventDefault();
    const product = products.find((p) => p.id === Number(auditSku));
    setAuditLog((l) => [
      { id: Date.now(), sku: product.name, status: auditStatus, time: new Date().toLocaleTimeString() },
      ...l,
    ]);
  };

  return (
    <div className="mode">
      <section className="card">
        <h2>Escuadrón Volante Dominical (15:30–19:30)</h2>
        <label className="toggle">
          <input type="checkbox" checked={squadron} onChange={(e) => setSquadron(e.target.checked)} />
          <span>Protocolo activo</span>
        </label>
        <ul className="list">
          {Object.entries(checklist).map(([key, val]) => (
            <li key={key} className="list-item">
              <span>{key}</span>
              <input type="checkbox" checked={val} onChange={() => toggleCheck(key)} />
            </li>
          ))}
        </ul>
        {squadron && <p className="muted">Personal administrativo y reponedores asumen rol de facilitadores de pasillo.</p>}
      </section>

      <section className="card">
        <h2>Auditoría "Góndola Llena a las 14:00"</h2>
        <form className="form" onSubmit={addAudit}>
          <select className="input" value={auditSku} onChange={(e) => setAuditSku(e.target.value)}>
            {products.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
          <select className="input" value={auditStatus} onChange={(e) => setAuditStatus(e.target.value)}>
            <option value="OK">OK (stock visible)</option>
            <option value="QUIEBRE">Quiebre</option>
            <option value="ALTILO">En altílo (prohibido)</option>
          </select>
          <button className="btn btn-primary" type="submit">Registrar</button>
        </form>
        {auditLog.length > 0 && (
          <ul className="list">
            {auditLog.map((a) => (
              <li key={a.id} className="list-item">
                <span>{a.sku}</span>
                <span className="muted">{a.status} · {a.time}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="card">
        <h2>Reglas de piso</h2>
        <ul className="small">
          <li>Top 50 SKUs al 100% en góndola baja a las 14:00.</li>
          <li>Veto de escaleras y montacargas 16:00–19:00.</li>
          <li>Climatización reforzada desde las 16:00.</li>
          <li>Rótulos aéreos por color: Azul gasfitería, Amarillo electricidad, Naranja herramientas.</li>
        </ul>
      </section>
    </div>
  );
}
