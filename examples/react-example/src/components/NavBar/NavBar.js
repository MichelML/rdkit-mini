import React, { Component } from "react";

export default class NavBar extends Component {
  state = {
    burgerActive: false
  };
  render() {
    const brugerActiveClass = this.state.burgerActive ? " is-active" : "";

    return (
      <nav
        className="navbar has-shadow"
        style={{ padding: "12px 0" }}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand" style={{ padding: "6px" }}>
          <a className="navbar-item" href="#/">
            <img
              alt="logo"
              src="/rdkit-js/examples/vanilla-javascript/public/rdkitjs_cropped_200.png"
            />
          </a>

          <a
            role="button"
            className={`navbar-burger${brugerActiveClass}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="#/"
            onClick={() => {
              this.setState({ burgerActive: !this.state.burgerActive });
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu${brugerActiveClass}`}
        >
          <div className="navbar-start">
            <a
              className="navbar-item"
              href="https://github.com/MichelML/rdkit-js/tree/master/examples/vanilla-javascript"
            >
              Source Code
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="#/">
                {" "}
                Examples{" "}
              </a>

              <div className="navbar-dropdown">
                <a
                  className="navbar-item"
                  href="https://michelml.github.io/rdkit-js/examples/vanilla-javascript/"
                >
                  JavaScript
                </a>
                <a
                  className="navbar-item is-active"
                  href="https://michelml.github.io/rdkit-js/examples/react-example/build/"
                >
                  React
                </a>
                <hr className="navbar-divider" />
                <a
                  className="navbar-item"
                  href="https://github.com/MichelML/rdkit-js/issues"
                >
                  Contribute
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a
                  data-tooltip="Go to main RDKit project"
                  className="button has-tooltip-bottom is-white is-big"
                  href="https://github.com/rdkit/rdkit"
                >
                  <span className="icon">
                    <img
                      alt="RDKit Logo"
                      src="/rdkit-js/examples/vanilla-javascript/public/rdkit.png"
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <a
                  data-tooltip="Go to RDKit.js"
                  className="button has-tooltip-bottom is-white is-big"
                  href="https://github.com/MichelML/rdkit-js/tree/master/examples/react-example"
                >
                  <span className="icon">
                    <i className="fab fa-github fa-2x"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="navbar-item">
              <div className="buttons mr-6">
                <a
                  data-tooltip="Go to NPM package"
                  className="button has-tooltip-bottom is-white is-big"
                  href="https://www.npmjs.com/package/@rdkit/rdkit"
                >
                  <span className="icon">
                    <i className="fab fa-npm fa-2x"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
