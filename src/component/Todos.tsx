import { CheckCircleIcon, HandThumbUpIcon, UserIcon, PlusIcon } from '@heroicons/react/20/solid'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import React, { useState } from 'react';
import { addTodo, deleteTodo, selectTodos, moveToCompleted } from '../component/todoSlice';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Todos() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);

  return (
    <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200">
        {todos.map((event, eventIdx) => (
          <li className="py-4" key={event.id}>
            <div className="relative">
              <div className="relative flex space-x-3 group">
                <div className="group-hover:bg-white">
                  <span
                    className=
                    'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                  >
                    <CheckCircleIcon
                      onClick={() => dispatch(moveToCompleted(event.id))}
                      className="h-5 w-5 text-gray-500 group-hover:text-cyan-600" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-900" style={{ marginRight: '500px' }}>
                      {event.content}{' '}
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}></time>
                    <p onClick={() => dispatch(deleteTodo(event.id))} className="group-hover:text-rose-700">Delete</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
        <div className="relative group">
          <div className="relative flex space-x-3 ">
            <div className="group-hover:bg-white relative flex space-x-3" style={{ marginTop: '10px' }}>
              <span
                className=
                'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
              >
                <PlusIcon
                  onClick={() => console.log('clicked')}
                  className="h-5 w-5 text-gray-500 group-hover:text-cyan-600" aria-hidden="true" />
              </span>
              <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                <div onClick={() => dispatch(addTodo())}>
                  <p className="text-sm text-gray-900 group-hover:text-cyan-600" style={{ marginRight: '100px' }}>
                    Add Task
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul >
    </div >
  )
}
