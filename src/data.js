export const products = [
  { id: 1, name: "Tornillo para concreto 3/8", category: "Ferretería", aisle: 12, shelf: "B3", price: 12.9 },
  { id: 2, name: "Pintura látex blanco 1 gal", category: "Pinturas", aisle: 7, shelf: "A1", price: 59.9 },
  { id: 3, name: "Brocha 3 pulgadas", category: "Pinturas", aisle: 7, shelf: "A4", price: 14.5 },
  { id: 4, name: "Tubo PVC 1/2", category: "Gasfitería", aisle: 4, shelf: "C2", price: 8.2 },
  { id: 5, name: "Codo PVC 1/2", category: "Gasfitería", aisle: 4, shelf: "C2", price: 1.8 },
  { id: 6, name: "Llave de paso 1/2", category: "Gasfitería", aisle: 4, shelf: "C5", price: 24.9 },
  { id: 7, name: "Cable eléctrico 2.5mm", category: "Electricidad", aisle: 9, shelf: "D1", price: 3.5 },
  { id: 8, name: "Interruptor simple", category: "Electricidad", aisle: 9, shelf: "D3", price: 6.9 },
];

export const kits = [
  { id: 1, name: "Kit Fuga de Inodoro", price: 49.9, items: ["Válvula", "Empaque", "Tornillos", "Sellador"] },
  { id: 2, name: "Kit Instalación de Repisa", price: 39.9, items: ["Repisa", "Tacos", "Tornillos", "Nivel"] },
  { id: 3, name: "Kit Retoque de Pintura", price: 34.9, items: ["Pintura 1/4 gal", "Brocha", "Bandeja", "Cinta"] },
];

export const services = ["Corte de madera", "Tintometría"];

export const kpis = [
  { name: "Conversión general", base: 33.34, meta: 35, current: 33.8, unit: "%" },
  { name: "Conversión dom 16-19h", base: 29.7, meta: 33.5, current: 30.9, unit: "%" },
  { name: "Tickets adicionales/día", base: 0, meta: 56, current: 18, unit: "" },
  { name: "Tiempo en caja pico", base: 7.5, meta: 2, current: 4.2, unit: "min", lowerBetter: true },
  { name: "Disponibilidad top 50 a 16h", base: 82, meta: 98, current: 91, unit: "%" },
];
