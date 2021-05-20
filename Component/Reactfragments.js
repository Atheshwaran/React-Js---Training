import React from "react";

class Reactfragments extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <Column />l
                </tr>
            </table>
        );
    }
}


class Column extends React.Component {
    render() {
        return (
            <>
                <td>Athesh</td>
                <td>Vijay</td>
                <td>Gowtham</td>
            </>

        );
    }
}

export default Reactfragments;