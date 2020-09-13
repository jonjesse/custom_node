#!groovy

pipeline {
  agent any
    stages {
      stage ('Build') {
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
      stage ('Test') {
	node {
	 custImg.inside() {
	   sh 'npm test'
	 }
	}
      }
   }
 }
