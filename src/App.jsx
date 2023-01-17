import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import WatchPage from "./components/WatchPage";
import Layout from "./Layout";
import data from "./data";
import "./App.css";
import MovieListe from "./components/MovieListe";

function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [movie, setMovie] = useState(data);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout setRating={setRating} setSearch={setSearch} />}
      >
        <Route index element={<HomePage />} />
        <Route
          path="Movie"
          element={
            <MovieListe
              setMovie={setMovie}
              rating={rating}
              data={movie}
              search={search}
            />
          }
        />
        <Route path="product/:id" element={<WatchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
