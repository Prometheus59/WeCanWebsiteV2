import React from 'react';
import HideTemplate from './HideTemplate';

export default class FAQ extends React.Component{
    render() {
        return (
            <HideTemplate title='FAQs'>
            <ul>
              <li>FAQ 1</li>
              <li>FAQ 2</li>
              <li>FAQ 3</li>
              <li>FAQ 4</li>
            </ul>
          </HideTemplate>
        )
    }
}