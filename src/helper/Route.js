import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function UserRedirect({ user, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                ) : (
                    children
                )
            }
        />
    );
}