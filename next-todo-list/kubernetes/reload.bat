kubectl delete deployment.apps/app-srv
kubectl delete deployment.apps/mysql-srv
kubectl delete deployment.apps/phpmyadmin-srv

kubectl delete service/app-srv
kubectl delete service/mysql-srv
kubectl delete service/phpmyadmin-srv

kubectl apply -f .
kubectl get all