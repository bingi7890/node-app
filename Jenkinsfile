pipeline {
    agent {
        node {
            label 'linux-agent'
        }
    }
    tools {nodejs "nodes 16.2.0"}   
    stages {    
       stage('Git') {
          steps {
             git branch: 'master',
             url: 'https://github.com/bingi7890/node-app.git'
          }
       } 
       stage('Build') {
          steps {
             
            
             sh 'docker build -f Dockerfile -t sample-node-app .'
           //  sh 'docker login -u docvishwa -p Vishwa@1234$'
           //  sh 'docker push sample-node-app'
             
          }
       } 
        stage('deployment'){
            steps{
                sh 'docker run --name sample-node-app -p 8080:8080 sample-node-app:latest &'
            }
        }
                
    }
}
