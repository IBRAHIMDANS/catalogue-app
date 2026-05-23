import { products } from "./data/products";

export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: 24, maxWidth: 640, margin: "0 auto" }}>
      <h1>Catalogue</h1>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} — {p.category} — {p.price} €
          </li>
        ))}
      </ul>
    </main>
  );
}
