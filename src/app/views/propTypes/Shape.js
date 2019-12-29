import PropTypes from "prop-types";

const { number, shape, string } = PropTypes;

export default shape( {
    id: number.isRequired,
    name: string.isRequired,
    type: string.isRequired,
    status: string.isRequired,
    premiered: string.isRequired,
    language: string.isRequired,
    permalink: string.isRequired,
} );
