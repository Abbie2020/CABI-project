import React from 'react';
import CropButton from './CropButton';
import { Link } from 'react-router-dom';
import { CropboxWrap, ChooseACrop, LocationInfo } from './styledComponents';

const CropBox = props => (
    <CropboxWrap>
        <LocationInfo>
            <h2>You are in {props.region}{', '} {props.country}{" "}
            <br /><Link to="/">change location</Link></h2>
        </LocationInfo>
	{/*<ChooseACrop>Can't identify the pest? Choose a crop:</ChooseACrop>
        <CropButton
            country={props.country}
            region={props.region}
            crop="Tomato"
            route={`/${props.country}/${props.region}/Tomato`}
        />
        <CropButton
            country={props.country}
            region={props.region}
            crop="Beans"
            route={`/${props.country}/${props.region}/Beans`}
        />
        <CropButton
            country={props.country}
            region={props.region}
            crop="Maize"
            route={`/${props.country}/${props.region}/Maize`}
        />*/}
    </CropboxWrap>
);

export default CropBox;
