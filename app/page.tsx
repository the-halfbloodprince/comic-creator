'use client'

import Image from 'next/image'
import axios from 'axios'
import { useRef, useState, MouseEventHandler } from 'react'

import Input from '@/components/Input'
import LoadingView from '@/components/LoadingView'
import DataView from '@/components/DataView'
import ErrorView from '@/components/ErrorView'

import { useFetchData } from '@/hooks/fetchData'

export default function Home() {

  const {
    isLoading,
    data,
    error,
    fetchData
  } = useFetchData()

  const generated_image_src = data ? URL.createObjectURL(data.image_blob) : ""

  return (
    <main className="min-h-screen">
        {/* details / info */}
        <div
          className='
          h-[70dvh]
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

        {/* error component */}
        {
          error && (
            <ErrorView
            error={error}
              // fetchData={fetchData}
            />
          )
        }

        {/* data component */}
        {
          data && (
            <DataView 
              generated_image_src={generated_image_src}
              generated_image_description={data.description}
            />
          )
        }

        {/* loading / input */}
        {
          isLoading ? 
            <LoadingView /> : 
            <Input buttonOnClick={fetchData} />
        }

    </main>
  )
}
