import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CourseDetail.css';

const notesData = {
  1: {
    title: 'Python Programming', icon: '🐍', color: '#00f5ff',
    overview: 'Python is the #1 language for AI & Data Science. This course covers everything from basics to advanced OOP and libraries.',
    topics: [
      { title: 'Introduction to Python', content: 'Python is a high-level, interpreted language. Key features: dynamic typing, garbage collection, large standard library. Setup: Install Python 3.x from python.org. Use pip to install packages. IDEs: VS Code, PyCharm, Jupyter Notebook.' },
      { title: 'Variables, Data Types & Operators', content: 'Python data types: int, float, str, bool, list, tuple, dict, set. Variable assignment is dynamic. Arithmetic operators: +, -, *, /, //, %, **. Comparison: ==, !=, <, >, <=, >=. Logical: and, or, not.' },
      { title: 'Control Flow — if/else, loops', content: 'if-elif-else for conditional logic. for loops iterate over sequences. while loops run until condition is false. break exits loop. continue skips to next iteration. range() generates sequences.' },
      { title: 'Functions & Lambda', content: 'def keyword defines functions. Parameters can have defaults. *args for variable positional args, **kwargs for keyword args. Lambda: anonymous single-line functions. map(), filter(), reduce() use lambdas.' },
      { title: 'Object Oriented Programming', content: 'Classes define objects. __init__ is constructor. self refers to instance. Inheritance: child class extends parent. super() calls parent. Polymorphism: method overriding. Encapsulation: private attributes with _ or __.' },
      { title: 'File Handling & Exceptions', content: 'open() reads/writes files. Modes: r, w, a, rb, wb. with statement auto-closes files. try-except handles errors. except Exception as e catches all. finally always executes. raise creates custom errors.' },
      { title: 'NumPy & Pandas Basics', content: 'NumPy: ndarray for fast math. Operations broadcast across arrays. Pandas: DataFrame for tabular data. Series for 1D data. read_csv() loads data. groupby(), merge(), pivot_table() for analysis.' },
      { title: 'Python for ML — scikit-learn intro', content: 'scikit-learn: train_test_split() divides data. fit() trains model. predict() makes predictions. score() evaluates accuracy. Pipeline chains transformers. GridSearchCV tunes hyperparameters.' },
    ],
  },
  4: {
    title: 'Machine Learning', icon: '🤖', color: '#00f5ff',
    overview: 'Machine Learning teaches computers to learn from data without being explicitly programmed. This course covers all major ML algorithms.',
    topics: [
      { title: 'Introduction to ML', content: 'ML categories: Supervised (labeled data), Unsupervised (no labels), Reinforcement (reward-based). Training set, validation set, test set. Bias-variance tradeoff. Overfitting vs underfitting.' },
      { title: 'Linear Regression', content: 'Models relationship between variables as a straight line: y = mx + b. Cost function: Mean Squared Error (MSE). Optimization: Gradient Descent minimizes cost. Multiple linear regression uses multiple features.' },
      { title: 'Logistic Regression', content: 'Used for binary classification. Sigmoid function maps output to 0-1. Decision boundary separates classes. Log loss (cross-entropy) as cost function. Regularization: L1 (Lasso), L2 (Ridge).' },
      { title: 'Decision Trees & Random Forest', content: 'Decision Tree: splits data based on features. Gini impurity / Information gain for splits. Random Forest: ensemble of trees. Reduces overfitting via bagging. Feature importance scores.' },
      { title: 'Support Vector Machine (SVM)', content: 'Finds optimal hyperplane maximizing margin. Support vectors are closest data points. Kernel trick (RBF, polynomial) handles nonlinear data. C parameter controls margin vs misclassification tradeoff.' },
      { title: 'K-Means Clustering', content: 'Unsupervised: groups data into K clusters. Algorithm: initialize centroids → assign points → recalculate centroids → repeat. Elbow method selects optimal K. WCSS (within-cluster sum of squares) as metric.' },
      { title: 'Model Evaluation Metrics', content: 'Accuracy, Precision, Recall, F1-Score for classification. Confusion matrix: TP, TN, FP, FN. ROC-AUC curve. For regression: MAE, MSE, RMSE, R². Cross-validation prevents data leakage.' },
      { title: 'Feature Engineering', content: 'Feature scaling: StandardScaler (z-score), MinMaxScaler. Encoding: OneHotEncoding for categorical. PCA for dimensionality reduction. Feature selection: SelectKBest, correlation matrix.' },
    ],
  },
  5: {
    title: 'Deep Learning & Neural Networks', icon: '🧠', color: '#7b2ff7',
    overview: 'Deep Learning uses multi-layered neural networks to learn complex patterns in data. Powers modern AI applications.',
    topics: [
      { title: 'Artificial Neural Networks (ANN)', content: 'Inspired by the human brain. Neurons receive inputs, apply weights, pass through activation function. Layers: Input → Hidden → Output. Activation functions: ReLU, Sigmoid, Tanh, Softmax.' },
      { title: 'Backpropagation & Gradient Descent', content: 'Backpropagation computes gradients of loss with respect to weights using chain rule. Gradient Descent updates weights: w = w - α∇L. Variants: SGD, Mini-batch, Adam, RMSprop.' },
      { title: 'Convolutional Neural Networks (CNN)', content: 'Designed for image data. Conv layer: applies filters to extract features. Pooling: Max/Avg pooling reduces dimensions. Fully Connected layer for classification. Famous architectures: VGG, ResNet, Inception.' },
      { title: 'Recurrent Neural Networks (RNN)', content: 'Processes sequential data (text, time series). Hidden state carries memory from previous time steps. Vanishing gradient problem limits long sequences. Applications: language modeling, speech recognition.' },
      { title: 'LSTM & GRU', content: 'LSTM (Long Short-Term Memory): gates (input, forget, output) control information flow. Solves vanishing gradient. GRU (Gated Recurrent Unit): simpler, faster alternative. Both excel at sequence tasks.' },
      { title: 'Transformers & Attention', content: 'Attention mechanism weighs importance of each input element. Multi-head attention allows multiple focus patterns. Self-attention in Transformers. Basis of BERT, GPT, T5 and modern LLMs.' },
      { title: 'TensorFlow & Keras Basics', content: 'TensorFlow: open-source ML framework by Google. Keras: high-level API built on TensorFlow. Sequential model. model.compile() with optimizer, loss. model.fit() trains. model.predict() infers.' },
      { title: 'Transfer Learning', content: 'Use pre-trained models (VGG16, BERT) as starting point. Fine-tune on your specific task. Saves training time and data. Freeze base layers, train new head. Works incredibly well with limited data.' },
    ],
  },
};

