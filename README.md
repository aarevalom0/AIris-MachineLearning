<div style="display: flex; align-items: center;">
<img src="Images/header-1.png" alt="header">
</div>


<h1 align="center">
AIRIS 

Machine Learning Platform for Glaucoma Diagnosis
</h1>

<h3 align="center">
It is an intelligent platform that integrates machine learning models with a modern frontend and a robust backend, offering predictive information for advanced diagnosis and decision-making in glaucoma.
</h3>

---

## Project Structure

- **Frontend**: User interface (React.js) for interaction with AIRIS. The frontend allows users to input data, visualize results, and interact with the machine learning models. You can find the frontend code in the [`Front`](https://github.com/aarevalom0/AIris-MachineLearning/tree/master/Front) directory.

- **Backend**: API services (FastAPI) for communication between frontend and machine learning models. The backend handles requests from the frontend, processes data, and returns predictions. You can find the backend code in the [`Backend`](https://github.com/aarevalom0/AIris-MachineLearning/tree/master/Backend) directory.

- **Machine Learning**: Predictive models and data processing (Python, Scikit-learn, TensorFlow). The machine learning code includes model training, evaluation, and prediction logic. You can find the machine learning code in the [`Machine_Learning_Model`](https://github.com/aarevalom0/AIris-MachineLearning/tree/master/Machine_Learning_Model) directory.

- **Documentation**: Project documentation and API specifications. The documentation provides details on how to use the platform, including API endpoints and model descriptions. You can find the documentation in the [`Docs`](https://github.com/aarevalom0/AIris-MachineLearning/tree/master/Docs) directory. 

---

## Architecture Overview

The VitaVision-AIRIS software consists of a modern architecture that implement the architecture style of microservices, allowing for scalability and maintainability. Additionally, it apply tactical patterns such as the API Gateway and Service Discovery, which facilitate communication between the frontend, backend, and machine learning models. Moreover, the architecture is designed to be modular, enabling easy integration of new features and models in the future. As well, the architecture implement pipe and filter pattern to improve the workflow of the machine learning component, allowing for efficient data processing and model predictions. Finally, the architecture used the precomputed pattern to train the machine learning models, ensuring that the models are trained on high-quality data and can make accurate predictions.
 
In the following diagram, you can see the components of the architecture and how they interact with each other:
![Architecture Diagram](Images/Components.png)
The components diagram illustrates the architecture of the AIRIS platform, that is composed of 3 subdomains: 
- **Authentication and Authorization Manager**: This subdomain handles user authentication and authorization, ensuring secure access to the platform. It includes the user management system and the API gateway that routes requests to the appropriate services.

- **Analysis Manager**: This subdomain is responsible for managing the machine learning models and their interactions with the frontend and backend. It includes the machine learning models, preprocessing pipelines, and the analysis manager that orchestrates the entire process.

- **User Manager**: This subdomain handles user interactions with the platform, including data input, visualization, and user feedback.

The next diagram shows the Deployment Architecture of the AIRIS platform in a cloud environment, which includes the deployment of the frontend, backend, and machine learning models on a cloud platform. The deployment architecture is designed to be scalable and maintainable, allowing for easy integration of new features and models in the future:
![Deployment Architecture](Images/Despliegue.png)


---

## Tecnical Stack

The architecture includes a frontend application built with React.js, a backend API developed with FastAPI, and machine learning models implemented in Python. The system is designed to handle user requests, process data, and provide predictions for glaucoma diagnosis.


## Features

- User-friendly interface for data input and visualization
- Integration of machine learning models for glaucoma diagnosis
- RESTful API endpoints for model predictions
- Machine Learning models for classification of glaucoma
- Documentation for easy understanding and usage
- Robust backend for handling requests and processing data
- Scalable architecture for future enhancements
- Easy deployment and integration with cloud services.

---
## Installation and Usage
### Prerequisites
- Python 3.8 or higher
- Node.js 14 or higher


### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/aarevalom0/AIris-MachineLearning.git
   cd AIris-MachineLearning
   ```

2. Set up the backend:
   ```bash
   cd Backend
   pip install -r requirements.txt
   ```

3. Set up the frontend:
   ```bash
   cd Front
   cd ai-ris-website
   npm install
   ```

4. Set up the machine learning environment:
   ```bash
   cd Machine_Learning_Model
   pip install -r requirements.txt
   ```

### Usage
1. Start the backend server:
   ```bash
   cd Backend
   uvicorn APIRest:app --reload
   ```

2. Start the frontend development server:
   ```bash
   cd Front
   npm start
   ```

3. Access the application at `http://localhost:3000`.


## Thesis Project Context

This project was developed as part of the undergraduate thesis for the Biomedical Engineering degree at Universidad de los Andes, Bogotá, Colombia, and was formally presented in 2025. It forms a key component of the research initiative VitaVision, which proposes an accessible, low-cost solution for early glaucoma screening by combining artificial intelligence with portable fundus imaging using smartphone-based optical support.

The code, datasets, and models presented in this repository form a core component of the research and technical validation carried out during the thesis process. All documentation, methodology, and results are aligned with the objectives of the VitaVision thesis project, which integrates biomedical engineering, machine learning, and digital health innovation.