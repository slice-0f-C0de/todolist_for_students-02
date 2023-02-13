import React, {useState} from 'react';
import './App.css';
import {Todolist, TasksType} from "./Todolist";

export type FilterValuesType = "All" | "Active" | "Completed" // 9. Создаём тип со всеми значениями
// фильтра

function App() {

    let [tasks, setTasks] = useState<Array<TasksType>>([ // 3. Объявляем стейт и помещаем в
        // него массив с тасками
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JavaScript", isDone: false},
        {id: 4, title: "React", isDone: false}
    ])

    let [filter, setFilter] = useState<FilterValuesType>("All") // 8. Объявляем стейт с
    // фильтрацией
    // Также можно указать конкретный тип фильтров

    function removeTask(id: number) { // 1. Создаём функцию удаления тасок с аргументом айди
        let filteredTasks = tasks.filter(el => el.id !== id) // 2. Новой переменной присваиваем
        // массив тасок с фильтром, который из всех элементов будет выбирать именно по айди, а затем
        // сравнивать элемент на который кликнули с тем который надо удалить
        setTasks(filteredTasks) // 4. Сетаем уже отфильтрованный массив
    }

    function changeFilter(value: FilterValuesType) { // 10. Создаём функцию для фильтрации массива и
        // типом для фильтров в качестве аргументов
        setFilter(value) // 11. Сетаем тип фильтров
    }

    let TasksForTodolist = tasks

    if (filter === "Active") {
        TasksForTodolist = tasks.filter((el) => el.isDone === false)
    }
    if (filter === "Completed") {
        TasksForTodolist = tasks.filter((el) => el.isDone === true)
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={TasksForTodolist}
                      removeTask={removeTask} // 5. Передаём функцию в компоненту
                      changeFilter={changeFilter}/> {/* 12. Передаём функцию в компоненту */}
        </div>
    );
}

export default App;
