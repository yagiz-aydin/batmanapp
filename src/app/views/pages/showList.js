import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Operations } from "../../state/ducks/show";
import { Shape } from "../propTypes";
import { Text1, Text2, Wrapper } from "../layouts/css";

class showList extends Component {
    componentDidMount() {
        if ( this.props.shows.length === 0 ) {
            this.props.fetchList();
        }
    }

    render() {
        const items = this.props.shows
            .map( p => <Link key={ p.id } to={ `/shows/${ p.permalink }` }>
                <Wrapper>
                    <Row>
                        <Col xs="3">
                            <img width="250px" src={ p.imageUrl } />
                        </Col>
                        <Col xs="4">
                            <Text1>
                                {p.name}
                                <Text2> ( {p.type}, {p.language} )</Text2>
                                <Text2> Status: {p.status}</Text2>
                                <Text2> Premiered: {p.premiered} </Text2>
                            </Text1>
                        </Col>
                    </Row>
                </Wrapper>
            </Link> )
        return ( <Container> {items} </Container> );
    }
}

const { arrayOf, func } = PropTypes;

showList.propTypes = {
    shows: arrayOf( Shape ),
    fetchList: func.isRequired,
};

showList.defaultProps = {
    shows: [],
};

showList.prefetch = Operations.fetchList;

const mapStateToProps = ( state ) => ( {
    shows: state.show.list,
} );

const mapDispatchToProps = {
    fetchList: Operations.fetchList,
};

export default connect( mapStateToProps, mapDispatchToProps )( showList );
