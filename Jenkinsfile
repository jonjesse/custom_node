#!groovy

pipeline {
  agent none
    stages {
      stage ('build') {
        checkout scm
	def custImg = docker.build("node:${env.BUILD_ID}")
      }      
      stage ('RUN') {
        custImg.inside() { //here you can mount volume if needed
	  sh 'npm install --save express'
	  sh 'npm install --save jasmine'
	  sh 'npm install --save request'
	}
      }
      stage ('test') {
	custImg.inside() {
	  sh 'npm test'
	}
      }
   }
 }
