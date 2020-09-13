#!groovy

pipeline {
  agent any
    stages {
      stage ('Build') {
        steps {
	  node{
          checkout scm
	  def custImg = docker.build("node:${env.BUILD_ID}")
         }
	}
      }      
      stage ('RUN') {
        steps {
	  node {
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
	 node {
	 custImg.inside() {
	   sh 'npm test'
	 }
	 }
	}
      }
   }
 }
