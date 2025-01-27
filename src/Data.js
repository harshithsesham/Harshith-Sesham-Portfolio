const categories = [
	["All", "light"],
	["AI", "success"],
	["Web-Development", "warning"],
	// ["HTML/CSS", "primary"],
	// ["Javascript", "danger"],
	// ["C/C++", "info"]
]

const projects = [
	{
		"img": require('./img/projects/chatapp.png'),
		"title": "Chat App - Object-oriented programming",
		"description": "Built a browser-based chat app for my Grad class COMP 504: Graduate Object-Oriented Programming and Design. The system allows users to join rooms and send messages, backed by cloud-based data storage and subscription management services for seamless operation and scalability.",
		"link": "https://direwolve-chatapp.surge.sh/",
		"category": "Web-Development"
	},
	{
		"img": require('./img/projects/harshithsesham-portfolio.png'),
		"title": "My Portfolio Website",
		"description": "Developed a dynamic, responsive personal portfolio using React to showcase skills, projects, and professional journey. The portfolio features a modern design with interactive animations and a fully responsive layout for optimal cross-device experience. Built with React’s component-based architecture for scalability and efficient updates.",
		"link": "https://github.com/Ninkuk/2022_19A_Visualizing-Space-Data-Footprints#nasa-psyche-capstone-19a-visualizing-space-data-footprints-copper-class---2022",
		"category": "Web-Development"
	},
	{
		"img": require('./img/projects/video-captioning.png'),
		"title": "Video Captioning System using Tensorflow",
		"description": "Implemented a video captioning system using the VGG16 pre-trained neural network for feature extraction and a sequence-to-sequence architecture with RNN/LSTM encoders and decoders in TensorFlow. Enhanced real-time text prediction with greedy and beam search techniques. Optimized the model with custom data generators to address memory challenges, achieving an overall caption-validation score exceeding 75% using BLEU, ROUGE-L, and CIDEr metrics.",
		"link": "https://drive.google.com/file/d/1H73MAzIUoOt-tPnQKFCfdHKUqVbI0BCu/view?usp=drive_link",
		"category": "AI"
	},
	{
		"img": require('./img/projects/rice-book.png'),
		"title": "Social media app(Ricebook)",
		"description": "Developed a full-stack Facebook-like web application with a React.js frontend and a Node.js backend, hosted on Heroku for reliable deployment. Designed a modern, cohesive interface using CSS and Semantic UI for a visually appealing user experience. The project highlights my ability to build scalable, functional, and aesthetically pleasing web applications.",
		"link": "https://github.com/Ninkuk/FBLA_Mobile_App_Development",
		"category": "Web-Development"
	},
	{
		"img": require('./img/projects/sign-language-ricognition-app.png'),
		"title": "Real Time Fingerspelled Sign Language Recognition App",
		"description": "Developed a Sign Language Recognition app using deep learning to translate hand gestures into text or speech, bridging communication gaps for individuals with hearing or speech impairments. The app leverages a CNN with transfer learning on pre-trained ImageNet models for high-accuracy gesture recognition. It processes live or pre-captured images in real-time, providing a user-friendly, accessible tool for inclusive communication.",
		"link": "",
		"category": "AI"
	},
	{
		"img": require('./img/projects/clip_diagram2-1024x528.png'),
		"title": "A multi-modal vision and language model to detect harmful social media memes",
		"description": "Proposed the use of CLIP (Contrastive Language–Image Pre-training), OpenAI’s multimodal model, to analyze multimodal hate speech and benchmark its performance against state-of-the-art models by Facebook AI. Testing on 500 validation samples yielded a surprising 57.8% accuracy without any training, demonstrating performance comparable to Facebook’s research findings.",
		"link": "",
		"category": "AI"
	},

]

const workExperience = [
	{
		"img": require('./img/projects/amazon-logo-700x394.jpg'),
		"title": "Software Development Engineer",
		"description": "Aug 2023 - Present",
		"link": "",
		"category": "Python"
	},
	{
		"img": require('./img/projects/spurcroft_inc_cover.jpeg'),
		"title": "Software Development Engineer",
		"description": "Jan 2023 - Aug 2023",
		"link": "",
		"category": "Python"
	},
	{
		"img": require('./img/projects/rice.jpeg'),
		"title": "Graduate Teaching Assistant",
		"description": "Aug 2022 - Dec 2022",
		"link": "",
		"category": "Python"
	},
	{
		"img": require('./img/projects/tcs.png'),
		"title": "Software Engineer Intern",
		"description": "Jun 2022 - Aug 2022",
		"link": "",
		"category": "Python"
	}
	// {
	// 	"title": "Misinformation Research Lab",
	// 	"description": "",
	// 	"startDate": "",
	// 	"endDate": "",
	// 	"link": "",
	// 	"category": "Research"
	// },
	// {
	// 	"title": "Learning Research Lab",
	// 	"description": "",
	// 	"startDate": "",
	// 	"endDate": "",
	// 	"link": "",
	// 	"category": "Research"
	// },
	// {
	// 	"title": "Student Graphic Designer",
	// 	"description": "",
	// 	"startDate": "",
	// 	"endDate": "",
	// 	"link": "",
	// 	"category": "Student Job"
	// },
]

const achievements = [
	{
		"img": require('./img/achievements/Card_Governer_2018.jpg'),
		"title": "Governor of Arizona Commendation",
		"description": "",
		"date": ""
	},
	{
		"img": "",
		"title": "Dean's List",
		"description": "",
		"date": ""
	},
	// {
	// 	"img": "",
	// 	"title": "FBLA E-Business",
	// 	"description": "",
	// 	"date": ""
	// },
	// {
	// 	"img": "",
	// 	"title": "FBLA Mobile Application Development",
	// 	"description": "",
	// 	"date": ""
	// }
]

export {categories, projects, workExperience, achievements};
