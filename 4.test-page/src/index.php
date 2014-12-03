<!DOCTYPE html>
<html>
<head>
	<meta name=viewport content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta charset="UTF-8">
	<title>Тестовое задание</title>
	<link rel="stylesheet" href="style.css">
	<!-- условные операторы вида if IE 8 срабатывают далеко не всегда, проверенно на browserstack.com, поэтому лучше немного лишнего js и полная уверенность-->
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
</head>
<body>
<div class="wrapper--content">

	<!-- Навигация -->
	<header class="navigation--wrapper">
		<div id="burger">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<nav class="navigation">
			<a href="#" class="navigation__link--purple">Личный кабинет</a>
			<a href="#" class="navigation__link--green">Раздел 1</a>
			<a href="#" class="navigation__link--blue">Раздел 2</a>
			<a href="#" class="navigation__link--orange">Раздел 3</a>
			<a href="#" class="navigation__link--grey">Раздел 4</a>
			<a href="#" class="navigation__link--red">Раздел 5</a>
		</nav>
	</header>

	<!-- Сайдбар -->
	<aside class="sidebar">
		<p class="sidebar__content">&#9728; TutuRu - крупнейший сервис поиска, бронирования и покупки авиабилетов и ж/д билетов.</p>
		<p class="sidebar__content">Наша цель проста - делать наших клиентов счастливыми, а их путешествия незабываемыми. Любое путешествие начинается с поиска подходящих билетов и бронирования гостиниц. А мы делаем это качественно, обеспечивая самую лучшую поддержку благодаря собственному контакт-центру</p>
	</aside>

	<main class="main">
		<div class="form--wrapper">
			<!-- Прогресс бар -->
			<table class="progressbar">
				<caption class="progressbar__header">Заполните форму</caption>
				<tbody>
					<tr>
						<td><span class="progressbar__division--not-started" id="progressbar__first-division">1</span></td>
						<td><span class="progressbar__division--not-started">2</span></td>
						<td><span class="progressbar__division--not-started">3</span></td>
						<td><span class="progressbar__division--not-started">4</span></td>
						<td><span class="progressbar__division--not-started" id="progressbar__last-division">5</span></td>
					</tr>
				</tbody>
			</table>
			<table class="common-info">
				<tbody>
					<tr>
						<td class="support-info--italic">Общая информация</td>
						<td><hr></td>
					</tr>
				</tbody>
			</table>

			<!-- Форма -->
			<form action="demo_form.php" class="form" name="common-info" method="get" id="personalinfo">
				<!-- Фамилия -->
				<div class="form__element--input--short">
					<label for="surname">Фамилия</label>
					<input type="text" name="surname" id="surname" autofocus
					 required>
				</div>

				<!-- Имя -->
				<div class="form__element--input--short">
					<label for="name">Имя</label>
					<input type="text" name="name" id="name" required>
					
				</div>

				<!-- Отчество -->
				<div class="form__element--input--long">
					<label for="patronymic">Отчество</label>
					<input type="text" name="patronymic" id="patronymic">
				</div>

				<!-- Меняли фамилию? -->
				<fieldset class="form__element--radio--short--fieldset">
					<legend>Меняли фамилию?</legend>
					<div class="radio-wrapper">
						<input id="change-surname--yes" value="surname--yes" type="radio" name="change-surname">
						<label for="change-surname--yes">Да</label>
						<input id="change-surname--no" value="surname--no" type="radio" name="change-surname" checked>
						<label for="change-surname--no">Нет</label>
					</div>
				</fieldset>

				<!-- Пол -->
				<fieldset class="form__element--radio--short--fieldset">
					<legend>Пол</legend>
					<div class="radio-wrapper">
						<input id="gender--yes" type="radio" name="gender">
						<label for="gender--yes">Муж</label>
						<input id="gender--no" type="radio" name="gender">
						<label for="gender--no">Жен</label>
					</div>
				</fieldset>

				<!-- Семейное положение -->
				<div class="form__element--select--long">
					<label for="marital-status">Семейное положение</label>
					<select id="marital-status" name="marital-status">
						<option value="marital-status--married">Женат / Замужем</option>
						<option value="marital-status--single">Холост (ая)</option>
						<option value="marital-status--divorced">В разводе (дети)</option>
						<option value="marital-status--widower">Вдовец / Вдова</option>
						<option value="marital-status--single-mother">Мать одиночка</option>
					</select>
				</div>

				<!-- Гражданство -->
				<div class="form__element--select--short">
					<label for="citizenship">Гражданство</label>
					<select id="citizenship" name="citizenship">
						<option value="citizenship--russia">Российская Федерация</option>
						<option value="citizenship--byelorussia">Белоруссия</option>
						<option value="citizenship--ukraine">Украина</option>
						<option value="citizenship--kazakhstan">Казахстан</option>
						<option value="citizenship--tajikistan">Таджикистан</option>
						<option value="citizenship--other">Другое</option>
					</select>
				</div>

				<!-- Дата рождения -->
				<fieldset class="form__element--birth-day">
					<legend>Дата рождения</legend>
					<select id="day" aria-label="day">
					</select>
					<select id="month" aria-label="month">
					</select>
					<select id="year" aria-label="year">
					</select>
				</fieldset>

				<!-- Место рождения -->
				<div class="form__element--birthplace">
					<label class="bold">Место рождения</label>
					<input type="text" name="birthplace" required>
					<span class="support-info">Например, Россия, Комсомольск-на-Амуре</span>
				</div>

			</form>
			<!-- Кнопки -->
			<div class="form__element--submit">
				<button class="button--cancel left" type="submit" formmethod="get" formaction="private-office.php" name="button--cancel">
					←
					Назад
				</button>
				<button class="button--submit right" value="submit" type="submit" form="personalinfo">
					Далее 
					→
				</button>
			</div>
		</div>
	</main>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>