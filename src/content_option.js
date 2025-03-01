const logotext = "BISWAJIT";
const meta = {
    title: "Biswajit Rana",
    // description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Biswajit Rana",
    animated: {
        first: "I love coding",
        second: "I love studying DeepLearning models",
        third: "I develop Websites for AI applications",
    },
    description: "Currently doing M.Sc. in Data science from \n Ramakrishna Mission Vivekananda Educational and Research Institute",
    // your_img_url: "https://raw.githubusercontent.com/biswajit-github-2022/private-repo/refs/heads/main/Snapchat-1239211503.jpg?token=GHSAT0AAAAAAC7PSH454GP26ZD5RCR2XD6GZ6CBCKQ",
    // your_img_url: "https://cdn.pixabay.com/photo/2022/10/24/14/48/forest-7543646_1280.jpg",
    your_img_url: "https://raw.githubusercontent.com/biswajit-github-2022/PortfolioWebsite/refs/heads/main/src/assets/website_images/IMG_20241216_144622-modified.jpg",
    // your_img_url: "https://raw.githubusercontent.com/biswajit-github-2022/PortfolioWebsite/refs/heads/main/src/assets/website_images/IMG_20241214_170536-modified.jpg",
};

const dataabout = {
    title: "About my self",
    aboutme: `I am Currently doing Masters (M.Sc) in Data Science (Big Data Analytics) in 4th Semester from Ramakrishna Mission Vivekananda Educational and Research Institute.
                Also Working as AI Appliocations Engineer Intern @GoVivace `,
};
const worktimeline = [{
        jobtitle: "RamaKrishna Mission Vivekananda Educational and Research Institute, Belur",
        where: "M.Sc. Big Data Analytics (Data Science)",
        score: "7.4",
        date: "2020",
    },
    {
        jobtitle: "Vidyasagar University(Panskura Banamali College)",
        where: "B.Sc. Computer Science",
        score: "8.8",
        date: "2019",
    },
    {
        jobtitle: "Panskura Bradley Birt High School",
        where: "Higher Secondary",
        score: "87.4%",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 95,
    },
    {
        name: "Pytorch",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Machine Learning",
        value: 90,
    },
    {
        name: "Deep Learning",
        value: 85,
    },
    {
        name: "Artificial Intelligence",
        value: 75,
    },
];

const services = [{
        title: "AI and ML",
        description: `Machine Learning Algorithms, Deep learning, Computer Vision, AI, Seq-to-Seq models
                      Python, Numpy, Pandas, OpenCV`,
    },
    {
        title: "BackEnd Development",
        description: "PHP, Node js, Express js, MySql, MongoDB",
    },
    {
        title: "FrontEnnd Development",
        description: "React, Angular, Tailwind, Bootstrap, Electron",
    },
];

