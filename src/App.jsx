import React, { useState } from "react";
import "./assets/css/App.css";
import ResultPanel from "./components/ResultPanel";

function getImageUrl(name) {
  return new URL(`./assets/images/${name}`, import.meta.url).href;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: "",
      tipPercent: "",
      people: "",
    };
  }

  getTipAmount() {
    const { bill, tipPercent, people } = this.state;

    const result =
      (parseFloat(bill) * (parseFloat(tipPercent) / 100)) / parseInt(people);

    if (people <= 0) {
      return 0;
    }

    if (bill === "" || tipPercent === "" || people === "") {
      return 0;
    } else {
      return result.toFixed(2);
    }
  }

  getTotalAmount() {
    const { bill, tipPercent, people } = this.state;
    const result =
      parseFloat(bill) / parseInt(people) + parseFloat(this.getTipAmount());

    if (people <= 0) {
      return 0;
    }

    if (bill === "" || tipPercent === "" || people === "") {
      return 0;
    } else {
      return result.toFixed(2);
    }
  }

  resetState = () => {
    return this.setState({ bill: "", tipPercent: "", people: "" });
  };

  onChangeRadioValue = (e) => {
    this.setState({ tipPercent: e.target.value });
  };

  render() {
    return (
      <div className="container mx-auto">
        <header className="flex justify-center my-12">
          <img src={getImageUrl("logo.svg")} alt="logo" />
        </header>

        <main className="bg-white rounded-t-3xl md:rounded-b-3xl w-full p-8 grid md:gap-6 md:grid-flow-row md:grid-cols-2">
          <aside className="">
            <article className="mb-8">
              <label className="label">Bill</label>
              <div className="input-wrapper relative">
                <img
                  className="absolute top-1/2 bottom-1/2 my-auto left-5"
                  src={getImageUrl("icon-dollar.svg")}
                  alt="dollar icon"
                />
                <input
                  type="number"
                  step="0.01"
                  className="bill-input"
                  placeholder="0"
                  value={this.state.bill}
                  onChange={(e) => this.setState({ bill: e.target.value })}
                />
              </div>
            </article>

            <article className="mb-8">
              <label className="label">Select Tip %</label>
              <div
                className="grid gap-4 grid-flow-row grid-cols-2"
                onClick={this.onChangeRadioValue}
              >
                <div>
                  <input
                    className="hidden peer"
                    type="radio"
                    value="5"
                    name="tip-percent"
                    id="five-percent"
                  />
                  <label
                    htmlFor="five-percent"
                    className=" tip-btn peer-checked:bg-cyan peer-checked:text-cyan-600"
                  >
                    5%
                  </label>
                </div>
                <div>
                  <input
                    className="hidden peer"
                    type="radio"
                    value="10"
                    name="tip-percent"
                    id="ten-percent"
                  />
                  <label
                    htmlFor="ten-percent"
                    className=" tip-btn peer-checked:bg-cyan peer-checked:text-cyan-600"
                  >
                    10%
                  </label>
                </div>
                <div>
                  <input
                    className="hidden peer"
                    type="radio"
                    value="15"
                    name="tip-percent"
                    id="fifteen-percent"
                  />
                  <label
                    htmlFor="fifteen-percent"
                    className="tip-btn peer-checked:bg-cyan peer-checked:text-cyan-600"
                  >
                    15%
                  </label>
                </div>
                <div>
                  <input
                    className="hidden peer"
                    type="radio"
                    value="25"
                    name="tip-percent"
                    id="twentyfive-percent"
                  />
                  <label
                    htmlFor="twentyfive-percent"
                    className="tip-btn peer-checked:bg-cyan peer-checked:text-cyan-600"
                  >
                    25%
                  </label>
                </div>
                <div>
                  <input
                    className="hidden peer"
                    type="radio"
                    value="50"
                    name="tip-percent"
                    id="fifty-percent"
                  />
                  <label
                    htmlFor="fifty-percent"
                    className="tip-btn peer-checked:bg-cyan peer-checked:text-cyan-600"
                  >
                    50%
                  </label>
                </div>

                <input
                  type="number"
                  className="tip-input"
                  placeholder="Custom"
                  onChange={(e) =>
                    this.setState({ tipPercent: e.target.value })
                  }
                />
              </div>
            </article>

            <article className="mb-8 md:mb-0">
              <div className="flex justify-between">
                <label className=" label">Number of People</label>
                <span
                  className={`font-semibold ${
                    this.state.people === "0" ? "text-red-400" : "hidden"
                  }`}
                >
                  Can't be zero
                </span>
              </div>
              <div className="input-wrapper relative">
                <img
                  className="absolute top-1/2 bottom-1/2 my-auto left-5"
                  src={getImageUrl("icon-person.svg")}
                  alt="person icon"
                />
                <input
                  type="number"
                  className={`people-input ${
                    this.state.people === "0" ? "alert" : ""
                  }`}
                  placeholder="0"
                  value={this.state.people}
                  onChange={(e) => this.setState({ people: e.target.value })}
                />
              </div>
            </article>
          </aside>

          <ResultPanel
            tip={this.getTipAmount()}
            total={this.getTotalAmount()}
            resetState={this.resetState}
          />
        </main>
      </div>
    );
  }
}

export default App;
