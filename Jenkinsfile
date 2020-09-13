#!groovy

def custImg = ""

pipeline {
  agent any
    stages {
      stage ('Build') {
        steps {
	  script {
          checkout scm
	  custImg = docker.build("node-test:${env.BUILD_ID}")
         }
	}
      }      
      stage ('RUN') {
        steps {
	  script {
          custImg.inside() { //here you can mount volume if needed
	    sh 'npm install --save express'
	    sh 'npm install --save jasmine'
	    sh 'npm install --save request'
	   }
	  }
        }
      }
      stage ('Test') {
	steps {
	 script {
	 custImg.inside() {
	   sh 'npm test'
	 }
	 }
	}
      }
      stage ('Deploy') {
	steps {
	 script {
	  docker.withRegistry('http://192.168.1.253:8111') {
	    custImg.push()
	   }
	 }
	}
      }
   }
 }
