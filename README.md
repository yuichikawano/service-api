
## Description

## Installation

### Install Dependency Library
Run in shell
```bash
yarn install
```

Run in MySQL

```sql
create database cuc_pcr_test;
```

### この環境でのみ使われる環境変数の定義
`.env.local` ファイルを作成し、そこに設定した環境変数は優先して読み込まれます。  
このファイルは `.gitignore` に追加されているのでファイルは追跡されません。
STAGEやPORTの値を設定したい場合などに使います。

```bash
cp config/example.env.local config/.env.local
vim config/.env.local
```

```dotenv
# config/.env.local

STAGE=prod
```

### Migration

開発環境など `devDependencies` も含まれる環境であればts-nodeを使うことで、ビルドを行わずにマイグレーション用のファイルを作成することができます。  
開発環境で使えるコマンドは以下のものです。

```bash
yarn typeorm
yarn typeorm:create
yarn typeorm:up
yarn typeorm:down
```

本番環境ではtypescriptのビルド環境が含まれていないため、ビルド済みのコードからマイグレーションを実行する必要があるため、コマンドが変わります。  
以下のコマンドが使用可能です。

```bash
yarn typeorm:prod
yarn typeorm:prod:create
yarn typeorm:prod:up
yarn typeorm:prod:down
```

#### 実行例

```bash
# create entities and database difference file
yarn typeorm:create migration_name_is_here

# 自動生成されるコードは大抵崩れているのでcode formatterをかける
yarn fix

# adapting the latest migrations
yarn typeorm:up
```


## Running the app

```bash
# development
yarn start

# build
yarn build

# Start in production mode (need to build it before running)
yarn start:prod
```

## Test

```bash
# unit tests running all
yarn test

# execute interactive
yarn test:watch

# e2e tests
yarn test:e2e

# test coverage
yarn test:cov

# open coverage result page
yarn test:cov:result
```

## Tips
### MySQL8.0への対応 
```
ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
```

Node.jsで使用している `mysql` モジュールは現在MySQL8.0で変更されたパスワードの認証方法に対応していません。  
MySQLの認証方法を `mysql_native_password` に変更することで対処可能です。

```sql
ALTER USER 'ns_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sM5T$e7D4';
``` 
