import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Pages/Home";
import Works from "./Pages/Works";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import styles from "./Portfolio.module.css";

export default class Portfolio extends Component {
  state = {
    currentPage: "1",
  };

  onMenuItem = (event) => {
    if (event.target.nodeName !== "BUTTON") {
      return;
    }
    this.setState({ currentPage: event.target.dataset.value });
  };

  onViewWorksClick = () => {
    this.setState({ currentPage: "2" });
  };

  onSubmit = (event) => {
    event.preventDefault();
    let formElementsRef = event.target.elements;
    // let data = {
    //   email: formElementsRef.email.value,
    //   textarea: formElementsRef.message.value,
    // };
    formElementsRef.email.value = '';
    formElementsRef.message.value = '';
  }

  render() {
    let currentPage = this.state.currentPage;
    return (
      <div className={styles.container}>
        <Header onClick={this.onMenuItem} />
        <>
          {currentPage === "1" && <Home onClick={this.onViewWorksClick} />}
          {currentPage === "2" && <Works />}
          {currentPage === "3" && <About />}
          {currentPage === "4" && <Contact onSubmit={this.onSubmit} />}
        </>
        <Footer />
      </div>
    );
  }
}
