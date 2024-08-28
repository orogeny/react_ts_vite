function App() {
  const msg = greeting("pablo");

  return (
    <div className="bg-blue-300">
      <h1>App is working..!</h1>
      <h2>{msg}</h2>
    </div>
  );
}

function greeting(name: string) {
  const words: string[] = ["hello", name];

  return words.reduce((xs, x, _i) => xs.concat(" ").concat(x), "");
}

export { App };