const DL_img= "https://raw.githubusercontent.com/biswajit-github-2022/PortfolioWebsite/refs/heads/main/src/assets/website_images/DL.png";
const ML_img= "https://raw.githubusercontent.com/biswajit-github-2022/PortfolioWebsite/refs/heads/main/src/assets/website_images/ML.png";
const AI_img= "https://raw.githubusercontent.com/biswajit-github-2022/PortfolioWebsite/refs/heads/main/src/assets/website_images/AI.png";
const Web_img= "https://raw.githubusercontent.com/biswajit-github-2022/PortfolioWebsite/refs/heads/main/src/assets/website_images/Webdev.png";
const deeplearning= [
    {
        img: DL_img,
        header: "Text to SQL (Finetuning)",
        description: "Doing fine-tuning of the T5-small model from Hugging Face for text-to-text tasks, integration with MySQL, and schema generation, with a Streamlit app.",
        link: "https://github.com/biswajit-github-2022/text-to-sql-finetuning",
        web: ""
    },
    {
        img: DL_img,
        header: "U-Net from Scratch",
        description: "Implementing U-net from scratch using tenserflow on red blood cell image dataset for segmentation",
        link: "https://github.com/biswajit-github-2022/term_peoject/tree/main/text_to_vid/U-net",
        web: ""
    },
    {
        img: DL_img,
        header: "Text to Speech",
        description: "Implementing tts using NVdia TacoTron-2 model on LJspeech dataset",
        link: "https://github.com/biswajit-github-2022/term_peoject/tree/main/text_to_speech",
        web: ""
    },
    {
        img: DL_img,
        header: "Chat with PDF (CLI)",
        description: "Implementing Llama model on PDF data and using LLM for question answering. Works on CLI",
        link: "https://github.com/biswajit-github-2022/term_peoject/tree/main/Basics/llama",
        web: ""
    },
    {
        img: DL_img,
        header: "Chat with PDF (Web)",
        description: "Implementing Llama model on PDF data and using LLM for question answering. Works on Web",
        link: "https://github.com/biswajit-github-2022/term_peoject/tree/main/Basics/chat",
        web: ""
    },
    {
        img: DL_img,
        header: "Chat with CSV (API)",
        description: "Question answering with csv using OpenAi API key",
        link: "https://github.com/biswajit-github-2022/term_peoject/tree/main/Basics/chat",
        web: ""
    },
    {
        img: DL_img,
        header: "Gemini chatbot",
        description: "Used Astro framework and gemini api for chatbot, live using vercel",
        link: "https://github.com/biswajit-github-2022/ai_chat_app",
        web: "https://ai-chat-app-rho-ten.vercel.app/"
    },
]
const machinelearning= [
    {
        img: ML_img,
        header: "K-NN From Scratch",
        description: "Classifying HandWirtten Digit MNIST dataset using KNN implemented using pandas (From scratch)",
        link: "https://github.com/biswajit-github-2022/RKMVERI_2ND/tree/main/class/ML/SS_assignments_1",
        web: ""
    },
    {
        img: ML_img,
        header: "Naive Bayes From Scratch",
        description: "Classifying satellite images in River and Non River class using NaiveBayes",
        link: "https://github.com/biswajit-github-2022/RKMVERI_2ND/tree/main/class/ML/SS_assignments_2",
        web: ""
    },
    {
        img: ML_img,
        header: "Perceptron",
        description: "Implementing Preceptron Algorithm form scratch to Fit a line Between two linearly seperable data",
        link: "https://github.com/biswajit-github-2022/RKMVERI_2ND/tree/main/class/ML/SS_assignments_3",
        web: ""
    },
    {
        img: ML_img,
        header: "K-means From Scratch",
        description: "Implementing K-Means Clustering algo to create classes for Satellite images",
        link: "https://github.com/biswajit-github-2022/RKMVERI_2ND/tree/main/class/ML/SS_assignments_4",
        web: ""
    },
    {
        img: ML_img,
        header: "MultiDimension Scaling",
        description: "Implementing Multi Dimension Scaling For Visualization of Higher Dimension MNIST HD dataset",
        link: "https://github.com/biswajit-github-2022/RKMVERI_2ND/tree/main/class/ML/SS_assignments_5",
        web: ""
    },
    {
        img: ML_img,
        header: "Denoising Image",
        description: "Using KPCA(rbf), KPCA(wavelet) and PCA to denoise Images, by using Patch based Approach On high quality images",
        link: "https://github.com/biswajit-github-2022/RKMVERI_2ND/tree/main/class/ML/ML_project/work",
        web: ""
    },
    {
        img: ML_img,
        header: "House Price Prediction",
        description: "Using Regression models to predict house prices with more than 40 features.",
        link: "https://github.com/biswajit-github-2022/PRODIGY_ML_01",
        web: ""
    },
    {
        img: ML_img,
        header: "Mall Customer Segregation",
        description: "Using K-means Algorithm to segregate mall customers .",
        link: "https://github.com/biswajit-github-2022/PRODIGY_ML_02",
        web: ""
    },
    {
        img: ML_img,
        header: "Cats vs Dogs",
        description: "Classifying Cats and Dogs images using SVM classifier. Then using PCA for visualization",
        link: "https://github.com/biswajit-github-2022/PRODIGY_ML_03",
        web: ""
    },
    {
        img: ML_img,
        header: "Hand gesture Detection",
        description: "Using CNN to detect 10 types of handgesture from images .",
        link: "https://github.com/biswajit-github-2022/PRODIGY_ML_04",
        web: ""
    },
]
const WebDev= [
    {
        img: Web_img,
        header: "Wall Clock",
        description: "Implementing an Asthetic Wall cLock using HTML CSS AND JS.",
        link: "https://github.com/biswajit-github-2022/WALL_CLOCK.github.io",
        web: "https://biswajit-github-2022.github.io/WALL_CLOCK.github.io/"
    },
    {
        img: Web_img,
        header: "TO-DO List",
        description: "Implementing memory less To-Do List using HTML CSS AND JS",
        link: "https://github.com/biswajit-github-2022/my_second_todo_liist.github.io",
        web: "https://biswajit-github-2022.github.io/my_second_todo_liist.github.io/"
    },
    {
        img: Web_img,
        header: "TO-DO List (Original)",
        description: "Implementing To-Do List using HTML CSS AND JS",
        link: "https://github.com/biswajit-github-2022/my_todo_list.github.io",
        web: "https://biswajit-github-2022.github.io/my_todo_list.github.io/"
    },
    {
        img: Web_img,
        header: "Country Search API",
        description: "Implementing Country serching site using HTML CSS AND JS",
        link: "https://github.com/biswajit-github-2022/country_api.github.io",
        web: "https://biswajit-github-2022.github.io/country_api.github.io/"
    },
    {
        img: Web_img,
        header: "Global Avg temp API",
        description: "Implementing Global avg temperature plot usiging HTML CSS AND JS and API",
        link: "https://github.com/biswajit-github-2022/global_avg_temp.github.io",
        web: "https://biswajit-github-2022.github.io/global_avg_temp.github.io/"
    },
    {
        img: Web_img,
        header: "International Space Station",
        description: "Locating ISS using API",
        link: "https://github.com/biswajit-github-2022/where_is_iss.github.io",
        web: "https://biswajit-github-2022.github.io/where_is_iss.github.io/"
    },
    {
        img: Web_img,
        header: "Random Colour Generator",
        description: "Generating new random colours upon clicks",
        link: "https://github.com/biswajit-github-2022/random_RGB.github.io",
        web: "https://biswajit-github-2022.github.io/random_RGB.github.io/"
    },
    {
        img: Web_img,
        header: "Guess the number",
        description: "Making a Number guessing game with hints using HTML CSS AND JS",
        link: "https://github.com/biswajit-github-2022/guess_the_number.github.io",
        web: "https://biswajit-github-2022.github.io/guess_the_number.github.io/"
    },
    {
        img: Web_img,
        header: "Simple Calculator",
        description: "Making a simple calculator using HTML CSS AND JS",
        link: "https://github.com/biswajit-github-2022/calculator.github.io",
        web: "https://biswajit-github-2022.github.io/calculator.github.io/"
    },
    {
        img: Web_img,
        header: "My First React App",
        description: "Made with React JS",
        link: "https://github.com/biswajit-github-2022/react-app",
        web: "https://biswajit-github-2022.github.io/react-app/"
    },
]
const ai= [
    {
        img: AI_img,
        header: "Bi-Pedal Walker",
        description: "Implementing DDPG algorithm using pytorch to make a bipedal walker in the gym environment.",
        link: "https://github.com/biswajit-github-2022/bipedal-walker-with-ddpg",
        web: ""
    },
]
const cv= [
    {
        img: "https://raw.githubusercontent.com/biswajit-github-2022/PortfolioWebsite/refs/heads/main/src/assets/website_images/cv.jpg",
        header: "CV",
        description: "Compilation of Projects done till date",
        link: "https://drive.google.com/file/d/1z8rro7Sh_Noppsg8ees4d07tS4-ZZxwi/view",
    },
]



const contactConfig = {
    YOUR_EMAIL: "ranabiswajit911@gmail.com",
    YOUR_FONE: "+91 790105640",
    description: "Send Me a Mail",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/biswajit-github-2022",
    facebook: "https://www.facebook.com/biswajitrana13/",
    linkedin: "https://www.linkedin.com/in/biswajit-rana/",
    twitter: "https://x.com/B_R_0_0",
};
export {
    meta,
    dataabout,
    // dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,

    deeplearning,
    machinelearning,
    WebDev,
    ai,
    cv
};