import "./selectors-filters.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function SelectorsFilter({ filterByType }) {
  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <form onChange={filterByType}>
          <select className="type-selectors" name="type1" id="type1">
            {/* hacer un map con las opciones de los pokemons mostrados 
            en cada pagina */}
            <option className="type-selectors-options" value="1.1">
              Elige un tipo 1.1
            </option>
            <option className="type-selectors-options" value="1.2">
              Elige un tipo 1.2
            </option>
          </select>
          {/* Esta lista deberá actualizarse con los valores filtrados del primer filtro
            y viceversa */}
          <select className="type-selectors" name="type2" id="type2">
            <option className="type-selectors-options" value="2.1">
              Elige un tipo 2.1
            </option>
            <option className="type-selectors-options" value="2.2">
              Elige un tipo 2.2
            </option>
          </select>
        </form>
      </Col>
    </Row>
  );
}

export default SelectorsFilter;
