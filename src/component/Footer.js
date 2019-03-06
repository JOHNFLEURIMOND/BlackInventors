import React, { Component } from 'react';
import moment from 'moment';

export class Footer extends Component {
  render() {
    return (
      <div>
      <footer className='ft'>
      <div className='ft-c'>
      <ul className="ft-ll ft-ll--r">
        <li className="ft-ll-i"><a href="http://www.cityofboston.gov/311/" className="ft-ll-a lnk--yellow"><span className="ft-ll">{moment().format('llll')}</span><span class="tablet--hidden"> - </span> </a></li>
    </ul>
        <ul className='ft-ll'>
          <li className='ft-ll-i'>
            <a href='https://johnfleurimond.com' className='ft-ll-a'>
              John Fleurimond
            </a>
          </li>
          <li className='ft-ll-i'>
            <a href='https://twitter.com/tcodemonger' className='ft-ll-a'>
              Twitter
            </a>
          </li>
          <li className='ft-ll-i'>
            <a href='https://github.com/JOHNFLEURIMOND' className='ft-ll-a'>
              Github
            </a>
          </li>
          <li className='ft-ll-i'>
            <a
              href='https://www.linkedin.com/in/john-fleurimond/'
              className='ft-ll-a'
              title='Linked'>
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
      </div>
    );
  }
}

export default Footer;
