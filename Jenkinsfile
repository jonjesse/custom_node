#!groovy


def custImg = ""
int curbld = env.BUILD_ID
println(curbld)
def remote = [:]
remote.name = '18.218.165.47'
remote.host = '18.218.165.47'
remote.user = 'ubuntu'
remote.allowAnyHosts = true

pipeline {
  agent any
    stages {
      stage ('Build') {
        steps {
	  script {
          checkout scm
	  custImg = docker.build("jonjesse/node:${env.BUILD_ID}")
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
      stage ('Publish') {
	steps {
          script {
	    docker.withRegistry('','dockerbuildbot-index.docker.io') {
	      println("current image: "+custImg)
              custImg.push()
	    }
	  }
	}
      }
      stage ('Deploy') {
	steps {
	  script {
	   withCredentials([sshUserPrivateKey(credentialsId:'ssh_aws', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: remote.user)]) {
	      sshCommand remote: remote, command: "sudo docker pull jonjesse/node:${curbld}"
	      sshCommand remote: remote, command: "sudo docker run -dit --rm -p 8111:3000 jonjesse/node:${curbld}"
	    }
	 }
       }
      }
      stage ('Cleanup') {
	steps {
	 script {
	    int old_build = curbld - 1
	    println("Deleing old_build "+old_build)
	    sh "docker rmi jonjesse/node:${old_build}"
	   }
	 }
	}
      }
   }
