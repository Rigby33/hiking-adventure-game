const questionStore = [
	{
		question: 'How long is the Appalachian Trail?',
		answers: [
			'2,181 miles',
			'1,000 miles',
			'200 miles',
			'700 miles'
		],
		correctAnswer: '2,181 miles'
	},
	{
		question: 'What does AT stand for?',
		answers: [
			'Awesome Trail',
			'Appalachian Trail',
			'Apache Trail',
			'Alabama Trail'
		],
		correctAnswer: 'Appalachian Trail'
	},
	{
		question: 'How long is the Pacific Crest Trail?',
		answers: [
			'2,350 miles',
			'3,181 miles',
			'3,445 miles',
			'2,650 miles'
		],
		correctAnswer: '2,650 miles'
	},
	{
		question: 'What does PCT stand for?',
		answers: [
			'Pacific Crest Trail',
			'Pacific Coast Trail',
			'Pennsylvania Crest Trail',
			'Panama Coast Trail'
		],
		correctAnswer: 'Pacific Crest Trail'
	},
	{
		question: 'How long is the Continental divide trail?',
		answers: [
			'3,100 miles',
			'2,100 miles',
			'3,550 miles',
			'1,233 miles'
		],
		correctAnswer: '3,100 miles'	
	},
	{
		question: 'What does CDT strand for?',
		answers: [
			'Connecticut Decent Trail',
			'Continental Divide Trail',
			'Continental Decent Trail',
			'Cucumber Drive Trail'
		],
		correctAnswer: 'Continental Divide Trail'
	},
	{
		question: 'How many people attempt the Appalachian Trail per year',
		answers: [
			'4,224',
			'3,665',
			'145',
			'754'
		],
		correctAnswer: '4,224'
	},
	{
		question: 'Where is the 100 mile wilderness?',
		answers: [
			'Maine',
			'Tennessee',
			'North Carolina',
			'West Virginia'
		],
		correctAnswer: 'Maine'	
	},
	{
		question: 'With GPS there’s no need for a compass',
		answers: [
			'true',
			'false'
		],
		correctAnswer: 'false'	
	},
	{
		question: 'What state does the Appalachian trail not run through?',
		answers: [
			'South Carolina',
			'North Carolina',
			'New Jersey',
			'Georgia'
		],
		correctAnswer: 'South Carolina'
	},
	{
		question: 'Where does the PCT start and end?',
		answers: [
			'Mexico to Canada',
			'California to Washington',
			'California to Canada',
			'Washington to Mexico'
		],
		correctAnswer: 'Mexico to Canada'
	},
	{
		question: 'What states does the CDT run through?',
		answers: [
			'Montana, Idaho, Utah, Colorado',
			'Idaho, Wyoming, Colorado, New Mexico',
			'Wyoming, Nevada, Utah, Colorado, Arizona, New Mexico',
			'Montana, Idaho, Wyoming, Colorado, New Mexico'
		],
		correctAnswer: 'Montana, Idaho, Wyoming, Colorado, New Mexico'
	},
	{
		question: 'How long does it take to hike the Appalachian trail?',
		answers: [
			'5 to 7 months',
			'4 to 6 months',
			'2 to 3 months',
			'4 to 5 months'
		],
		correctAnswer: '5 to 7 months'
	},
	{
		question: 'What is the fastest time a person has completed the Appalachian trail?',
		answers: [
			'46 days, 8 hours, 7 minutes',
			'46 days, 11 hours, 20 minutes',
			'45 days, 8 hours, 7 minutes',
			'45 days, 11 hours, 20 minutes'
		],
		correctAnswer: '46 days, 8 hours, 7 minutes'
	},
	{
		question: 'You can drink any water without filtering',
		answers: [
			'true',
			'false'
		],
		correctAnswer: 'false'
	},
	{
		question: 'If you get lost while hiking you should stay put and wait for help to come',
		answers: [
			'true',
			'false'
		],
		correctAnswer: 'true'
	}
];

const initialState = {questionStore};

export default (state=initialState, action) => {
	return state;
}