
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3003](http://localhost:3003) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on Docker

Sharing the code for any device and can access code from multi-platform. Docker can solve this problem and share your code to developer team. Following this flow to running code on Docker container:
#### Create Dockerfile
Create or make sure Docker file with following content:

    FROM node:19

    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . .
    EXPOSE 3003
    CMD npm run dev -- --port 3003


- You can change `node` version adjust to `node` minimum version.
- Change expose value to change port when running
- Customize `Dockerfile` to maximize application performance and development process

#### Build docker container
Run following command on `next-todo-list` directory :

`docker build -t next-todo-list .`

#### Running docker 
After container builded, you can running docker container on Docker Desktop or command line

`docker run -p 3003:3003 next-todo-list`

#### Build container 
Database server using mysql and split container with phpmyadmin. Make sure the docker-composer.yml already have 3 service, that is: mysql_srv, phpmyadmin_srv and app_srv. All service will merge to `next-todo-list` container. Following this command to build all service container:

`docker-compose up --build`

Wait until all service installed and ready for development. After all finish, you can open in browser [http://localhost:3003](http://localhost:3003) to manage your todo list.

:crossed_swords:HappyCoding

