import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      {/* Logos Section */}
      <div className="row text-center mb-4">
        {/* First Row */}
        <div className="col-md-4 col-sm-6 mb-4">
          <img
            src="https://zerodha.com/static/images/partners/zerodhafundhouse.png"
            className="img-fluid mb-3"
            alt="Zerodha Fundhouse"
            style={{ maxHeight: "80px" }}
          />
          <p className="text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 mb-4">
          <img
            src="https://zerodha.com/static/images/products/sensibull-logo.svg"
            className="img-fluid mb-3"
            alt="Sensibull"
            style={{ maxHeight: "80px" }}
          />
          <p className="text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 mb-4">
          <img
            src="https://zerodha.com/static/images/partners/tijori.svg"
            className="img-fluid mb-3"
            alt="Tijori"
            style={{ maxHeight: "80px" }}
          />
          <p className="text-muted">
            Investment research platform that offers detailed insights on stocks,
            sectors, supply chains, and more.
          </p>
        </div>

        {/* Second Row */}
        <div className="col-md-4 col-sm-6 mb-4">
          <img
            src="https://zerodha.com/static/images/products/streak-logo.png"
            className="img-fluid mb-3"
            alt="Streak"
            style={{ maxHeight: "80px" }}
          />
          <p className="text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 mb-4">
          <img
            src="https://zerodha.com/static/images/products/smallcase-logo.png"
            className="img-fluid mb-3"
            alt="Smallcase"
            style={{ maxHeight: "80px" }}
          />
          <p className="text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 mb-4">
          <img
            src="https://zerodha.com/static/images/products/ditto-logo.png"
            className="img-fluid mb-3"
            alt="Ditto"
            style={{ maxHeight: "80px" }}
          />
          <p className="text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      {/* Signup Button */}
      <div className="text-center mt-4">
        <button className="btn btn-primary btn-lg px-5">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
