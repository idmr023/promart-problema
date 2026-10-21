import { useState } from "react";
import { products, kits, services } from "./data";

export default function CustomerMode() {
  const [query, setQuery] = useState("");
  const [turnName, setTurnName] = useState("");
  const [turnPhone, setTurnPhone] = useState("");
  const [turnService, setTurnService] = useState(services[0]);
  const [queue, setQueue] = useState([]);
  const [cart, setCart] = useState([]);
  const [receipt, setReceipt] = useState(null);

  const results = query.trim()
    ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  const addTurn = (e) => {
    e.preventDefault();
    if (!turnName.trim() || !turnPhone.trim()) return;
    setQueue((q) => [
      ...q,
      { id: Date.now(), name: turnName, phone: turnPhone, service: turnService, status: "En espera" },
    ]);
    setTurnName("");
    setTurnPhone("");
  };

  const notifyReady = (id) => {
    setQueue((q) => q.map((t) => (t.id === id ? { ...t, status: "Listo para recoger" } : t)));
  };

  const addToCart = (product) => {
    setCart((c) => {
      const found = c.find((i) => i.id === product.id);
      if (found) return c.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      return [...c, { ...product, qty: 1 }];
    });
  };

  const addKit = (kit) => {
    setCart((c) => [...c, { id: `kit-${kit.id}`, name: kit.name, price: kit.price, qty: 1 }]);
  };

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const pay = () => {
    if (cart.length === 0) return;
    setReceipt({ id: `YM-${Date.now()}`, total, items: cart.length, time: new Date().toLocaleTimeString() });
    setCart([]);
  };

  return (
    <div className="mode">
      <section className="card">
        <h2>Modo Tienda (Zero-App)</h2>
        <p>Escanea el QR y busca tu producto sin descargar apps.</p>
        <input
          className="input"
          placeholder="Buscar producto (ej. tornillo, pintura, tubo)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {results.length > 0 && (
          <ul className="list">
            {results.map((p) => (
              <li key={p.id} className="list-item">
                <div>
                  <strong>{p.name}</strong>
                  <div className="muted">
                    {p.category} · Pasillo {p.aisle} · Estante {p.shelf} · S/ {p.price.toFixed(2)}
                  </div>
                </div>
                <button className="btn" onClick={() => addToCart(p)}>Agregar</button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="card">
        <h2>Kits Grab & Go</h2>
        <div className="grid">
          {kits.map((k) => (
            <div key={k.id} className="kit">
              <h3>{k.name}</h3>
              <div className="muted">S/ {k.price.toFixed(2)}</div>
              <ul className="small">
                {k.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <button className="btn" onClick={() => addKit(k)}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Turno Digital "Sigue Comprando"</h2>
        <form className="form" onSubmit={addTurn}>
          <input className="input" placeholder="Nombre" value={turnName} onChange={(e) => setTurnName(e.target.value)} />
          <input className="input" placeholder="Celular" value={turnPhone} onChange={(e) => setTurnPhone(e.target.value)} />
          <select className="input" value={turnService} onChange={(e) => setTurnService(e.target.value)}>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <button className="btn btn-primary" type="submit">Registrar turno</button>
        </form>
        {queue.length > 0 && (
          <ul className="list">
            {queue.map((t) => (
              <li key={t.id} className="list-item">
                <div>
                  <strong>{t.name}</strong>
                  <div className="muted">{t.service} · {t.phone} · {t.status}</div>
                </div>
                <button className="btn" onClick={() => notifyReady(t.id)}>Marcar listo</button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="card">
        <h2>Yape & Sal — Checkout Express</h2>
        {cart.length === 0 && <p className="muted">Carrito vacío.</p>}
        {cart.length > 0 && (
          <>
            <ul className="list">
              {cart.map((i) => (
                <li key={i.id} className="list-item">
                  <span>{i.name} x{i.qty}</span>
                  <span>S/ {(i.price * i.qty).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="total">Total: S/ {total.toFixed(2)}</div>
            <button className="btn btn-primary" onClick={pay}>Pagar (Yape/Plin/Tarjeta)</button>
          </>
        )}
        {receipt && (
          <div className="receipt">
            <strong>Boleta electrónica</strong>
            <div>ID: {receipt.id}</div>
            <div>Items: {receipt.items}</div>
            <div>Total: S/ {receipt.total.toFixed(2)}</div>
            <div>Hora: {receipt.time}</div>
            <div className="muted">Salida por carril express (Green Lane).</div>
          </div>
        )}
      </section>

      <section className="card">
        <h2>Estaciones de Rescate</h2>
        <p className="muted">
          Torres de canastas en cruces de pasillos centrales y climatización dinámica desde las 16:00.
          Recoge productos de impulso sin volver a la entrada.
        </p>
      </section>
    </div>
  );
}
