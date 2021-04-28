import {renderList} from './list';
import {renderTask} from './task'

let lists = JSON.parse(localStorage.getItem('task.lists')) || [];
let selectedListId = localStorage.getItem()