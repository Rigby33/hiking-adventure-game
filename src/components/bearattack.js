import React from 'react';
import './bearattack.css';
import { connect } from 'react-redux';
import { answerBearQuestion } from '../actions/bearattack';

export class BearAttack extends React.Component {
	onSubmit(event) {
			event.preventDefault();
		    const { answer } = this.form;
		    this.props.dispatch(answerBearQuestion(answer.value));
		}
	render() {
		const activeQuestion = this.props.activeQuestion;
		const show = this.props.show;
		const answers = activeQuestion.answers;
		const questionTitle = activeQuestion.question;
		let showDiv = {
			display: 'block'
		};
		let goBear = show ? 
		{
			position: 'absolute',
			zIndex: 10,
			width: '100%'
		} : 
		{};
		
		const formAnswers = answers.map((answer, index) => 
			(<div key={index}>
				<input id={answer} type="radio" name="answer" value={answer}/>
				<label htmlFor={answer} key={index}>
					{answer}
				</label>
			</div>));

		const question = show === true ?
		(<div className="bearattack" style={showDiv}>
			<form onSubmit={e => this.onSubmit(e)} ref={form => this.form = form}>
				<h2>{questionTitle}</h2>
				{formAnswers}
				<button type="submit">Submit</button>
			</form>
		</div>) :
		(<div className="bearattack"></div>);

		return (
			<div style={goBear}>
				{question}
			</div>
			);
	}
}

const mapStateToProps = state => {
	return {
		activeQuestion: state.bearReducer.activeQuestion,
		show: state.bearReducer.show,
		hikerStart: state.hikerReducer.hikerStart,
		path: state.matrixReducer.path
	}
};

export default connect(mapStateToProps)(BearAttack)