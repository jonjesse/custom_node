#!groovy

pipeline {
  agent { dockerfile true}
    stages {
      stage ('RUN') {
        steps {
	  sh 'npm install --save express'
	  sh 'npm install --save jasmine'
	  sh 'npm install --save request'
	  sh 'npm test'
	}
     }
   }
}
