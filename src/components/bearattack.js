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
		const hikerPosition = this.props.hikerStart;
		const activeQuestion = this.props.activeQuestion;
		const show = this.props.show;
		const answers = activeQuestion.answers;
		const questionTitle = activeQuestion.question;
		let showDiv = {
			display: 'block'
		};
		let goBear;
		if(show) {
			goBear = {
				position: 'absolute',
				zIndex: 10,
				height: 100 + 'vh',
				width: '100%'
			}
		} else {
			goBear;
		}
		
		const formAnswers = answers.map((answer, index) => 
			(<label htmlFor={answer} key={index}>
				<input id={answer} type="radio" name="answer" value={answer}/>
				{answer}
			</label>));

		const question = show === true ?
		(<div className="bearattack" style={showDiv}>
			<form onSubmit={e => this.onSubmit(e)} ref={form => this.form = form}>
				<h2>{questionTitle}</h2>
				{formAnswers}
				<button type="submit">Submit</button>
			</form>
		</div>) :
		(<div className="bearattack"></div>);

		// const question = hikerPosition.bear && !hikerPosition.award ? 
		// (<div className="bearattack" style={showDiv}>
		// 	<form onSubmit={e => this.onSubmit(e)} ref={form => this.form = form}>
		// 		<h2>{questionTitle}</h2>
		// 		{formAnswers}
		// 		<button type="submit">Submit</button>
		// 	</form>
		// </div>) : (<div className="bearattack"></div>);

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