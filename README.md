## Разворачивание
Убедитесь, что  [docker](https://docs.docker.com/install/) и [docker-compose](https://docs.docker.com/compose/install/) установлены на вашей машине.

1. `git clone`
2. `create a .env file copy content from .env.docker and do not make any change`

запустите следующую команду в терминале
```
docker-compose up -d
```

когда докер построит все контейнеры, запустите laravel-react-app, используя следущую команду
`docker exec -it laravel_react_app sh`

теперь ты будешь внутри контейнера

выполни команды
1. `composer install && composer update`
2. `php artisan cron:refresh-database`
3. `php artisan key:gen`
4. `npm install && npm run dev`

открой браузер по адресу

`http://localhost:3000`

TODO:

- [x] Add Redux
- [x] Add Passport for authentication
- [x] User Login
- [x] User Register
- [x] Users Crud
- [x] Articles Crud
- [x] Form validation Client and Server
- [ ] Reset Password
- [x] Tests
- [x] Upgrade to Laravel 7
- [x] Upgrade to React 16.13
- [x] docker
