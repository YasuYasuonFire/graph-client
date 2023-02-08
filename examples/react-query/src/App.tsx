import React, { useEffect } from 'react'
import gql from 'graphql-tag'
// ...
// we import types and typed-graphql document from the generated code (`..graphclient/`)
import { execute } from '../.graphclient'

function App() {
  const [data, setData] = React.useState('')

  // const myQuery = gql`
  //   query pairs {
  //     pair(id: "0x00004ee988665cdda9a1080d5792cecd16dc1220") {
  //       id
  //       token0 {
  //         id
  //         symbol
  //         name
  //       }
  //       token1 {
  //         id
  //         symbol
  //         name
  //       }
  //     }
  //   }
  // `

  //generate random number function
  const getRandomInt = (max: number) => {
    console.log('getRandomInt')
    return Math.floor(Math.random() * max)
  }

  const myQuery = gql`
    query tokens($skipNum: Int!) {
      tokens(first: 1, skip: $skipNum) {
        id
        symbol
        name
      }
    }
  `

  useEffect(() => {}, [])

  const executeQuery = () => {
    //set variable for skip
    let variables = {
      skipNum: getRandomInt(1000),
    }
    execute(myQuery, variables).then((result) => {
      setData(result?.data)
    })
    console.log('setData')
    // console.log(data)
    // console.log(Object.keys(data))
    // console.log(data["tokens"][0].id)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Your Lucky Token</p>
        <button onClick={executeQuery}>Go!</button>
        <fieldset>
          {data && (
            <>
              <p>contract address: {data['tokens'][0].id}</p>
              <p>symbol: {data['tokens'][0].symbol}</p>
              <p>name: {data['tokens'][0].symbol}</p>
              <a href={'https://app.uniswap.org/#/tokens/ethereum/' + data['tokens'][0].id} target="_blank">
                Check on Uniswap!
              </a>
            </>
          )}
        </fieldset>
      </header>
    </div>
  )
}

export default App
