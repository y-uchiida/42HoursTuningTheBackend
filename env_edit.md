#env_edit
VMへのツールのインストールなど、環境に対する変更の履歴を残します  
動作環境へのツール導入、ミドルウェアの設定変更などについては、リポジトリに設定ファイルを保存することで管理できるので対象外です  

- unar インストール
alp のzip解凍のために必要だったので  
```
sudo apt install unar
```

- alpインストール
```
cd ~
wget https://github.com/tkuchiki/alp/releases/download/v1.0.8/alp_linux_amd64.zip
unar alp_linux_amd64.zip
sudo install alp /usr/local/bin/alp
```

- percona-toolkit インストール
```
apt --fix-broken install
sudo apt-get install gdebi
wget https://downloads.percona.com/downloads/percona-toolkit/3.3.1/binary/debian/focal/x86_64/percona-toolkit_3.3.1-1.focal_amd64.deb ~/
gdebi ~/percona-toolkit_3.3.1-1.focal_amd64.deb
```

- pt-query-digest 使い方
1. 採点モジュールを実行する
2. `make cp_slow_query` でスロークエリのログをホストにコピー
3. `pt-query-digest development/mysql/mysql_log/slow_query.log` を実行
