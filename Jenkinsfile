#!groovy

pipeline {
  agent any
    stages {
      stage ('Build') {
        steps {
          checkout scm
	  def custImg = docker.build("node:${env.BUILD_ID}")
        }
      }      
      stage ('RUN') {
        steps {
          custImg.inside() { //here you can mount volume if needed
	    sh 'npm install --save express'
	    sh 'npm install --save jasmine'
	    sh 'npm install --save request'
	  }
        }
      }
      stage ('Test') {
	steps {
	 custImg.inside() {
	   sh 'npm test'
	 }
	}
      }
   }
 }
