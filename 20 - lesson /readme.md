Ресурсы и методы<br>

Вернемся к стартовой строке запроса и вспомним, что в ней присутствует такой параметр, как URI. Это расшифровывается, как Uniform Resource Identifier — единообразный идентификатор ресурса. Ресурс — это, как правило, файл на сервере (пример URI в данном случае '/styles.css'), но вообще ресурсом может являться и какой-либо абстрактный объект ('/blogs/webdev/' — указывает на блок «Веб-разработка», а не на конкретный файл).<br>

Для разграничения действий с ресурсами на уровне HTTP-методов и были придуманы следующие <br>варианты:<br>
GET — получение ресурса<br>
POST — создание ресурса<br>
PUT — обновление ресурса <br>
DELETE — удаление ресурса<br>

Обратите внимание на тот факт, что спецификация HTTP не обязывает сервер понимать все методы (которых на самом деле гораздо больше, чем 4) — обязателен только GET, а также не указывает серверу, что он должен делать при получении запроса с тем или иным методом. А это значит, что сервер в ответ на запрос DELETE /index.php HTTP/1.1 не обязан удалять страницу index.php на сервере, так же как на запрос GET /index.php HTTP/1.1 не обязан возвращать вам страницу index.php, он может ее удалять, например :)<br>



REST<br>

В итоге, совместив имеющуюся спецификацию HTTP и REST-подход наконец-то обретают смысл различные HTTP-методы. GET — возвращает ресурс, POST — создает новый, PUT — обновляет существующий, DELETE — удаляет.<br>



Запрос:<br>
GET /index.php HTTP/1.1<br>
Host: example.com<br>
User-Agent: Mozilla/5.0 (X11; U; Linux i686; ru; rv:1.9b5) Gecko/2008050509 Firefox/3.0b5<br>
Accept: text/html<br>
Connection: close<br>


Ответ:<br>
HTTP/1.0 200 OK<br>
Server: nginx/0.6.31<br>
Content-Language: ru<br>
Content-Type: text/html; charset=utf-8<br>
Content-Length: 1234<br>
Connection: close<br>

... САМА HTML-СТРАНИЦА ...<br>