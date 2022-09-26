import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { login } from "./login";
import { loginReducer, initialState } from "./state";

function App() {
    const [state, dispatch] = useReducer(loginReducer, initialState);
    const { username, password, Loading, error, LoggedIn } = state;

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'login' });

        try {
            await login({ username, password });
            dispatch({ type: 'success' });
        } catch (error) {
            dispatch({ type: 'error' });
        }
    }

    return (
        <div className='container'>
            <div className='col-md-4 offset-4 mt-5'>
                {LoggedIn ?
                    <>
                        <h1>Hello {username}</h1>
                        <button className='btn btn-danger' onClick={() => dispatch({ type: 'logout' })}>
                            Log Out
                        </button>
                    </>
                    : (
                        <form onSubmit={onSubmit} className='form-group d-flex flex-column'>
                            <h3 className='text-center text-info mb-2'>Please Login!</h3>
                            <p className='text-danger text-center'>{error}</p>
                            <input
                                type="text"
                                placeholder='username'
                                className='form-control mb-2'
                                value={username}
                                onChange={(e) => dispatch({ type: 'field', field: 'username', value: e.target.value})}
                            />
                            <input
                                type="text"
                                placeholder='password'
                                className='form-control mb-4'
                                value={password}
                                onChange={(e) => dispatch({ type: 'field', field: 'password', value: e.target.value })}
                            />
                            <button
                                className='btn btn-primary'
                                type='submit'
                                disabled={Loading}
                            >
                                {Loading ? 'Logging In' : 'Log In'}
                            </button>
                        </form>
                    )}
            </div>
        </div>
    )
}

export default App;
