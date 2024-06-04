pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/pabasara-samarakoon-4176/mern-stack-app.git'
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: "${REPO_URL}"
            }
        }

        stage('Deploy Containers') {
            steps {
                script {
                    sh 'docker-compose up --build'
                }
            }
        }
    }

    post {
        always {
            script {
                sh 'docker-compose logs'
            }
        }
    }
}