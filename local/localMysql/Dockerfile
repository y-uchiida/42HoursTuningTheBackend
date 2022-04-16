FROM mysql:8.0

RUN \
  apt-key adv --keyserver keyserver.ubuntu.com --recv-key 467B942D3A79BD29 \
&& \
  apt-get update -y \ 
&& \
  apt install -y wget \
&& \
  wget http://mysqltuner.pl/ -O ~/mysqltuner.pl \
&& \
  wget https://raw.githubusercontent.com/major/MySQLTuner-perl/master/basic_passwords.txt -O ~/basic_passwords.txt \
&& \
  wget https://raw.githubusercontent.com/major/MySQLTuner-perl/master/vulnerabilities.csv -O ~/vulnerabilities.csv

COPY ./custom.conf /etc/mysql/conf.d/mysql.cnf
COPY ./sql/V0.sql /docker-entrypoint-initdb.d/1_init.sql
COPY ./sql/2_loadTestData.sql /docker-entrypoint-initdb.d/
COPY ./data/* /docker-entrypoint-initdb.d/

CMD ["mysqld"]
