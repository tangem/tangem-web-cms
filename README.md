# Tangem WEB CMS

## Using Environment Variables

| Parameter             | Description                                                            |
|-----------------------|------------------------------------------------------------------------|
| HOST                  | Host of application                                                    |
| PORT                  | Port of application                                                    |
| APP_KEYS              | Keys for application sessions                                          |
| API_TOKEN_SALT        | New API tokens are generated using a salt                              |
| ADMIN_JWT_SECRET      | Random string used to create new JWTs for admin                        |
| JWT_SECRET            | Random string used to create new JWTs                                  |
| AWS_REGION            | AWS region                                                             |
| AWS_ACCESS_KEY_ID     | AWS access key id                                                      |
| AWS_SECRET_ACCESS_KEY | AWS secret access key                                                  |
| AWS_BUCKET            | Name of AWS Bucket                                                     |
| DATABASE_HOST         | Name of host to connect to Postgresql                                  |
| DATABASE_PORT         | Port number to connect to at the Postgresql host                       |
| DATABASE_USER         | PostgreSQL user name to connect as                                     |
| DATABASE_PASSWORD     | Password to be used if the PostgreSQL demands password authentication. |
| DATABASE_NAME         | The database name.                                                     |


# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).
