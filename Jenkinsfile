pipeline {
    agent any

    environment {
        DOCKER_COMPOSE = '/usr/local/bin/docker-compose' 
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/pabasara-samarakoon-4176/mern-stack-app.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker build -t server_image ./server'
                    sh 'docker build -t client_image ./client'
                }
            }
        }

        stage('Deploy with Ansible') {
            steps {
                sshagent(['ansible-ssh-key']) {
                    sh '''
                    ansible-playbook -i ansible/inventory.ini ansible/playbook.yml
                    '''
                }
            }
        }
    }
}
