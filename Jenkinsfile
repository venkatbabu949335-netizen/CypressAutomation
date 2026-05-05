pipeline {
    agent any

    tools {
        nodejs 'NodeJS'   // Configure NodeJS in Jenkins: Manage Jenkins → Global Tool Configuration
    }

    environment {
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cypress-cache"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/venkatbabu949335-netizen/CypressAutomation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    node -v
                    npm -v
                    npm install
                '''
            }
        }

        stage('Install Cypress Binary') {
            steps {
                sh '''
                    npx cypress install
                '''
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh '''
                    npx cypress run
                '''
            }
        }

        stage('Generate Report (Optional)') {
            steps {
                sh '''
                    npm run report || true
                '''
            }
        }
    }

    post {
        always {
            echo 'Archiving test results...'

            archiveArtifacts artifacts: 'cypress/reports/**/*, cypress/screenshots/**/*, cypress/videos/**/*',
                             allowEmptyArchive: true

            junit 'cypress/results/*.xml'
        }

        success {
            echo 'Cypress Tests Passed 🎉'
        }

        failure {
            echo 'Cypress Tests Failed ❌'
        }
    }
}
