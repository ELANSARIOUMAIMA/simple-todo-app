pipeline {
  agent any 

  environment {
    DOCKER_HUB_CRED = 'docker-hub' // My Docker Hub credentails ID in Jenkins
    DOCKER_IMAGE = 'elansarioumaima/my-todo-image:latest'
  }
  
  stages{

    stage ('checkout'){
      steps {
        git branch: 'main',url:'https://github.com/ELANSARIOUMAIMA/simple-todo-app.git' 
      }
    }
    
    stage ('Build Node Docker Image'){
      steps {
        script {
          docker.build("${DOCKER_IMAGE}","./")  // ./ assumes Dockerfile is in repo root      
        }
      }
    }


    stage ('Push Node Image to Docker Hub'){
      steps {
        script {
           docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_HUB_CRED}") {
             docker.image("${DOCKER_IMAGE}").push()
           }
        } 
      }
    }

    stage ('Deploy Full Stack with Docker compose'){
      steps {
        script {
          // Stop existing containers if running
          sh 'docker-compose down || true'

          // Build and start containers
          sh 'docker-compose up -d --build'
        }
      }
    }  
  }

  post {
    always {
      echo 'Pipline finished'
    }
    success {
      echo 'Deployment successful 🚀'
    }
     failure {
        echo 'Pipeline failed ❌'
     }
  }
}
