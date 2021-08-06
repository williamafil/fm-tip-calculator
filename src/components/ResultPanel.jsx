import React from "react";

const ResultPanel = (props) => {
  const { tip, total, resetState } = props;
  return (
    <section className="rounded-xl bg-cyan-600 p-6 text-white h-full flex flex-col justify-between">
      <div>
        <article className="mb-6 flex justify-between">
          <div>
            <label className="font-bold">Tip Amount</label>
            <p className="text-cyan-400 text-sm">/ person</p>
          </div>

          <h2 className="text-cyan text-3xl md:text-4xl lg:text-5xl font-bold">
            ${tip}
          </h2>
        </article>

        <article className="mb-6 flex justify-between">
          <div>
            <label className="font-bold">Total</label>
            <p className="text-cyan-400 text-sm">/ person</p>
          </div>

          <h2 className="text-cyan text-3xl md:text-4xl lg:text-5xl font-bold">
            ${total}
          </h2>
        </article>
      </div>
      <button
        type="button"
        className="uppercase text-center bg-cyan w-full py-3 rounded text-cyan-600 font-bold text-xl"
        onClick={resetState}
      >
        Reset
      </button>
    </section>
  );
};

export default ResultPanel;
