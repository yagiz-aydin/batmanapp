import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Operations } from "../../state/ducks/show";
import { Shape } from "../propTypes";
import { Text1, Text2 } from "../layouts/css";

class ShowDetail extends Component {
    componentDidMount( ) {
        const { show, match, fetchShow } = this.props;
        const loadedShowPermalink = show ? show.permalink : "";
        if ( match.params.permalink !== loadedShowPermalink ) {
            fetchShow( () => match.params.permalink );
        }
    }

    componentWillReceiveProps( nextProps ) {
        if ( this.props.match.params.permalink !== nextProps.match.params.permalink ) {
            this.props.fetchShow( nextProps.match.params.permalink );
        }
    }

    render( ) {
        const { show } = this.props;
        if ( !show ) {
            return false;
        }
        return (
            <Container>
                <Row>
                    <Col xl={8}>
                        <img src={ show.image.original } />
                    </Col>
                    <Col xl={4}>
                        <Text1><strong>{ show.name }</strong></Text1>
                        <Text2> { show.summary.replace(/<.*?>/gm, '') } </Text2>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const { object, func } = PropTypes;

ShowDetail.propTypes = {
    show: Shape,
    fetchShow: func.isRequired,
    match: object.isRequired,
};

ShowDetail.prefetch = ( { params } ) => Operations.fetchDetails( params.permalink );

ShowDetail.defaultProps = {
    show: null,
};

const mapStateToProps = ( state ) => ( {
    show: state.show.details.show,
} );

const mapDispatchToProps = {
    fetchShow: Operations.fetchDetails,
};

export default connect( mapStateToProps, mapDispatchToProps )( ShowDetail );
