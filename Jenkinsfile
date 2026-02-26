pipeline {
    agent any

    stages {
        stage("Build") {
            steps {
                echo 'Building the application...'
            }
        }

        stage("Test") {
            steps {
                echo 'Testing the application...'
                // Groovy code
                script {
                    def test = 2 + 2 > 5 ? 'good' : 'not good'
                    echo "Test result: ${test}"
                }
            }
        }

        stage("Deploy") {
            steps {
                echo 'Deploying the application...'
            }
        }
    }
}
