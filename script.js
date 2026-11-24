const milestones = [
    {
        year: "Before 1950",
        title: "Philosophical and Mythological Roots of Artificial Intelligence",
        whatHappened: "Long before computers existed, humans imagined artificial beings capable of thinking, acting, and performing tasks independently. Greek mythology featured Talos, a mechanical guardian, while ancient civilizations developed automata and mechanical devices capable of imitating human actions.",
        whyItMatters: "These early ideas demonstrate humanity's long-standing fascination with creating artificial life and intelligent machines. Although they were not AI in the modern technological sense, they helped inspire the concept of machines performing tasks associated with intelligence.",
        subfield: "Foundations of Artificial Intelligence.",
        impact: "These early ideas influenced mechanical engineering, robotics, automation, and the development of intelligent machines. They laid the conceptual foundation for humanity's pursuit of artificial intelligence."
    },
    {
        year: "1950",
        title: "Alan Turing and the Imitation Game",
        whatHappened: "Alan Turing published Computing Machinery and Intelligence, introducing the question, \"Can machines think?\" He proposed the Imitation Game, later popularly known as the Turing Test, as a way of evaluating whether a machine could imitate human conversation convincingly.",
        whyItMatters: "Turing's work helped transform the idea of machine intelligence into a serious scientific question. It provided a foundation for researchers to explore whether machines could demonstrate behaviours associated with human intelligence.",
        subfield: "AI Foundations and Machine Intelligence.",
        impact: "Turing's ideas influenced computer science, AI research, conversational systems, and the development of machines capable of interacting with humans through language."
    },
    {
        year: "1956",
        title: "Dartmouth Conference and the Birth of Artificial Intelligence",
        whatHappened: "The Dartmouth Summer Research Project on Artificial Intelligence took place in 1956. Organized by researchers including John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon, the workshop introduced Artificial Intelligence as a formal research field. John McCarthy is credited with coining the term \"Artificial Intelligence\" which first appeared in the 1955 proposal for the workshop.",
        whyItMatters: "The Dartmouth workshop marked a major turning point in AI history by bringing researchers together to study how machines could simulate aspects of human intelligence, including learning, reasoning, problem-solving, and language.",
        subfield: "AI Foundations.",
        impact: "The workshop helped establish AI as a recognized research discipline, encouraging academic research, technological experimentation, funding, and the development of intelligent computing systems."
    },
    {
        year: "1956",
        title: "Logic Theorist",
        whatHappened: "Allen Newell, Herbert A. Simon, and Cliff Shaw developed Logic Theorist, an early AI program designed to prove mathematical theorems using symbolic reasoning. It demonstrated that a computer could perform tasks involving logical problem-solving.",
        whyItMatters: "Logic Theorist showed that machines could do more than perform arithmetic calculations. They could manipulate symbols, apply rules, and solve problems that previously required human reasoning.",
        subfield: "Symbolic AI.",
        impact: "Its ideas contributed to the development of automated reasoning, decision-support systems, mathematical software, and AI systems used to solve structured problems."
    },
    {
        year: "1958",
        title: "LISP Programming Language",
        whatHappened: "John McCarthy developed LISP, a programming language designed to support AI research. It became widely associated with symbolic processing, recursive functions, and the manipulation of data structures used in AI.",
        whyItMatters: "LISP provided researchers with tools to develop programs capable of processing symbols, representing knowledge, and implementing complex reasoning systems. It became one of the most influential programming languages in early AI research.",
        subfield: "Symbolic AI.",
        impact: "LISP influenced AI programming, software development, symbolic computation, research systems, and the design of programming languages that support complex computational tasks."
    },
    {
        year: "1959",
        title: "Arthur Samuel and Machine Learning",
        whatHappened: "Arthur Samuel developed a computer program that played checkers and improved its performance through experience. His work helped popularize the term \"machine learning\" and demonstrated that a computer could learn to perform better without being explicitly programmed for every possible situation.",
        whyItMatters: "Samuel's work introduced an important shift in AI from programming computers with fixed instructions to allowing them to learn from data and experience. It helped establish the foundation for modern machine learning.",
        subfield: "Machine Learning.",
        impact: "Machine learning has contributed to recommendation systems, fraud detection, predictive analytics, medical diagnosis, customer behaviour analysis, and systems that improve their performance through data."
    },
    {
        year: "1966",
        title: "ELIZA and Early Conversational AI",
        whatHappened: "Joseph Weizenbaum developed ELIZA, an early conversational computer program that simulated dialogue by identifying patterns in users' input and responding with predefined rules and phrases. One of its best-known scripts imitated a psychotherapist.",
        whyItMatters: "ELIZA demonstrated that computers could simulate human conversation in ways that made users feel they were interacting with an intelligent system. It also raised important questions about human trust, communication, and the limitations of machine understanding.",
        subfield: "Natural Language Processing (NLP).",
        impact: "ELIZA influenced the development of chatbots, conversational interfaces, virtual assistants, customer-support automation, and human-computer interaction."
    },
    {
        year: "1979",
        title: "Establishment of the AAAI",
        whatHappened: "The American Association for Artificial Intelligence was established in 1979 to support AI research, education, knowledge exchange, and collaboration among researchers. It is now known as the Association for the Advancement of Artificial Intelligence (AAAI).",
        whyItMatters: "The establishment of AAAI strengthened the AI research community by creating a professional organization dedicated to advancing the field, sharing discoveries, and promoting scientific collaboration.",
        subfield: "AI Research and Development.",
        impact: "The organization helped promote AI education, research conferences, publications, and collaboration, contributing to the advancement of AI technologies and their eventual adoption across industries."
    },
    {
        year: "1980s",
        title: "Commercialization of Expert Systems",
        whatHappened: "During the 1980s, expert systems became commercially successful. These AI systems used rules and knowledge provided by human experts to solve specialized problems. One notable example was R1, also known as XCON, developed for Digital Equipment Corporation to help configure computer systems according to customer requirements.",
        whyItMatters: "Expert systems demonstrated that AI could provide practical business value by capturing specialized human knowledge and applying it consistently to complex decisions. XCON helped Digital Equipment Corporation save millions of dollars.",
        subfield: "Symbolic AI and Knowledge-Based Systems.",
        impact: "Expert systems were used in manufacturing, business, medicine, finance, troubleshooting, and decision support. They helped organizations automate specialized tasks, reduce errors, improve efficiency, and make better-informed decisions."
    },
    {
        year: "1987",
        title: "Autonomous Vehicle Research by Ernst Dickmanns",
        whatHappened: "Ernst Dickmanns and his research team at Bundeswehr University Munich advanced autonomous vehicle research by developing experimental vehicles capable of using computer vision and computational systems to perceive roads and navigate. Their work demonstrated the potential of computer-controlled vehicles to interpret their surroundings.",
        whyItMatters: "The research contributed to the development of autonomous driving by showing how computers could process visual information, detect road conditions, and make navigation decisions. It helped advance the idea of vehicles operating with reduced human intervention.",
        subfield: "Robotics, Computer Vision, and Autonomous Systems.",
        impact: "This research contributed to the development of self-driving vehicles, driver-assistance systems, intelligent transportation, road safety technologies, and automated mobility."
    },
    {
        year: "1987–1993",
        title: "The Second AI Winter",
        whatHappened: "Between 1987 and 1993, AI experienced another period of reduced funding, declining interest, and disappointment in its commercial potential. Many AI systems failed to meet the expectations surrounding their capabilities, resulting in reduced investment and slower development in some areas.",
        whyItMatters: "The AI winter demonstrated that technological progress does not always meet public or investor expectations. It highlighted the importance of realistic goals, practical applications, sufficient computing power, and sustainable research investment.",
        subfield: "AI History and Research Development.",
        impact: "The period influenced how companies, governments, and researchers approached AI investment and development. It encouraged more realistic expectations. This, combined with continued research and later advances in computing, data and algorithms helped renew AI progress. contributing to the eventual shift toward data-driven machine learning approaches."
    },
    {
        year: "1997",
        title: "Deep Blue Defeats Garry Kasparov",
        whatHappened: "IBM's Deep Blue defeated world chess champion Garry Kasparov in a six-game match in 1997, winning 3.5–2.5. Deep Blue used specialized computing hardware, chess algorithms, and extensive search to evaluate possible moves and determine effective strategies.",
        whyItMatters: "The victory demonstrated that machines could outperform world-class human experts in complex intellectual games. It became a major milestone in AI history and highlighted the power of computation, search algorithms, and strategic decision-making.",
        subfield: "Game AI, Search Algorithms, and Artificial Intelligence.",
        impact: "Deep Blue influenced research into optimization, strategic planning, decision-making, and computational problem-solving. It also increased public interest in AI and demonstrated the potential of computers to outperform humans in specific specialized tasks. It is worthy of note to know that Deep Blue relied heavily on specialised hardware, chess evaluation and search algorithms. It was not a modern machine-learning system that learned chess in the way contemporary AI models learn from data."
    },
    {
        year: "2006–2009",
        title: "The Netflix Prize",
        whatHappened: "Netflix launched the Netflix Prize competition in 2006, offering a $1 million prize to a team that could improve the accuracy of its movie recommendation system, Cinematch, by at least 10%. The competition attracted researchers and teams from around the world who developed machine-learning algorithms to predict users' movie ratings.",
        whyItMatters: "The competition highlighted the importance of machine learning in analyzing large datasets and making personalized predictions. It demonstrated how collaborative research and competition could accelerate innovation in data-driven AI.",
        subfield: "Machine Learning and Recommendation Systems.",
        impact: "The Netflix Prize influenced recommendation technologies used in streaming platforms, online shopping, music services, social media, and other digital platforms. These systems help personalize content and products based on user preferences and behaviour."
    },
    {
        year: "2009",
        title: "ImageNet",
        whatHappened: "ImageNet was introduced in 2009 by a research team led by Fei-Fei Li. It was a large visual database containing millions of images organized and labelled into categories, designed to support research in computer vision and machine learning.",
        whyItMatters: "ImageNet addressed the need for large, labelled datasets to train and evaluate computer vision systems. It became a major resource for researchers and helped accelerate progress in image recognition and deep learning.",
        subfield: "Computer Vision and Machine Learning.",
        impact: "ImageNet contributed to advancements in image classification, facial recognition, medical imaging, object detection, autonomous vehicles, security systems, and other technologies that rely on computers interpreting visual information."
    },
    {
        year: "2011",
        title: "IBM Watson Wins Jeopardy!",
        whatHappened: "IBM Watson competed against former champions Brad Rutter and Ken Jennings on the television quiz show Jeopardy! in 2011 and won. Watson processed natural-language questions, searched large amounts of information, evaluated possible answers, and selected responses based on confidence scores.",
        whyItMatters: "Watson demonstrated the ability of AI systems to process complex language, retrieve relevant information, and respond to questions within a competitive environment. It represented a significant advancement in question-answering systems.",
        subfield: "Natural Language Processing, Information Retrieval, and Question Answering.",
        impact: "Watson's technologies influenced AI applications in healthcare, customer service, research, information retrieval, business analytics, and decision-support systems."
    },
    {
        year: "2012",
        title: "AlexNet and the Deep Learning Breakthrough",
        whatHappened: "AlexNet, developed by Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton, won the ImageNet Large Scale Visual Recognition Challenge in 2012. It used a deep convolutional neural network trained on a large image dataset, with GPU acceleration helping make the training process practical.",
        whyItMatters: "AlexNet significantly improved image-recognition performance and helped demonstrate the effectiveness of deep learning. Its success encouraged researchers and companies to invest heavily in neural networks, large datasets, and powerful computing resources.",
        subfield: "Deep Learning and Computer Vision.",
        impact: "AlexNet helped accelerate advancements in facial recognition, medical image analysis, object detection, autonomous vehicles, image search, manufacturing inspection, and other computer-vision applications."
    },
    {
        year: "2014",
        title: "Generative Adversarial Networks (GANs)",
        whatHappened: "Ian Goodfellow and his collaborators introduced Generative Adversarial Networks (GANs) in 2014. GANs consist of two neural networks—a generator and a discriminator—that compete with each other during training. The generator creates synthetic data, while the discriminator evaluates whether the data is real or generated.",
        whyItMatters: "GANs introduced a powerful approach to generative modelling, allowing AI systems to create increasingly realistic images and other forms of synthetic data. They expanded AI beyond recognizing and analysing data into generating new content.",
        subfield: "Generative AI and Deep Learning.",
        impact: "GANs have been applied to image generation, art, design, entertainment, fashion, medical imaging, data augmentation, and visual effects. They also raised concerns about misinformation, identity manipulation, and deepfakes."
    },
    {
        year: "2017",
        title: "The Transformer Architecture",
        whatHappened: "Researchers introduced the Transformer architecture in the paper \"Attention Is All You Need\" in 2017. The architecture used attention mechanisms to help models understand relationships between different parts of a sequence without relying on traditional recurrent processing.",
        whyItMatters: "Transformers improved the efficiency and scalability of language modelling and made it easier to train powerful models on large amounts of data. The architecture became a major foundation for modern large language models and generative AI systems. The architecture uses attention mechanisms to calculate relationships between different elements (tokens) in a sequence, without relying on recurrent or convolutional processing.",
        subfield: "Deep Learning, Natural Language Processing, and Large Language Models.",
        impact: "Transformers power technologies such as AI chatbots, machine translation, text summarization, content generation, coding assistants, information retrieval, document analysis, and many modern AI applications."
    },
    {
        year: "2022",
        title: "ChatGPT and the Mainstream Adoption of Generative AI",
        whatHappened: "OpenAI released ChatGPT to the public on November 30, 2022. The conversational AI system, initially based on GPT-3.5, enabled users to interact with AI through natural language, ask questions, generate content, summarize information, explain concepts, and assist with various tasks.",
        whyItMatters: "ChatGPT made generative AI accessible to millions of people and significantly increased public awareness of AI's capabilities. It demonstrated how advanced AI models could be integrated into everyday activities through simple conversational interfaces.",
        subfield: "Generative AI, Natural Language Processing, and Large Language Models.",
        impact: "ChatGPT has influenced education, software development, business operations, research, content creation, customer service, productivity, and communication. It has also raised important concerns about accuracy, privacy, bias, misinformation, academic integrity, and the future of work."
    },
    {
        year: "Future",
        title: "Artificial General Intelligence (AGI) and Superintelligence",
        whatHappened: "Artificial General Intelligence (AGI) and superintelligence represent possible future stages of AI development. AGI refers to a hypothetical system capable of performing a broad range of intellectual tasks at a level comparable to humans, while superintelligence describes a hypothetical intelligence that significantly exceeds human cognitive capabilities across many domains. Neither has been conclusively achieved.",
        whyItMatters: "The pursuit of AGI and superintelligence raises important questions about the limits of AI, machine autonomy, safety, ethics, control, and the potential transformation of society. It represents both a major scientific ambition and a subject of ongoing debate.",
        subfield: "Artificial General Intelligence, AI Safety, and Advanced AI Research.",
        impact: "If achieved, AGI could potentially transform scientific research, medicine, education, engineering, business, transportation, and many other sectors. Superintelligence could bring unprecedented technological progress but may also introduce significant challenges involving human oversight, security, employment, governance, and the safe alignment of AI systems with human values."
    }
];


