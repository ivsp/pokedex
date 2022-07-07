import React from "react";
import PokemonCard from "../../components/pokemon-card/pokemon-card";
import Header from "../../shared/components/header/header";

function MainPage() {
  return (
    <React.Fragment>
      <Header />
      <PokemonCard />
    </React.Fragment>
  );
}

export default MainPage;
