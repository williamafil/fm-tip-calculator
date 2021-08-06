import React, { useState } from "react";
import "./assets/css/App.css";
import ResultPanel from "./components/ResultPanel";

function getImageUrl(name) {
  return new URL(`./assets/images/${name}`, import.meta.url).href;
}

const radioOptions = [
  { id: 1, name: "five-percent", value: 5 },
  { id: 2, name: "ten-percent", value: 10 },
  { id: 3, name: "fifteen-percent", value: 15 },
  { id: 4, name: "twentyfive-percent", value: 25 },
  { id: 5, name: "fifty-percent", value: 50 },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: "",
      tipPercent: "",
      people: "",
      checkedRadio: null,
    };
    this.tipInputRef = React.createRef();
  }

  changeRadio(e) {
    return this.setState({ checkedRadio: e.target.id });
  }

  getTipAmount() {
    const { bill, tipPercent, people } = this.state;

    const result =
      (parseFloat(bill) * (parseFloat(tipPercent) / 100)) / parseInt(people);

    if (bill < 0) {
      return 0;
    }

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

  resetState() {
    this.tipInputRef.current.value = null;
    this.setState({
      bill: "",
      tipPercent: "",
      people: "",
      checkedRadio: null,
    });
  }

  onChangeRadioValue(e) {
    this.tipInputRef.current.value = null;
    this.setState({ tipPercent: e.target.value });
  }

  render() {
    return (
      <div className="container mx-auto">
        <header className="flex justify-center my-12">
          <img src={getImageUrl("logo.svg")} alt="logo" />
        </header>

        <main className="bg-white rounded-t-3xl md:rounded-b-3xl w-full p-8 grid md:gap-6 md:grid-flow-row md:grid-cols-2">
          <aside className="">
            <article className="mb-8">
              <div className="flex justify-between">
                <label className="label">Bill</label>
                <span
                  className={`font-semibold ${
                    parseInt(this.state.bill) < 0 ? "text-red-400" : "hidden"
                  }`}
                >
                  Can't be negative number
                </span>
              </div>
              <div className="input-wrapper relative">
                <img
                  className="absolute top-1/2 bottom-1/2 my-auto left-5"
                  src={getImageUrl("icon-dollar.svg")}
                  alt="dollar icon"
                />
                <input
                  type="number"
                  step="0.01"
                  className={`bill-input ${
                    parseInt(this.state.bill) < 0 ? "alert" : ""
                  }`}
                  placeholder="0"
                  value={this.state.bill}
                  onChange={(e) => this.setState({ bill: e.target.value })}
                />
              </div>
            </article>

            <article className="mb-8">
              <label className="label">Select Tip %</label>

              <div className="grid gap-4 grid-flow-row grid-cols-2">
                {radioOptions.map((item, idx) => {
                  return (
                    <div
                      key={item.id}
                      onClick={(e) => this.onChangeRadioValue(e)}
                    >
                      <input
                        className="hidden peer"
                        type="radio"
                        name="tip-percent"
                        id={item.id}
                        checked={this.state.checkedRadio == idx + 1}
                        value={item.value}
                        onChange={(e) => this.changeRadio(e)}
                      />
                      <label
                        htmlFor={item.id}
                        className=" tip-btn peer-checked:bg-cyan peer-checked:text-cyan-600"
                      >
                        {item.value}%
                      </label>
                    </div>
                  );
                })}

                <input
                  type="number"
                  className="tip-input"
                  placeholder="Custom"
                  ref={this.tipInputRef}
                  onChange={(e) =>
                    this.setState({
                      tipPercent: e.target.value,
                      checkedRadio: null,
                    })
                  }
                />
              </div>
            </article>

            <article className="mb-8 md:mb-0">
              <div className="flex justify-between">
                <label className=" label">Number of People</label>
                <span
                  className={`font-semibold ${
                    parseInt(this.state.people) <= 0 ? "text-red-400" : "hidden"
                  }`}
                >
                  Can't be less or equal to zero
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
                    parseInt(this.state.people) <= 0 ? "alert" : ""
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
            resetState={() => this.resetState()}
          />
        </main>
      </div>
    );
  }
}

export default App;
