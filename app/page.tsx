'use client'

import { useState } from 'react'
import { Bebas_Neue } from 'next/font/google'

import ComicStripTemplate1 from '@/components/ComicStripTemplate1'
import ComicStripTemplate2 from '@/components/ComicStripTemplate2'

import { TemplateInfo } from '@/types/template'

const bebas_neue = Bebas_Neue({ weight: '400', subsets: ['latin'] })

const templatesAvailable: TemplateInfo[] = [
  {
    id: 'template_1',
    name: 'Template 1',
    component: <ComicStripTemplate1 />
  },
  {
    id: 'template_2',
    name: 'Template 2',
    component: <ComicStripTemplate2 />
  }
]

export default function Home() {

  const [templateID, setTemplateID] = useState('template_1')

  const currentTemplate = 
      templatesAvailable
        .find(template => template.id === templateID)

  return (
    <main className="min-h-screen">

        {/* details / info */}
        <div
          className='
            heading
            pt-[7rem]
            pb-2rem lg:pb-[4rem]
            flex flex-col
            justify-center
            gap-[2rem]
            items-center
            text-center
        '
        >
          <h1 
            className={`text-7xl lg:text-8xl title ${bebas_neue.className}`}
          >
            Dashtoon AI Comic Creator
          </h1>

          <p className='text-md lg:text-2xl w-3/4'>
            Create your AI generated Comic Strips using the available templates. This was created by <a href="https://github.com/the-halfbloodprince">Manish Kumar Das (the-halfbloodprince)</a>  as a task for Product Engineer role at Dashtoon
          </p>
          
          <a className='text-2xl py-3 px-8 rounded-sm border-2 hover:bg-white hover:text-black font-bold transition-all duration-500' href="#comicstrip">Start generating</a>
        
        </div>

        <div
          className='
            my-[2rem]
            flex flex-col
            items-center space-y-4
            text-xl
          '
        >
          <label htmlFor="templateID">Choose your template</label>
          <select name="templateID" id="templateID" 
            value={templateID}
            onChange={(e) => setTemplateID(e.target.value)}
            className='
              w-40 px-3 py-2
              font-bold
              outline-transparent
              bg-transparent
              border-2 rounded-sm
            '
          >
            { 
              templatesAvailable
                .map(template => 
                  <option 
                    key={template.id} 
                    className='text-black' 
                    value={template.id} 
                  >{template.name}</option>
                ) 
              }
          </select>
        </div>

        {/* the template / grid to show */}
        <div id='comicstrip'>
          { currentTemplate?.component }
        </div>

        <h3 
          className={`text-center mt-24 text-3xl lg:text-5xl credits ${bebas_neue.className}`}
        >
          Built by <a className='text-[#6a26cd]' href="https://github.com/the-halfbloodprince" target='_blank'>Manish Kumar Das</a>
        </h3>

    </main>
  )
}
