import React, { Component } from "react";
import logo from "../logo.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="flex p-5 border-b">
          <a
            className=""
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dapp University
          </a>
        </nav>
        <div className="container mx-auto p-5">
          <div className="flex flex-col items-center gap-5">
            <a
              href="http://www.dappuniversity.com/bootcamp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} className="App-logo" alt="logo" />
            </a>

            <main role="main" className="text-center">
              <div className="content mr-auto ml-auto">
                <h1 className="text-2xl font-semibold">Dapp University Starter Kit</h1>
                <p>
                  Edit <code>src/components/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LEARN BLOCKCHAIN{" "}
                  <u>
                    <b>NOW!</b>
                  </u>
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
