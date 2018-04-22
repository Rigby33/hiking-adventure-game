import React from 'react';
import {connect} from 'react-redux';
import './mobilequestions.css';
import {mobileAnswerBearQuestion} from '../actions/mobilebearattack';

export class MobileQuestions extends React.Component {
	onSubmit(event) {
		event.preventDefault();
	    const { answer } = this.form;
	    this.props.dispatch(mobileAnswerBearQuestion(answer.value));
	}
	render() {
		console.log(this.props.mobileBear);
		const options = this.props.mobileBear.answers
		const answerOptions = options.map((answer, index) => 
			(<div key={index}>
				<input id={answer} type="radio" name="answer" value={answer}/>
				<label htmlFor={answer}>{answer}</label>
			</div>));
		const question = this.props.mobileBear.question;
		return (
			<div className="mobilequestions">
				<form onSubmit={e => this.onSubmit(e)} ref={form => this.form = form}>
					<h2>{question}</h2>
					{answerOptions}
					<button type="submit">submit</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		mobileBear: state.mobileBearReducer
	}
}

export default connect(mapStateToProps)(MobileQuestions);