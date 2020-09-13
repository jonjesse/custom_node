#!groovy

pipeline {
  agent none
    stages {
      stage ('build') {
        node {
          checkout scm
	  def custImg = docker.build("node:${env.BUILD_ID}")
        }
      }      
      stage ('RUN') {
        node {
          custImg.inside() { //here you can mount volume if needed
	    sh 'npm install --save express'
	    sh 'npm install --save jasmine'
	    sh 'npm install --save request'
	  }
        }
      }
      stage ('test') {
	node {
	 custImg.inside() {
	   sh 'npm test'
	 }
	}
      }
   }
 }
