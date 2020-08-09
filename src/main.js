import {createSiteMenuTemplate} from "./view/site-menu.js";
import {createBoardTemplate} from "./view/board.js";
import {createFilterTemplate} from "./view/filter.js";
import {createLoadMoreButtonTemplate} from "./view/load-more-button.js";
import {createTaskTemplate} from "./view/task.js";
import {createTaskFormTemplate} from "./view/task-edit.js";

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeader = siteMainElement.querySelector(`.main__control`);

render(siteHeader, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(taskListElement, createTaskFormTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeend`);
}

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
