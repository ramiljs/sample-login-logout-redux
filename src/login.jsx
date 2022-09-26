import React from "react";

export async function login({ username, password }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'ramil' && password === 'ramil') resolve()
            else reject()
        }, 1000)
    })
};