// Default notes for courses not in detailed data
const defaultNotes = (title) => ({
  title, icon: '📚', color: '#00f5ff',
  overview: `This course covers all essential topics in ${title} tailored for B.Tech CSE (AI&DS) students.`,
  topics: [
    { title: 'Course Introduction', content: `Welcome to ${title}. This course is designed to give you a solid foundation and practical understanding of the subject. Study the topics systematically for best results.` },
    { title: 'Core Concepts', content: 'This section covers the fundamental concepts and theories that form the backbone of this subject. Make sure to understand each concept before moving forward.' },
    { title: 'Important Algorithms & Techniques', content: 'Key algorithms, methods and techniques you must master. Practice implementing these and understand their time and space complexities.' },
    { title: 'Practical Applications', content: 'Real-world applications of this subject. Understanding these helps you see why this knowledge matters in your engineering career.' },
    { title: 'Exam Preparation Tips', content: 'Focus on definitions, formulas, and key theorems. Practice previous year questions. Revise diagrams. Solve numerical problems regularly.' },
  ],
});

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState(0);

  const courseId = parseInt(id);
  const data = notesData[courseId] || defaultNotes(`Course ${id}`);

  return (
    <div className="detail-page">
      <div className="home-bg">
        <div className="home-orb home-orb-1" />
        <div className="home-orb home-orb-2" />
        <div className="home-grid" />
      </div>

      <div className="section" style={{ paddingTop: '40px' }}>
        <button className="back-btn" onClick={() => navigate('/courses')}>← Back to Courses</button>

        <div className="detail-header" style={{ '--dc': data.color }}>
          <span className="detail-icon">{data.icon}</span>
          <div className="detail-header-text">
            <h1 className="detail-title">{data.title}</h1>
            <p className="detail-overview">{data.overview}</p>
          </div>
        </div>

        <div className="detail-layout">
          {/* Sidebar */}
          <div className="detail-sidebar glass-card">
            <h3 className="sidebar-title">Topics</h3>
            {data.topics.map((topic, i) => (
              <button
                key={i}
                className={`topic-btn ${activeTab === i ? 'active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                <span className="topic-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="topic-name">{topic.title}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="detail-content glass-card">
            <div className="content-header">
              <span className="content-num">Topic {String(activeTab + 1).padStart(2, '0')}</span>
              <h2 className="content-title">{data.topics[activeTab].title}</h2>
            </div>
            <div className="content-body">
              {data.topics[activeTab].content.split('. ').map((sentence, i) => (
                sentence.trim() && (
                  <p key={i} className="content-para">{sentence.trim()}{sentence.endsWith('.') ? '' : '.'}</p>
                )
              ))}
            </div>
            <div className="content-nav">
              <button
                className="nav-btn"
                disabled={activeTab === 0}
                onClick={() => setActiveTab(activeTab - 1)}
              >← Previous</button>
              <span className="nav-progress">{activeTab + 1} / {data.topics.length}</span>
              <button
                className="nav-btn"
                disabled={activeTab === data.topics.length - 1}
                onClick={() => setActiveTab(activeTab + 1)}
              >Next →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;