import React, { useState } from 'react';
import { Bars3Icon, ArchiveBoxIcon, SparklesIcon } from '@heroicons/react/24/outline'
import CompletedTodos from './CompletedTodos';

const navigation = [
  { name: 'Lets', href: '#' },
  { name: 'Get', href: '#' },
  { name: 'This', href: '#' },
  { name: 'Bread', href: '#' },
]

export default function EditTaskModal() {
  const [showModal, setShowModal] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-x-12 ">
          <SparklesIcon className="animate-pulse h-8 w-auto text-amber-400" aria-hidden="true" />
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <ArchiveBoxIcon className="h-7 w-auto hover:text-cyan-600" aria-hidden="true" onClick={() => {
          setShowModal(true)
          console.log('showModal: ', showModal)
        }} />
      </nav>
      {showModal && <CompletedTodos handleClose={() => setShowModal(false)} />}
    </header>
  )
}
