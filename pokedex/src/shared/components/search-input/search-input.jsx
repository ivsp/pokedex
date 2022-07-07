import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchInput({ searchByName }) {
  return (
    <Col className="col">
      <Form onSubmit={searchByName} onChange={searchByName}>
        <Form.Group className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2"></Form.Label>
          <Col className="d-flex" sm="6">
            <Form.Control type="text" name="searchInput" placeholder="Search" />
            <Button type="submit" variant="outline-info">
              Search
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Col>
  );
}

export default SearchInput;
