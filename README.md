Тестовое задание на позицию верстальщик
==================
Напутствие к тестовому заданию. При решении задания нельзя использовать готовые фреймворки типа getbootstrap.com и им подобные. Нас интересует как вы умеет верстать, а не умение пользоваться готовыми сверстанными компонентами.

В задании можно использовать как VanillaJS, так и jQuery. Это будет плюсом, но только в случае если это оправданно. Все-таки это задание на верстку, а не на программирование. Хотя, показав свои знания в грамотном применении JavaScript, вы сильно повышаете свою профессиональную привлекательность для нас.

Хотелось бы увидеть все прелести HTML5, в идеале семантическую верстку. Если вы знакомы с идеологией БЭМ (не обязательно версия от Яндекса, с полным соответствием и заморочками, достаточно общих принципов), то еще один плюс к вашей карме.

Можно использовать normalize.css. Минус будет за использование reset.css. Можем спросить у Вас аргументацию в пользу того или иного решения, если попадете к нам на собеседование.

Все задания должны корректно работать в браузерах:
- IE8+
- Chrome
- Firefox
- Opera 12+
- Safari

Расскажите нам, как вы тестировали результат своей работы. Какие используете инструменты и как вы осуществляете тестирование. Какое у вас рабочее окружение (операционная система, IDE, браузеры, устройства,…).

Результат выполнения задания нужно будет оформить здесь же, на гитхабе. Вы делаете fork этого задания и в него пушите результат вашей работы. В качестве ответа не нужно присылать никаких(!) ZIP архивов и наборов файлов. Все ваши ответы должны быть оформлены на https://github.com/ . Вы присылаете только ссылку на ваш репозиторий. У нас в компании применяется GIT, и если вы его не знаете, вам стоит освоить базу самостоятельно. Если у вас еще нет аккаунта, то это хороший повод его завести.

### Верстка компонентов

#### 1. Сверстайте компонент оценки и показа рейтинга 

![rating]( http://img-fotki.yandex.ru/get/6827/9330072.e/0_11ffdb_166c4091_orig.png)

Все наши компоненты должны быть очень гибкими к окружающему пространству, должны уметь располагаться на любом фоне и, при желании, легко менять свой стиль. Обратите внимание, что компонент должен не только выставлять оценку, но и показывать текущую. Нужно уметь выставлять текущую оценку изменением имени класса. Именование и количество классов на ваше усмотрение, но чем их меньше - тем лучше. В идеале хотелось бы иметь возможность менять оценку сменой одного класса.

#### 2. Сверстайте прогресс-бар
Выбор техники и компонентов - все на ваше усмотрение. Но, хотелось бы увидеть простое лаконичное решение в рамках HTML5.

![progress_bar]( http://img-fotki.yandex.ru/get/6829/9330072.e/0_11ffdc_55e43581_orig.png)

#### 3. Сверстайте кнопку

![button]( http://img-fotki.yandex.ru/get/6804/9330072.e/0_11ffdd_7a4aa524_orig.png)

Пожалуйста, учитывайте, что эта кнопка должна быть кнопкой на все случаи жизни. Сделайте несколько примеров кнопки в различном окружении и различном html-представлении. Кнопка может быть и как input, и как a, и как div.

Должна быть возможность легко менять размер кнопки. Лучше всего для этого завести классы, реализующие размеры big, normal, small. Размеры на ваше усмотрение, нам важно увидеть возможность легко менять размер кнопки.

### Сверстайте тестовую страницу

**Требуется:**

1. Сверстать страницу из двух колонок. Страница фиксированной ширины, т.е. она не зависит от ширины окна браузера. Ширина всей страницы - 1024px, в том числе ширина левой колонки - 200px и отступ между левой колонкой и основным содержимым - 40px.
2. Сверстать 2-х колоночный каркас страницы (вы сами выбираете способ верстки, но мы хотим получить страницу с применением современных технологий)
3. Сверстать навигационную шапку
4. Сверстать заголовок и пошаговый индикатор над формой. Индикатор нельзя делать одной картинкой: подсветка у текущего, предыдущих и следующих шагов должна включаться/выключаться простой заменой css-классов у соответствующих элементов в html-структуре.
5. Сверстать саму форму. Здесь желательно минимальное использование дополнительных html-элементов, т.е. чтобы html-структура была как можно проще, а все визуальное оформление было вынесено в css-стили
6. Сверстать кнопки под формой, и чтобы они были функциональны, т.е. при клике на кнопку "Далее" браузер отправлял форму далее (куда - неважно, на лоюбую страницу, хоть на саму себя. Способ отправки выбираете сами, на ваше усмотрение)

**Ожидаемый результат**

![page](http://img-fotki.yandex.ru/get/6734/9330072.e/0_11ffe0_94c8c2d0_L.png)

[Оригинал изображения можно взять по этой ссылке](http://img-fotki.yandex.ru/get/6734/9330072.e/0_11ffe0_94c8c2d0_orig.png)

Большим плюсом будет реализация адаптивной верстки и корректное отображение страницы под мобильные устройства. Оформление UI под малый размер экрана (телефона, планшета) на ваше усмотрение - у вас полный карт-бланш, можете реализовать любую схему, используя любые технологии.


## Дополнительные вопросы
Как можно создать эффект blur на изображении во всех основных браузерах? Какие плюсы и минусы есть у каждого варианта? Что бы вы выбрали, если бы речь шла о поддержке эффекта в браузерах в ближайшем будущем?


