<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

Reproduction Repo of a TypeORM module induced issue with fastify-secure-session.

Steps to reproduce:
1. Configure TypeORM connection data to a dummy test DB (doesn't matter, we are not doing any DB operations here anyways)
2. Start application with `npm run start`
3. Make a request to any endpoint of the application
4. See this the error in fastify logs: `Flash plugin requires a valid session.`

How it should be:
1. Remove or comment out the TypeORM module import in `app.module.ts`
2. Start application with `npm run start`
3. Make a request to any endpoint of the application
4. No errors reported. Session gets created: `fastify-secure-session: there is no cookie, creating an empty session`
