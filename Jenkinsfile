pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/venkatbabu949335-netizen/CypressAutomation.git'
            }
        }

        stage('Run Cypress') {
            steps {
                sh '''
                    npm install
                    npx cypress run
                '''
            }
        }
    }
}
