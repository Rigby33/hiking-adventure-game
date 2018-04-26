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
		const options = this.props.activeMobileQuestion.answers
		const answerOptions = options.map((answer, index) => 
			(<div key={index}>
				<input id={answer} type="radio" name="answer" value={answer}/>
				<label htmlFor={answer}>{answer}</label>
			</div>));
		const question = this.props.activeMobileQuestion.question;
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
		activeMobileQuestion: state.mobileBearReducer.activeQuestion
	}
}

export default connect(mapStateToProps)(MobileQuestions);