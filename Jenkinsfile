#!groovy

def custImg = ""
println(env.BUILD_ID)

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
	    sh 'npm install system-sleep'
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
      stage ('Cleanup') {
	steps {
	 script {
	    int old_build = env.BUILID_ID-1
	    sh 'docker rmi node-test:${old_build}'
	   }
	 }
	}
      }
   }
