import Image from 'next/image'
import axios from 'axios'

export default function Home() {

  return (
    <main className="min-h-screen">
        {/* details / info */}
        <div>
          <h1>Dashtoon AI Studio</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quam quos, eveniet est incidunt consequatur voluptatum magnam ea tempora, sapiente blanditiis error nulla quia quod. Iste ab quis voluptatum perspiciatis.</p>
        </div>

        {/* main interaction */}
        <div>
          <input type="text" />
          <button>Generate with AI</button>
        </div>

        {/* <div>
          {isLoading && "loading.."}
          {isFetching && "fetching.."}
          {error && `${error.message}`}
          {data && `${JSON.stringify(data)}`}
        </div> */}
    </main>
  )
}
