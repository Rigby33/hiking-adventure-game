
import {ANSWER_BEAR_QUESTION, answerBearQuestion} from './bearattack';

describe('answerBearQuestion', () => {
    it('Should return the action', () => {
        const answer = 'answer';
        const action = answerBearQuestion(answer);
        expect(action.type).toEqual(ANSWER_BEAR_QUESTION);
        expect(action.answer).toEqual(answer);
    });
});