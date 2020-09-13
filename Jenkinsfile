#!groovy

pipeline {
  agent { dockerfile true}
    stages {
      stage ('RUN') {
        steps {
	  sh 'npm install'
	  sh 'npm test'
	}
     }
   }
}
