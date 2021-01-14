import React, { createContext, useState } from 'react'
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js'
import Pool from "../UserPool"

const CognitoContext = createContext()

const Cognito = (props) => {
    const [user, setUser] = useState(false)
    const getSession = async () => {
        await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        reject()
                    } else {
                        resolve(session)
                        setUser(session)
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
    const logout = async () => {
        await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.signOut();
                setUser(false)
                resolve()
            } else {
                reject()
            }
        })
    }
    return (
        <CognitoContext.Provider value={{ authenticate, getSession, logout, user }}>
            {props.children}
        </CognitoContext.Provider>)
}

export { Cognito, CognitoContext }