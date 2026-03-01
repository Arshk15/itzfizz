import Hero from "./Hero";

function App() {
  return (
    <main className="bg-black">
      <Hero />

      <section className="h-screen flex items-center justify-center bg-neutral-900 text-white">
        <h2 className="text-4xl font-bold">Next Section</h2>
      </section>
    </main>
  );
}

export default App;