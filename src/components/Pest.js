import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Title from './Title.js';
import Header from './Header';
import HowManyFarmers from './HowManyFarmers';
// import styled from 'styled-components';
const jsonSheet = require('../data/factsheet.json');
import { PestCommonHeader, PestImg } from './styledComponents';

class Pest extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        this.setState({ data: jsonSheet });
        // console.log(this.state.data);
    }

    render() {
        const pestName = this.props.match.params.pests;
        return (
            <div>
                <Title />
                <Header name={pestName} />
                <div id="container">
                    <ul>
                        {jsonSheet.map((e, key) => {
                            if (e.PestScientificName === pestName) {
                                return (
                                    <li key={key}>
                                        <PestCommonHeader>
                                            Common Name:{' '}
                                            {e.CommonName.toUpperCase()}{' '}
                                        </PestCommonHeader>
                                        <br />
                                        <p>
                                            <b> Crop affected: </b> {e.Crop}
                                        </p>
                                        <br />
                                        {Object.values(e.Images[0]).map(
                                            image => (
                                                <div>
                                                    <PestImg
                                                        /*className="pestImg"*/
                                                        src={image.url}
                                                    />
                                                    <p>
                                                        <b>Identify by: </b>
                                                        {image.Caption}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                        <p>
                                            <b> Country/Region: </b>
                                            {e.CountryISO === 'GH'
                                                ? 'Ghana'
                                                : e.CountryISO === 'KE'
                                                ? 'Kenya'
                                                : e.CountryISO === 'ZM'
                                                ? 'Zambia'
                                                : ''}
                                        </p>
                                        <br />
                                        <p>
                                            <b> Prevention: </b> {e.Prevention}
                                        </p>
                                        <br />
                                        <p>
                                            <b> Monitoring: </b> {e.Monitoring}
                                        </p>
                                        <br />
                                        <b>
                                            Direct Control with restrictions:{' '}
                                        </b>
                                        <br />
                                        <p>
                                            {
                                                e[
                                                    'Direct Control with restrictions'
                                                ]
                                            }
                                        </p>
                                        <br />
                                        <b>
                                            Direct Control without restrictions:{' '}
                                        </b>
                                        <br />
                                        <p>
                                            {
                                                e[
                                                    'Direct Control without restrictions'
                                                ]
                                            }
                                        </p>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                    <HowManyFarmers />
                </div>
            </div>
        );
    }
}

export default Pest;
