'use client'

import Image from 'next/image'
import axios from 'axios'
import { useRef, useState, MouseEventHandler, FC, ReactElement } from 'react'

import Input from '@/components/Input'
import LoadingView from '@/components/LoadingView'
import DataView from '@/components/DataView'
import ErrorView from '@/components/ErrorView'

import { useFetchData } from '@/hooks/fetchData'
import ComicStripTemplate1 from '@/components/ComicStripTemplate1'
import ComicStripTemplate2 from '@/components/ComicStripTemplate2'
import { TemplateInfo } from '@/types/template'

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

  const {
    isLoading,
    data,
    error,
    fetchData
  } = useFetchData()

  const [templateID, setTemplateID] = useState('template_1')

  const currentTemplate = templatesAvailable.find(template => template.id === templateID)

  const generated_image_src = data ? URL.createObjectURL(data.image_blob) : ""

  return (
    <main className="min-h-screen">
        {/* details / info */}
        <div
          className='
          py-[5rem]
          flex flex-col
          justify-center
          gap-[2rem]
          items-center
          text-center
        '
        >
          <h1 className='text-6xl'>Dashtoon AI Studio</h1>
          <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quam quos, ab quis voluptatum perspiciatis.</p>
          <a className='text-2xl py-3 px-4 border-2' href="">Start generating</a>
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
              w-40
              px-3
              py-2
              font-bold
              outline-transparent
              bg-transparent
              border-2
              rounded-sm
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
          {/* { templateID } */}
        </div>
        
        

        {/* the template / grid to show */}
        { currentTemplate?.component }


        {/* error component */}
        {/* {
          error && (
            <ErrorView
            error={error}
              // fetchData={fetchData}
            />
          )
        } */}

        {/* data component */}
        {/* {
          data && (
            <DataView 
              generated_image_src={generated_image_src}
              generated_image_description={data.description}
            />
          )
        } */}

        {/* loading / input */}
        {/* {
          isLoading ? 
            <LoadingView /> : 
            <Input buttonOnClick={fetchData} />
        } */}

    </main>
  )
}
