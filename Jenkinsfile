pipeline {
   agent linux-agent
   stages {
      stage('Checkout external') {
         steps {
            git branch: 'master',
            
                      
            url: 'https://github.com/bingi7890/node-app.git'
         }
      }
      stage('Build') {
         steps {

           echo "Hello" 
            
         }
      }
   }
}