const layerMilestones = {
    1: [0, 1, 2],

    2: [3, 4, 6, 7, 8, 10],

    3: [5, 9, 11, 12, 13, 14, 15],

    4: [16, 17, 18],

    5: [19]
};

// Historical images associated with milestones

const milestoneImages = {
    0: "images/milestone-01-talos.webp",
    1: "images/milestone-02-turing.jpg",
    2: "images/milestone-03-dartmouth.jpg",
    3: "images/milestone-04-logic-theorist.jpg",
    4: "images/milestone-05-lisp.jpg",
    5: "images/milestone-09-arthur-samuel-machine-learning.jpg",
    6: "images/milestone-06-eliza.jpg",
    7: "images/milestone-07-aaai.jpg",
    8: "images/milestone-08-commercialization-of-expert-systems.jpg",
    9: "images/milestone-11-autonomous-vehicle-dickmanns.jpg",
    10: "images/milestone-10-second-ai-winter.jpg",
    11: "images/milestone-12-deep-blue-kasparov.jpg",
    12: "images/milestone-13-netflix-prize.jpg",
    13: "images/milestone-14-imagenet.jpg",
    14: "images/milestone-15-ibm-watson-jeopardy.jpg",
    15: "images/milestone-16-alexnet.jpg",
    16: "images/milestone-17-gans.jpg",
    17: "images/milestone-18-transformer-architecture.jpg",
    18: "images/milestone-19-chatgpt.jpg",
    19: "images/milestone-20-agi-superintelligence.jpg",
};
// Get the milestone panel elements

