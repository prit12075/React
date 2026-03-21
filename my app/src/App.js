import './App.css';

const highlights = [
  'Scaffolded with Create React App',
  'Fast refresh & testing ready out of the box',
  'Zero config deployment to any static host',
];

function App() {
  return (
    <main className="app">
      <section className="hero">
        <p className="hero__eyebrow">Create React App</p>
        <h1 className="hero__title">Your lightweight launchpad</h1>
        <p className="hero__subtitle">
          Start iterating on features immediately with a clean slate, modern tooling, and
          sensible defaults that stay out of your way.
        </p>

        <div className="hero__cta">
          <a className="button primary" href="https://react.dev/learn" target="_blank" rel="noreferrer">
            Start learning
          </a>
          <a className="button ghost" href="https://create-react-app.dev/docs/getting-started/" target="_blank" rel="noreferrer">
            View docs
          </a>
        </div>
      </section>

      <section className="highlights" aria-label="Starter capabilities">
        <h2>Out of the box</h2>
        <ul>
          {highlights.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
