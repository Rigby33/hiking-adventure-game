import React from 'react';
import {compose} from 'redux';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {loginNewUser} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length} from '../validators';
import { connect } from 'react-redux'; 
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password} = values;
        const user = {username, password};
        const highscore = this.props.highscore;
        console.log(user);
        return this.props.dispatch(registerUser(user, highscore))
        .then(() => this.props.dispatch(loginNewUser(username, password, highscore)));
    }

    render() {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h2>Sign up to save your HIGH SCORE and get added to the THRU HIKER board</h2>
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        highscore: state.hikerReducer.highscore
    }
}

export default compose(
    reduxForm({form: 'registration'}),
    connect(mapStateToProps)
    )(RegistrationForm)