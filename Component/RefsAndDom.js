import React, { Component } from 'react';

class RefsAndDom extends Component {

    onKeyUp = (passed, e) => {

        if (e.keyCode == 13) {   //  13 -> Enter Key - Code (or) AscII Vlaue of 'Enter key'.

            console.log(passed)
            switch (passed) {
                case 'firstName':
                    this.lastName.focus();
                    break;
                case 'lastName':
                    this.age.focus();
                    break;
                case 'age':
                    this.email.focus();
                    break;
                case 'email':
                    this.submit.focus();
                    break;
                default:
                    this.firstName.focus();
            }
        }
    }
    onSubmit = () => {
        alert(`Form submited! ${this.firstName.value}, ${this.lastName.value} `);
    }
    render() {
        return (
            <div >

                FirstName : <input type="text"
                    onKeyUp={this.onKeyUp.bind(this, 'firstName')}
                    ref={(input) => { this.firstName = input; }} />

                LastName : <input type="text"
                    onKeyUp={this.onKeyUp.bind(this, 'lastName')}
                    ref={(input) => { this.lastName = input; }} />

                Age : <input type="text"
                    onKeyUp={this.onKeyUp.bind(this, 'age')}
                    ref={(input) => { this.age = input; }} />

                Email : <input type="text"
                    onKeyUp={this.onKeyUp.bind(this, 'email')}
                    ref={(input) => { this.email = input; }} />

                <div>
                    <input type="submit"
                        value="Submit"
                        onClick={this.onSubmit}
                        ref={(input) => { this.submit = input; }} />
                </div>
            </div>
        );
    }
}

export default RefsAndDom;