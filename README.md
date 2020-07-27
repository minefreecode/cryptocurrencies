# Проект 
Реализован связке React, Reduc, Laravel

## Описание проекта
1. Команды в директории `app/console/Commands` предназначены для автоматизации процессов миграции, первичной заливке данных, 
автоматической установки токенов паспортов для  OAuth 2.0 сервера авторизации. Токены заливаются в БД из таблицы `oauth_clients` при восстановлении
дампа БД скриптом `.docker/db/dump.sql`, который запускается докером в ходе создания-компиляции образов по команде `docker-compose up -d`.
Команда `PassportConfigure` предназначена  для автоматической конфигурации паспортов для  OAuth 2.0 сервера авторизации.




## Разворачивание
Убедитесь, что  [docker](https://docs.docker.com/install/) и [docker-compose](https://docs.docker.com/compose/install/) установлены на вашей машине.

1. `git clone`
2. `create a .env file copy content from .env.docker and do not make any change`

запустите следующую команду в терминале
```
docker-compose up -d
```

когда докер построит все контейнеры, запустите контейнер laravel-react-app, используя следущую команду
`docker exec -it laravel_react_app sh`

теперь ты будешь внутри контейнера

выполните команды
1. `composer install && composer update`
2. `php artisan cron:refresh-database`
3. `php artisan key:gen`
4. `npm install && npm run dev`

откройте браузер и наберите

`http://localhost:3000`

