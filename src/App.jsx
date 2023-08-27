import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Quote from "./components/Quote";

export default function App() {
  return (
    <div>
      <Header />
      <Quote />
    </div>
  );
}
