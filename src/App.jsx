import React, { useState } from "react";
import "./assets/css/App.css";
// import Logo from "./assets/images/logo.svg";

function getImageUrl(name) {
  return new URL(`./assets/images/${name}`, import.meta.url).href;
}

function App() {
  return (
    <div className="container mx-auto">
      <header className="flex justify-center my-12">
        <img src={getImageUrl("logo.svg")} />
      </header>

      <main className="bg-white rounded-t-3xl md:rounded-b-3xl w-full p-8 grid md:gap-6 md:grid-flow-row md:grid-cols-2">
        <aside className="">
          <section class="mb-8">
            <label className="label">Bill</label>
            <div className="input-wrapper relative">
              <img
                className="absolute top-1/2 bottom-1/2 my-auto left-5"
                src={getImageUrl("icon-dollar.svg")}
              />
              <input
                type="number"
                step="0.01"
                className="bill-input"
                placeholder="0"
              />
            </div>
          </section>

          <section className="mb-8">
            <label className="label">Select Tip %</label>
            <div className="grid gap-4 grid-flow-row grid-cols-2">
              <button type="button" value="5%" className="tip-btn">
                5%
              </button>
              <button type="button" value="10%" className="tip-btn">
                10%
              </button>
              <button type="button" value="15%" className="tip-btn">
                15%
              </button>
              <button type="button" value="25%" className="tip-btn">
                25%
              </button>
              <button type="button" value="50%" className="tip-btn">
                50%
              </button>
              <input type="number" className="tip-input" placeholder="Custom" />
            </div>
          </section>

          <section className="mb-8 md:mb-0">
            <label className="label">Number of People</label>
            <div className="input-wrapper relative">
              <img
                className="absolute top-1/2 bottom-1/2 my-auto left-5"
                src={getImageUrl("icon-person.svg")}
              />
              <input type="number" className="people-input" placeholder="1" />
            </div>
          </section>
        </aside>

        <section className="rounded-xl bg-cyan-600 p-6 text-white h-full flex flex-col justify-between">
          <div>
            <article class="mb-6 flex justify-between">
              <div>
                <label className="font-bold">Tip Amount</label>
                <p className="text-cyan-400 text-sm">/ person</p>
              </div>

              <h2 className="text-cyan text-3xl font-bold">$4.27</h2>
            </article>

            <article class="mb-6 flex justify-between">
              <div>
                <label className="font-bold">Total</label>
                <p className="text-cyan-400 text-sm">/ person</p>
              </div>

              <h2 className="text-cyan text-3xl font-bold">$32.79</h2>
            </article>
          </div>
          <button
            type="button"
            className="uppercase text-center bg-cyan w-full py-3 rounded text-cyan-600 font-bold text-xl"
          >
            Reset
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
