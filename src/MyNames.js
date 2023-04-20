//
import React from 'react';

// This is JSX (JavaScript Extensible Language)
const myNames = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

function MyNames(){
    return myNames;
}

export default MyNames;