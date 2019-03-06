import React, { Component } from "react";
import { Container } from "reactstrap";
import Data from "../data/seats.json";

class Inventors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {},
    };
  }

  render() {
    return (
      <Container>
        {Data.map((dataDetail, index) => {
          return (
            <a href='/' style={{display : 'inline-block'}} className='cd m-t500 g--4 g--4--sl'>
              <div className='cd-ic' style={{ backgroundImage: "url()" }} />
              <div className='cd-c'>
                <div className='cd-t'>{dataDetail.first}</div>
                <div className='cd-st t--upper t--subtitle'>
                  {dataDetail.last}
                </div>
                <div className='cd-d'>{dataDetail.year}</div>
                <div className='cd-d'>{dataDetail.passed}</div>
              </div>
            </a>
          );
        })}
      </Container>
    );
  }
}

export default Inventors;
