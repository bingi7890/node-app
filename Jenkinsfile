pipeline {
  agent linux-agent
    
  tools {nodejs "nodejs 16.2.0"}
    
  stages {    
    stage('Git') {
       steps {
            git branch: 'master',
            url: 'https://github.com/bingi7890/node-app.git'
       }
    } 
    stage('Build') {
      steps {
        sh 'npm install && npm'
         sh 'docker build node-app'
      }
    } 
  }
}