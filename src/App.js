import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <footer>
        This Weather App is{" "}
        <a
          href="https://github.com/Krizhinka/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced code on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://profound-florentine-7827ee.netlify.app/hosted"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
