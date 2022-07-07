import Row from "react-bootstrap/Row";
import SearchInput from "../search-input/search-input";
import SelectorsFilter from "../selectors-filters/selectors-filters";

function Header() {
  /**
   *
   * aqui recibiré los valores de todos los filtros y ejecutaré
   * la logica para realizar la busqueda de los resultados
   */

  const onHandleSearch = (e) => {
    e.preventDefault();
    if (e.target.value.length >= 3) {
      console.log(e.target.value);
    }
  };

  const onHandleChangeType = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <Row className="row">
      <SearchInput searchByName={onHandleSearch}></SearchInput>
      <SelectorsFilter filterByType={onHandleChangeType}></SelectorsFilter>
    </Row>
  );
}

export default Header;
