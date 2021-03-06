import React from 'react';
import { compose } from 'redux';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {connect} from 'react-redux';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h2>Log in to add save your score and climb the thru hiker board</h2>
                {error}
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button type="submit">
                    Log in
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
    reduxForm({
        form: 'login',
        onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
    }),
    connect(mapStateToProps)
    )(LoginForm)