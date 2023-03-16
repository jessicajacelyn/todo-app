import { CheckCircleIcon, HandThumbUpIcon, UserIcon, PlusIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react';

const timeline = [
  {
    id: 1,
    content: 'Buy Chicha yummzz',
    date: 'Today',
    datetime: '2023-03-15',
    completed: false,
  },
  {
    id: 2,
    content: 'Eat gud steak ~',
    date: 'Tomorrow',
    datetime: '2023-03-16',
    completed: false,
  },
  {
    id: 3,
    content: 'Assignmenttttt :\'))))',
    date: 'Tomorrow',
    datetime: '2023-03-16',
    completed: false,
  },
  {
    id: 4,
    content: 'Go skai!!!! >.<',
    date: 'Dec 06',
    datetime: '2023-12-06',
    completed: false,
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Todos() {
  return (
    <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200">
        {timeline.map((event, eventIdx) => (
          <li className="py-4" key={event.id}>
            <div className="relative">
              <div className="relative flex space-x-3 group">
                <div className="group-hover:bg-white">
                  <span
                    className=
                    'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                  >
                    <CheckCircleIcon
                      onClick={() => console.log('clicked')}
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
                    <time dateTime={event.datetime}>{event.date}</time>
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
                <div>
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
