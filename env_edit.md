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