const milestonePanel = document.getElementById("milestone-panel");
const milestoneContent = document.getElementById("milestone-content");
const closePanelButton = document.getElementById("close-panel");

// Get all pyramid layer buttons

const pyramidLayers = document.querySelectorAll(".pyramid-layer");


// Handle pyramid layer clicks

pyramidLayers.forEach(button => {

    button.addEventListener("click", () => {

        // Get the selected layer number

        const selectedLayer = button.dataset.layer;

        // Retrieve the milestone indexes for that layer

        const selectedMilestones = layerMilestones[selectedLayer];

        // Clear previous content

        milestoneContent.textContent = "";

        // Create a heading

        const heading = document.createElement("h2");
        heading.textContent = button.textContent.trim() + " — Milestones";

        milestoneContent.appendChild(heading);

        // Create a list of milestones

// Create a list of milestones

const milestoneList = document.createElement("ul");

selectedMilestones.forEach(index => {

    const milestone = milestones[index];

    // Create a clickable button for each milestone

    const milestoneButton = document.createElement("button");

    milestoneButton.type = "button";
    milestoneButton.className = "milestone-button";

    milestoneButton.textContent = `${milestone.year} — ${milestone.title}`;

    // Handle milestone selection

    milestoneButton.addEventListener("click", () => {

        // Clear the current milestone list

        milestoneContent.textContent = "";

        // Display the milestone title

        const detailHeading = document.createElement("h2");
        detailHeading.textContent = milestone.title;

        milestoneContent.appendChild(detailHeading);

        // Helper function for displaying milestone information

        function addDetailSection(label, value) {

            const section = document.createElement("div");

            const sectionHeading = document.createElement("h3");
            sectionHeading.textContent = label;

            const sectionContent = document.createElement("p");
            sectionContent.textContent = value;

            section.appendChild(sectionHeading);
            section.appendChild(sectionContent);

            milestoneContent.appendChild(section);

        }

        // Display all milestone details

        addDetailSection("Year", milestone.year);

        addDetailSection("What Happened", milestone.whatHappened);

        addDetailSection("Why It Matters", milestone.whyItMatters);

        addDetailSection("AI Subfield", milestone.subfield);

        addDetailSection("Impact", milestone.impact);

        // Create a back button

        const backButton = document.createElement("button");

        backButton.type = "button";
        backButton.className = "back-button";
        backButton.textContent = "← Back to Milestones";

        backButton.addEventListener("click", () => {

            // Return to the selected layer's milestone list

            button.click();

        });

        milestoneContent.appendChild(backButton);

    });

// Create the milestone list item

const listItem = document.createElement("li");

listItem.className = "milestone-item";

// Add the milestone button

listItem.appendChild(milestoneButton);

// Check whether this milestone has an image

if (milestoneImages[index]) {

    const thumbnail = document.createElement("img");

    thumbnail.src = milestoneImages[index];

    thumbnail.alt = `Historical image for ${milestone.title}`;

    thumbnail.className = "milestone-thumbnail";

    thumbnail.loading = "lazy";

    listItem.appendChild(thumbnail);

}

// Add the list item to the milestone list

milestoneList.appendChild(listItem);
});

milestoneContent.appendChild(milestoneList);

        // Display the panel

        milestonePanel.hidden = false;

    });

});


// Close the milestone panel

closePanelButton.addEventListener("click", () => {

    milestonePanel.hidden = true;

});
