const questionStore = [
	{
		question: 'The elevation gain/loss of hiking the entire AT is the equvilant of climbing mount everest ___ times',
		answers: [
			'10',
			'40',
			'2',
			'16'
		],
		correctAnswer: '16'
	},
	{
		question: 'Regardless of whether your backpack is waterproof, what should you do?',
		answers: [
			'Bring a rain cover',
			'coat it with water proof spray',
			'pack items in water proof bags',
			'do nothing',
		],
		correctAnswer: 'pack items in water proof bags'
	},
	{
		question: 'Where should you pack your toiletries in your backpack?',
		answers: [
			'top',
			'bottom',
			'side',
			'middle'
		],
		correctAnswer: 'bottom'
	},
	{
		question: 'Where should you pack your first aid kit?',
		answers: [
			'easy to reach',
			'hard to find so others don\'t steal it',
			'anywhere it doesn\'t matter as long as you have it',
			'You don\'t need a first aid kit'
		],
		correctAnswer: 'easy to reach'
	},
	{
		question: 'What type of fitness does backpacking require?',
		answers: [
			'cardio',
			'muscular',
			'both',
		],
		correctAnswer: 'both'
	},
	{
		question: 'How much does 2 gallons of water weight?',
		answers: [
			'7 lbs',
			'5 lbs',
			'16 lbs',
			'20 lbs',
		],
		correctAnswer: '16 lbs'
	},
	{
		question: 'The AT receives ___ recreation visit annually',
		answers: [
			'1 million',
			'2 million',
			'100,000',
			'80,000'
		],
		correctAnswer: '1 million'
	},
	{
		question: 'What\'s the best way to dress for hiking?',
		answers: [
			'several thin layers',
			'shorts and t-shirt',
			'long pants and t-shirt',
			'no clothes!',
		],
		correctAnswer: 'several thin layers'
	},
	{
		question: 'For how long should you boil water to kill off any organisms?',
		answers: [
			'5 minutes',
			'2 minutes',
			'1 minute',
			'30 minutes',
		],
		correctAnswer: '1 minute'
	},
	{
		question: 'Which disease can you contract from a tick bite?',
		answers: [
			'lyme disease',
			'west nile',
			'malaria',
			'the flu'
		],
		correctAnswer: 'lyme disease'
	},
	{
		question: 'How long does it take for a tick to transmit lyme disease?',
		answers: [
			'60 minutes',
			'10 days',
			'30 days',
			'24 hours',
		],
		correctAnswer: '24 hours'
	},
	{
		question: 'Which is an indicator of a serious tick bite?',
		answers: [
			'figure 8 shaped rash',
			'swelling and bruising',
			'loss of color in the area',
			'bull\'s eye shaped rash'
		],
		correctAnswer: 'bull\'s eye shaped rash'
	},
	{
		question: 'What should you do with a tick once you remove it?',
		answers: [
			'burn it',
			'release it',
			'smash it',
			'save it'
		],
		correctAnswer: 'save it'
	},
	{
		question: 'How should you protect food while backpacking?',
		answers: [
			'string food up between two trees',
			'keep it in your backpack',
			'bury it',
			'keep it in your tent'
		],
		correctAnswer: 'string food up between two trees' 
	},
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
		question: 'With GPS there\'s no need for a compass',
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

const randomNumber = Math.floor(Math.random()*(questionStore.length-1));


const initialState = {questionStore: questionStore, activeQuestion: questionStore[randomNumber], show: false};

export default (state=initialState, action) => {
	return state;
}