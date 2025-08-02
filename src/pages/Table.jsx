import React from 'react';

class Table extends React.Component {
    render() {
        return (
            <section className="tableSection">
        <table className="Tabell">
            <tr>
                <th><h2>Förrätter</h2></th>
                <th><h2>Varmrätter</h2></th>
                <th><h2>Efterrätter</h2></th>
            </tr>
            <tr>
                <td><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></td>
                <td><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></td>
                <td><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></td>
            </tr>
    
        </table>
    </section>
        );
    }
}

export default Table;