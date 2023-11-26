'use client'

import Image from 'next/image'
import axios from 'axios'
import { useRef, useState, MouseEventHandler } from 'react'

import Input from '@/components/Input'

import { useFetchData } from '../hooks/fetchData'

const DataView = ({
  generated_image_src,
  // fetchData
}: {
  generated_image_src: string,
  // fetchData: Function
}) => {

  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <div>
      <img 
        ref={imageRef} 
        id='generated-image' 
        src={generated_image_src} alt="" 
      />
      {/* <Input buttonOnClick={fetchData} /> */}
    </div>
  )
}

const ErrorView = ({ 
  error,
  // fetchData 
}: {
  error: any,
  // fetchData: Function
}) => {

  return (
    <div>
      <h1>There&apos;s an error.</h1>
      <details>
        <summary>See error</summary>
        <p>{JSON.stringify(error)}</p>
      </details>
      {/* <Input buttonOnClick={fetchData} /> */}
    </div>
  )

}

const LoadingView = () => {
  return (
    <div>
      Loading...
    </div>
  )
}

export default function Home() {

  const {
    isLoading,
    data,
    error,
    fetchData
  } = useFetchData()

  const generated_image_src = data ? URL.createObjectURL(data) : ""

  return (
    <main className="min-h-screen">
        {/* details / info */}
        <div>
          <h1>Dashtoon AI Studio</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quam quos, eveniet est incidunt consequatur voluptatum magnam ea tempora, sapiente blanditiis error nulla quia quod. Iste ab quis voluptatum perspiciatis.</p>
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
              // fetchData={fetchData}  
            />
          )
        }

        {/* loading / input */}
        {
          isLoading ? 
            <LoadingView /> : 
            <Input buttonOnClick={fetchData} />
        }

        {/* <div>
          {isLoading && "loading.."}
          {isFetching && "fetching.."}
          {error && `${error.message}`}
          {data && `${JSON.stringify(data)}`}
        </div> */}
    </main>
  )
}
