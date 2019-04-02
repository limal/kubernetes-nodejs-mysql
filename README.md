# NodeJS and MySQL on Kubernetes

To start:

```
skaffold dev
```

If you want to connect directly to your MySQL service from your host machine. Simply get an URL from minikube and use it as a hostname. Remember that the port is not going to be the default 3306 but the one specified in `mysql.yaml`.

```
minikube service mysql --url
```

## MySQL considerations

Create a user for your database with `'dbuser'@'%'` with general scope as you can't guarantee what interal IP you will be connecting from.

```
CREATE DATABASE dbname;
CREATE USER 'dbuser'@'%' IDENTIFIED BY 'TODO_password';
GRANT ALL PRIVILEGES ON dbname.* TO 'dbuser'@'%';
FLUSH PRIVILEGES;
```
