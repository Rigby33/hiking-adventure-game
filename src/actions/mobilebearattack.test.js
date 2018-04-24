import {MOBILE_ANSWER_BEAR_QUESTION, mobileAnswerBearQuestion} from './mobilebearattack';

describe('mobileAnswerBearQuestion', () => {
    it('Should return the action', () => {
        const answer = 'answer';
        const action = mobileAnswerBearQuestion(answer);
        expect(action.type).toEqual(MOBILE_ANSWER_BEAR_QUESTION);
        expect(action.answer).toEqual(answer);
    });
});