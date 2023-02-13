import React from "react";
import {FilterValuesType} from "./App";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: number) => void // 6. Получаем функцию с её аргументами через пропсы
    changeFilter: (value: FilterValuesType) => void // 13. Получаем функцию с её аргументами через
    // пропсы
}

export function Todolist(props: TodolistPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el) => {
                    return <li>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                        <button onClick={() => {
                            props.removeTask((el.id)) // 7. Выбрасываем функцию через пропсы
                        }}>✖️
                        </button>
                    </li>
                })}
            </ul>

            <div>
                <button onClick={() => {
                    props.changeFilter("All")
                }}>All
                </button>
                <button onClick={() => {
                    props.changeFilter("Active")
                }}>Active
                </button>
                <button onClick={() => {
                    props.changeFilter("Completed")
                }}>Completed
                </button> {/* 14. Выбрасываем функцию через пропсы и передаём нужные значения фильтра */}
            </div>
        </div>
    )
}