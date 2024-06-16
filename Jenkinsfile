pipeline {
    agent any

    environment {
        DOCKER_COMPOSE = '/usr/local/bin/docker-compose'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/pabasara-samarakoon-4176/mern-stack-app.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh '${DOCKER_COMPOSE} -f docker-compose.yml build'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh '${DOCKER_COMPOSE} -f docker-compose.yml up -d'
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    sh '${DOCKER_COMPOSE} -f docker-compose.yml up down'
                }
            }
        }
    }

    post {
        always {
            script {
                sh "${DOCKER_COMPOSE} -f docker-compose.yml down --volumes"
            }
        }
        success {
            echo 'Build and Deployment Successful!'
        }
        failure {
            echo 'Build or Deployment Failed!'
        }
    }
}
