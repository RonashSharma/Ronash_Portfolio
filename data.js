// data.js
const PROFILE = {
  name: "Ronash Sharma",
  role: "Data Analyst / Data Scientist / AI-ML Engineer",
  location: "Kathmandu, Nepal",
  status: "open to internships",
  headline: "I build data pipelines and ML systems, then ship them as working products, not notebooks.",
  summary:
    "Final-year CSIT student in Kathmandu, focused on data science and machine learning. I've worked " +
    "through the whole pipeline myself:cleaning messy data, training models, wiring them into an API " +
    "or a dashboard someone can actually use. Right now looking for a Data Analyst or Data Science " +
    "internship where I can do that on real problems.",
  email: "sharma.ronash04@gmail.com",
  phone: "+977-9849556381",
  github: "https://github.com/RonashSharma",
  linkedin: "https://www.linkedin.com/in/ronash-sharma-5349913a1",
};

// List your real, public projects only. Order = display order (best first).
const PROJECTS = [
  {
    title: "RAG Document Q&A Assistant",
    tag: "flagship",
    description:
      "Built an end-to-end Retrieval-Augmented Generation (RAG) system that lets users upload PDF documents and ask natural-language questions grounded in the document content." +
      "Developed a FastAPI backend with semantic search using Sentence Transformers and ChromaDB, integrated Gemini for answer generation," 
      +"and created a Streamlit interface that returns responses with source-page citations for transparent, document-based answers.",
    stack: ["Python", "FastAPI", "Streamlit", "Gemini 2.5 Flash", "PYDF"],
    link: "https://github.com/RonashSharma/RAG_Document_QA_Assistant",
  },
  {
    title: "Customer Churn Prediction System",
    tag: "flagship",
    description:
      "Built a full churn-prediction pipeline from scratch: cleaned and prepped raw customer data, " +
      "trained a Random Forest to flag who's likely to leave, then wrapped it in a Streamlit app that " +
      "shows churn risk in real time. Paired it with a Tableau dashboard so the numbers are actually " +
      "usable by someone non-technical.",
    stack: ["Python", "Scikit-learn", "Streamlit", "Tableau"],
    link: "https://github.com/RonashSharma/customer-churn-prediction-system",
  },
  {
    title: "Gemini LLM Application",
    tag: "AI/LLM",
    description:
      "My first real LLM project ,a small app that sends user questions to Google's Gemini API and " +
      "handles the back-and-forth in real time. Simple on paper, but it's where I actually learned how " +
      "LLM apps are wired together instead of just reading about it.",
    stack: ["Python", "Google Gemini API"],
    link: "https://github.com/RonashSharma/Gemini-LLM",
  },
  {
    title: "Automated Web Data Extraction System",
    tag: "data engineering",
    description:
      "Wrote a scraper that pages through an online bookstore, pulls title, price, and currency for " +
      "every listing, cleans it up, and exports it to JSON. Nothing fancy:just a solid, working data " +
      "collection pipeline end to end.",
    stack: ["Python", "BeautifulSoup", "Requests", "JSON"],
    link: "https://github.com/RonashSharma/book-price-web-scraper",
  },
  {
    title: "Logistic Regression API",
    tag: "backend",
    description:
      "Took a logistic regression model out of a notebook and turned it into an actual REST API: send " +
      "a request, get a prediction back. Small project, but it's the one that taught me the gap between " +
      "'model works in a notebook' and 'model works as a service' is where the real work is.",
    stack: ["Python", "Scikit-learn", "REST API"],
    link: "https://github.com/RonashSharma/Logistic_Regression_API",
  },
  {
    title: "Salary Prediction Model",
    tag: "minor",
    description:
      "A regression model predicting salary from experience and role features: built early on, mostly " +
      "to practice the regression workflow.",
    stack: ["Python", "Scikit-learn"],
    link: "https://github.com/RonashSharma/Salary-Prediction",
  },
];

// Grouped skills — matches what I actually use, nothing added, nothing padded.
const SKILLS = [
  {
    group: "Programming",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL"],
  },
  {
    group: "ML & Statistics",
    items: ["Regression & Classification", "Feature Engineering", "Model Evaluation", "Statistical Analysis"],
  },
  {
    group: "Deployment & Backend",
    items: ["FastAPI", "REST APIs", "Streamlit", "Docker (basic)", "Git/GitHub", "GitHub Actions"],
  },
  {
    group: "AI & LLM",
    items: ["LLM App Development", "Google Gemini API", "Prompt Engineering", "RAG Systems"],
  },
  {
    group: "Data Visualization",
    items: ["Tableau", "KPI Dashboards", "Data Storytelling", "Jupyter"],
  },
  {
    group: "Data Collection",
    items: ["Web Scraping (BeautifulSoup)", "API Integration"],
  },
];
