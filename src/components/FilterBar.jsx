import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const FilterBar = () => {
  const { active, handleCheckbox } = useContext(PokemonContext);
  return (
    <div className={`container-filters ${active ? "active" : ""}`}>
      <div className="filter-bt-type">
        <span>Type</span>

        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="grass"
            id="grass"
          />
          <label htmlFor="grass">Plant</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="fire"
            id="fire"
          />
          <label htmlFor="fire">Fire</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="bug"
            id="bug"
          />
          <label htmlFor="bug">Animal</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="fairy"
            id="fairy"
          />
          <label htmlFor="fairy">Hada</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="dragon"
            id="dragon"
          />
          <label htmlFor="dragon">Dragón</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="shadow"
            id="shadow"
          />
          <label htmlFor="shadow">Ghost</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="ground"
            id="ground"
          />
          <label htmlFor="ground">Earth</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="normal"
            id="normal"
          />
          <label htmlFor="normal">Normal</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="psychic"
            id="psychic"
          />
          <label htmlFor="psychic">Psychic</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="steel"
            id="steel"
          />
          <label htmlFor="steel">Steel</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="dark"
            id="dark"
          />
          <label htmlFor="dark">Ominous</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="electric"
            id="electric"
          />
          <label htmlFor="electric">Eléctric</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="fighting"
            id="fighting"
          />
          <label htmlFor="fighting">Wrestling</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="flying"
            id="flying"
          />
          <label htmlFor="flying">Flywheel</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="ice"
            id="ice"
          />
          <label htmlFor="ice">Frost</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="poison"
            id="poison"
          />
          <label htmlFor="poison">Poison</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="rock"
            id="rock"
          />
          <label htmlFor="rock">Farm</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="water"
            id="water"
          />
          <label htmlFor="water">Water</label>
        </div>
      </div>
    </div>
  );
};
