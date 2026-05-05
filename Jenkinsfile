pipeline {
   agent any

   tools {nodejs "Nodejs25"}

   stages {
       stage('Dependencies') {
           steps {
               sh 'npm i'
           }
       }
       stage('e2e Tests') {
           steps {
               sh 'npm run test'
           }
       }
       
   }
}
