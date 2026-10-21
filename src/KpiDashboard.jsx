import { kpis } from "./data";

export default function KpiDashboard() {
  return (
    <div className="mode">
      <section className="card">
        <h2>Tablero de Control de Impacto</h2>
        <div className="kpi-grid">
          {kpis.map((k) => {
            const progress = k.lowerBetter
              ? Math.max(0, Math.min(100, ((k.base - k.current) / (k.base - k.meta)) * 100))
              : Math.max(0, Math.min(100, ((k.current - k.base) / (k.meta - k.base)) * 100));
            return (
              <div key={k.name} className="kpi">
                <div className="kpi-name">{k.name}</div>
                <div className="kpi-value">
                  {k.current}
                  {k.unit}
                </div>
                <div className="muted small">
                  Base {k.base}
                  {k.unit} · Meta {k.meta}
                  {k.unit}
                </div>
                <div className="bar">
                  <div className="bar-fill" style={{ width: `${progress}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="card">
        <h2>Impacto esperado</h2>
        <ul className="small">
          <li>+56 tickets/día rescatados.</li>
          <li>+S/1.72M en 8 meses con ticket promedio S/127.50.</li>
          <li>Conversión dominical 16:00–19:00 de 28.7%–30.7% a ≥33.5%.</li>
        </ul>
      </section>
    </div>
  );
}
