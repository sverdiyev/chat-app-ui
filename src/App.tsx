import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="flex">
      <section class="basis-60"> side section</section>
      <main class="grow"> main section</main>
      <section class="flex-grow-1"> side section</section>
    </div>
  );
};

export default App;
