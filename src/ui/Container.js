import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

export default class Container extends Component {
	render() {
		return (
			<Grid bsClass="container main-wrapper">
				<Row>
					<Col bsClass="col-md-12">
						<h1>Testing</h1>
					</Col>
				</Row>
			</Grid>

		);
	}
}