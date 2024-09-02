import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Landing from '../Layout/Landing'

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route 
        {...rest}
        render = {props =>
            auth.isAuthenticated === true ? (
                <Navigate to="/Dashboard" />
            ) : (
                <Landing />
            )
        }
    />
);
    

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(PrivateRoute)
