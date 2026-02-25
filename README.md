

# 📝 Demo Todo App – Developed with Docker

This demo app shows a **simple Todo application** set up using:

* **index.html** with pure JavaScript and minimal CSS styles
* **Node.js backend** with Express module
* **MongoDB** for data storage

All components are fully **Dockerized**, allowing you to run the app anywhere with Docker.

---

## ⚡ Run the Application with Docker

### Step 1 — Create Docker Network (Optional)

```bash
docker network create mongo-network
```

> This is optional. If you skip it, Docker will use the default network.

---

### Step 2 — Start MongoDB

```bash
docker run -d -p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
--name mongodb --net mongo-network mongo
```

---

### Step 3 — Start Mongo-Express (Web UI)

```bash
docker run -d -p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
-e ME_CONFIG_MONGODB_SERVER=mongodb \
--net mongo-network \
--name mongo-express \
mongo-express
```

> You can now access Mongo-Express in your browser:
> [http://localhost:8081](http://localhost:8081)

---

### Step 4 — Set Up Database

1. In Mongo-Express UI, create a database, e.g., `tododb`
2. Create a collection, e.g., `tasks`

---

### Step 5 — Start Node.js Application

1. Navigate to your app directory:

```bash
cd app
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node server.js
```

> Your Node.js app UI is now available: [http://localhost:3000](http://localhost:3000)

---

## 🐳 Run with Docker Compose

Docker Compose automates running multiple containers.

1. Start MongoDB and Mongo-Express:

```bash
docker-compose -f docker-compose.yaml up
```

2. Open Mongo-Express in your browser: [http://localhost:8081](http://localhost:8081)
3. Create database and collection in the UI
4. Start Node.js server as above
5. Access Node.js app: [http://localhost:3000](http://localhost:3000)

---

## 📦 Build a Docker Image from the App

```bash
docker build -t my-todo-image:1.0 .
```

> The `.` at the end denotes the location of your Dockerfile.
> Once built, you can run it anywhere:

```bash
docker run -d -p 3000:3000 my-todo-image:1.0
```

---

I see a small copy-paste error in your Docker Hub section — the `docker tag` command was repeated under "Login," and some commands aren’t in code blocks consistently. Here's a **cleaned and correct version** you can use directly:

---

## 🚀 Optional — Push to Docker Hub

1. **Tag your image**:

```bash
docker tag my-todo-image:1.0 <your-dockerhub-username>/my-todo-image:1.0
```

2. **Login to Docker Hub**:

```bash
docker login
```

3. **Push image to Docker Hub**:

```bash
docker push <your-dockerhub-username>/my-todo-image:1.0
```

4. **Pull the image on any machine**:

```bash
docker pull <your-dockerhub-username>/my-todo-image:1.0
```

