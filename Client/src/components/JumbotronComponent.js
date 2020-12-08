import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap';

class JumbotronComponent extends Component {
    render() {
        return (
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>BloodBook Blood Bank</h1>
                            <p>We take inspiration from the World's best health services,
                            and create a great environment.
                                “A single pint can save three lives, a single gesture can create a million smiles”</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        )
    }
}
export default JumbotronComponent;