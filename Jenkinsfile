pipeline {
    // Run this pipeline on any available Jenkins agent
    agent any 

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                // Add your build commands here, e.g., sh 'mvn clean install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your test commands here, e.g., sh 'make test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Add your deployment commands here
            }
        }
    }
    
    // Optional: Actions to take after the pipeline finishes
    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo 'The build was successful!'
        }
        failure {
            echo 'The build failed.'
        }
    }
}
