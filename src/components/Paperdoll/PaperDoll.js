import React from "react";
import "./paperdoll.css";
// import AccountCharacter from "AccountCharacter.js"
import CharacterSheet from "./CharacterSheet.js"

// TODO: Create class for axios call toe PoE API

function PaperDoll() {
  console.log("The PaperDoll component has loaded successfully!");
  return (
    <>
      <div className="flex items-center justify-center mt-3">
        {/* Temporary header for component? */}
        <h2 className="text-white text-lg">Welcome to your character Sheet</h2>
      </div>
      <div className="flex items-center justify-center mt-3">
        <p className="text-white text-sm">
          You may drag and drop items from the right panel onto your character
          to swap out items
        </p>
      </div>
      <CharacterSheet />
    </>
  );
}

export default PaperDoll;
