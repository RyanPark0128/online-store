import React, { createContext, useState } from 'react'
import { AuthenticationDetails, CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js'
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
                        reject(err)
                    } else {
                        resolve(session)
                        setUser(user)
                    }
                })
            } else {
                setUser(false)
            }
        })
    }
    const signup = async (email,password,first,last) => {
        await new Promise((resolve, reject) => {
            let attributeList = [];
            attributeList.push(new CognitoUserAttribute({ Name: 'name', Value: first }));
            attributeList.push(new CognitoUserAttribute({ Name: 'family_name', Value: last, }));
            Pool.signUp(email, password, attributeList, null, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
    const authenticate = async (Username, Password) => {
        await new Promise((resolve, reject) => {
            const authenticationDetails = new AuthenticationDetails({ Username, Password });
            const cognitoUser = new CognitoUser({ Username, Pool });
            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: data => {
                    resolve(data)
                },
                onFailure: err => {
                    reject(err)
                },
                newPasswordRequired: data => {
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
        <CognitoContext.Provider value={{ authenticate, getSession, logout, user, signup }}>
            {props.children}
        </CognitoContext.Provider>)
}

export { Cognito, CognitoContext }