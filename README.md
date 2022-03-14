# реализована логика игры лото и ui.

# Stack:

React/Typesctipt/redux-toolkit/redux-saga/styled-components

для тествов основной функции вычиления выиграша использова react testing library

# Правила игры: 

У игры есть 2 поля: в первом поле 19 клеток, во втором 2 клетки. От участника лотереи требуется отметить в первом поле 8 цифр, во втором 1 цифру.


Нужно также сравнить отмеченные пользователем числа с двумя случайно сгенерированными, в соответствиями с правилами игры, массивами чисел (8 чисел в первом массиве, 1 число во втором). 

 

В случае совпадения 4-х чисел в первом поле или 3-х чисел и более в первом поле и 1-го числа втором, пользователь считается победителем лотереи и получает причитающиеся ему лавры (ничего не получает).



Задания со звездочкой. 

Это не обязательная часть, но мы будем рады, если вы её выполните. Если нет, то мы просто зададим похожие вопросы уже на собеседовании.

# Доп функционал: 

1) Сделана адаптивная mobile-first вёрстку, условно приближенную к макету.

2) Реализована генерация случайно выбранных полей в билете по  правилам лотереи. Все это происходит после нажатия на значок волшебной палочки.

3) Реализовать логику отправки выбранных чисел на сервер по любому URL. Данные отправляються постом. В данных отправки следующий объект:

{

  selectedNumber:

    { firstField: [ *first field numbers* ], secondField: [ *second field numbers* ] },

    isTicketWon: *Boolean(true||false)*

  }



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
