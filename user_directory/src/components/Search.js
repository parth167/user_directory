import React  from 'react';
import {  Container, Row} from 'reactstrap';
function Search(props) {
  return (
    <form>
      <div className="form-group ">
       
        <div className="input-group">
        <Container>       
        <Row>
        
         <p>Search by First Name!</p>
            <input 
            onChange={props.handleInputChange} 
            value={props.search} 
            name="search" 
            type="text" 
            className="form-control" 
            placeholder="Search here" 
            id="search" />
            
          
          </Row>
          </Container>
        </div>
      </div>
    </form>
  );
}

export default Search;