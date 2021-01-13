import React, { createContext } from 'react'
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js'
import Pool from "../UserPool"

const CognitoContext = createContext()

const Cognito = (props) => {
    const getSession = async () => {
        await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        reject()
                    } else {
                        resolve(session)
                        console.log(session)
                    }
                })
            } else {
                reject()
            }
        })
    }
    const authenticate = async (Username, Password) => {
        await new Promise((resolve, reject) => {
            const authenticationDetails = new AuthenticationDetails({ Username, Password });
            const cognitoUser = new CognitoUser({ Username, Pool });
            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: data => {
                    console.log('onSuccess:', data)
                    resolve(data)
                    // const accessToken = data.getAccessToken().getJwtToken();
                },
                onFailure: err => {
                    reject(err)
                },
                newPasswordRequired: data => {
                    console.log('newPasswordRequired:', data)
                    resolve(data)
                }
            })
        })
    }
    const logout = () => {
        const user = Pool.getCurrentUser();
        if (user) {
            user.signOut();
        }
    }
    return (
        <CognitoContext.Provider value={{ authenticate, getSession, logout }}>
            {props.children}
        </CognitoContext.Provider>)
}

export { Cognito, CognitoContext }