import React, { useEffect } from 'react'
import gql from 'graphql-tag'
// ...
// we import types and typed-graphql document from the generated code (`..graphclient/`)
import { execute } from './graphclient/'

function App() {
  const [data, setData] = React.useState('')
  //const [dataUniswap, setDataUniswap] = React.useState(new Map())
  const [totalLiquidity0, setTotalLiquidity0] = React.useState(0)
  const [totalLiquidity1, setTotalLiquidity1] = React.useState(0)
  const [totalLiquidity2, setTotalLiquidity2] = React.useState(0)
  const [totalLiquidity3, setTotalLiquidity3] = React.useState(0)
  const [totalLiquidity4, setTotalLiquidity4] = React.useState(0)
  const [totalLiquidity5, setTotalLiquidity5] = React.useState(0)
  const [totalLiquidity6, setTotalLiquidity6] = React.useState(0)
  const [totalLiquidity7, setTotalLiquidity7] = React.useState(0)
  const [totalLiquidity8, setTotalLiquidity8] = React.useState(0)
  const [totalLiquidity9, setTotalLiquidity9] = React.useState(0)
  //let liquidity: any

  const myQuery = `
    query{
    markets(first: 100, orderBy: supplyRate, orderDirection: desc) {
      supplyRate
      symbol
      id
      underlyingAddress
    }
  }
  `
  const myQueryUni = gql`
    query token($myid: String!) {
      token(id: $myid) {
        id
        symbol
        name
        totalLiquidity
      }
    }
  `

  useEffect(() => {}, [])

  const executeQuery = () => {
    execute(myQuery, {}).then((result) => {
      console.log(result?.data)
      setData(result?.data)
    })
  }

  const getTotalLiquidity0 = (underlyingAddress) => {
    let variables = {
      myid: underlyingAddress,
    }
    execute(myQueryUni, variables).then((result) => {
      //return result?.data['token'].totalLiquidity;
      // console.log(result)
      //setTotalLiquidity(result?.data['token'].totalLiquidity);
      setTotalLiquidity0(result?.data['token'].totalLiquidity)
    })
  }

  const getTotalLiquidity1 = (underlyingAddress) => {
    let variables = {
      myid: underlyingAddress,
    }
    execute(myQueryUni, variables).then((result) => {
      //return result?.data['token'].totalLiquidity;
      console.log(result)
      //setTotalLiquidity(result?.data['token'].totalLiquidity);
      setTotalLiquidity1(result?.data['token'].totalLiquidity)
    })
  }
  const getTotalLiquidity2 = (underlyingAddress) => {
    let variables = {
      myid: underlyingAddress,
    }
    execute(myQueryUni, variables).then((result) => {
      //return result?.data['token'].totalLiquidity;
      console.log(result)
      //setTotalLiquidity(result?.data['token'].totalLiquidity);
      setTotalLiquidity2(result?.data['token'].totalLiquidity)
    })
  }
  const getTotalLiquidity3 = (underlyingAddress) => {
    let variables = {
      myid: underlyingAddress,
    }
    execute(myQueryUni, variables).then((result) => {
      //return result?.data['token'].totalLiquidity;
      console.log(result)
      //setTotalLiquidity(result?.data['token'].totalLiquidity);
      setTotalLiquidity3(result?.data['token'].totalLiquidity)
    })
  }

  const getTotalLiquidity4 = (underlyingAddress) => {
    let variables = {
      myid: underlyingAddress,
    }
    execute(myQueryUni, variables).then((result) => {
      //return result?.data['token'].totalLiquidity;
      console.log(result)
      //setTotalLiquidity(result?.data['token'].totalLiquidity);
      setTotalLiquidity4(result?.data['token'].totalLiquidity)
    })
  }
  const getTotalLiquidity5 = (underlyingAddress) => {
    let variables = {
      myid: underlyingAddress,
    }
    execute(myQueryUni, variables).then((result) => {
      //return result?.data['token'].totalLiquidity;
      console.log(result)
      //setTotalLiquidity(result?.data['token'].totalLiquidity);
      setTotalLiquidity5(result?.data['token'].totalLiquidity)
    })
  }
  const getTotalLiquidity6 = (underlyingAddress) => {
    let variables = {
      myid: underlyingAddress,
    }
    execute(myQueryUni, variables).then((result) => {
      //return result?.data['token'].totalLiquidity;
      console.log(result)
      //setTotalLiquidity(result?.data['token'].totalLiquidity);
      setTotalLiquidity6(result?.data['token'].totalLiquidity)
    })
  }
  const getTotalLiquidity7 = (underlyingAddress) => {
    let variables = {
      myid: underlyingAddress,
    }
    execute(myQueryUni, variables).then((result) => {
      //return result?.data['token'].totalLiquidity;
      console.log(result)
      //setTotalLiquidity(result?.data['token'].totalLiquidity);
      setTotalLiquidity7(result?.data['token'].totalLiquidity)
    })
  }
  const getTotalLiquidity8 = (underlyingAddress) => {
    let variables = {
      myid: underlyingAddress,
    }
    execute(myQueryUni, variables).then((result) => {
      //return result?.data['token'].totalLiquidity;
      console.log(result)
      //setTotalLiquidity(result?.data['token'].totalLiquidity);
      setTotalLiquidity8(result?.data['token'].totalLiquidity)
    })
  }
  const getTotalLiquidity9 = (underlyingAddress) => {
    let variables = {
      myid: underlyingAddress,
    }
    execute(myQueryUni, variables).then((result) => {
      //return result?.data['token'].totalLiquidity;
      console.log(result)
      //setTotalLiquidity(result?.data['token'].totalLiquidity);
      setTotalLiquidity9(result?.data['token'].totalLiquidity)
    })
  }

  const executeUnidata = () => {
    getTotalLiquidity0(data['markets'][0].underlyingAddress)
    getTotalLiquidity1(data['markets'][1].underlyingAddress)
    getTotalLiquidity2(data['markets'][2].underlyingAddress)
    getTotalLiquidity3(data['markets'][3].underlyingAddress)
    getTotalLiquidity4(data['markets'][4].underlyingAddress)
    getTotalLiquidity5(data['markets'][5].underlyingAddress)
    getTotalLiquidity6(data['markets'][6].underlyingAddress)
    getTotalLiquidity7(data['markets'][7].underlyingAddress)
    getTotalLiquidity8(data['markets'][8].underlyingAddress)
    getTotalLiquidity9(data['markets'][9].underlyingAddress)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Find Best Token</p>
        <div>
          <button onClick={executeQuery}>Get Compound Data</button>
          <button onClick={executeUnidata}>Get Uniswap Data</button>
        </div>
        <br></br>
        {data && (
          <>
            <table id="mytable" class="mytable">
              <tr>
                <th>Symbol</th>
                <th>supplyRate[%]</th>
                <th>totalLiquidity[amount]</th>
              </tr>
              <tr>
                <td> {data['markets'][0].symbol.slice(1)}</td>
                <td> {(data['markets'][0].supplyRate * 100).toFixed(2)} </td>
                <td>{parseFloat(totalLiquidity0).toFixed(2)}</td>
              </tr>
              <tr>
                <td> {data['markets'][1].symbol.slice(1)}</td>
                <td> {(data['markets'][1].supplyRate * 100).toFixed(2)} </td>
                <td>{parseFloat(totalLiquidity1).toFixed(2)}</td>
              </tr>
              <tr>
                <td> {data['markets'][2].symbol.slice(1)}</td>
                <td> {(data['markets'][2].supplyRate * 100).toFixed(2)} </td>
                <td>{parseFloat(totalLiquidity2).toFixed(2)}</td>
              </tr>
              <tr>
                <td> {data['markets'][3].symbol.slice(1)}</td>
                <td> {(data['markets'][3].supplyRate * 100).toFixed(2)} </td>
                <td>{parseFloat(totalLiquidity3).toFixed(2)}</td>
              </tr>
              <tr>
                <td> {data['markets'][4].symbol.slice(1)}</td>
                <td> {(data['markets'][4].supplyRate * 100).toFixed(2)} </td>
                <td>{parseFloat(totalLiquidity4).toFixed(2)}</td>
              </tr>
              <tr>
                <td> {data['markets'][5].symbol.slice(1)}</td>
                <td> {(data['markets'][5].supplyRate * 100).toFixed(2)} </td>
                <td>{parseFloat(totalLiquidity5).toFixed(2)}</td>
              </tr>
              <tr>
                <td> {data['markets'][6].symbol.slice(1)}</td>
                <td> {(data['markets'][6].supplyRate * 100).toFixed(2)} </td>
                <td>{parseFloat(totalLiquidity6).toFixed(2)}</td>
              </tr>
              <tr>
                <td> {data['markets'][7].symbol.slice(1)}</td>
                <td> {(data['markets'][7].supplyRate * 100).toFixed(2)} </td>
                <td>{parseFloat(totalLiquidity7).toFixed(2)}</td>
              </tr>
              <tr>
                <td> {data['markets'][8].symbol.slice(1)}</td>
                <td> {(data['markets'][8].supplyRate * 100).toFixed(2)} </td>
                <td>{parseFloat(totalLiquidity8).toFixed(2)}</td>
              </tr>
              <tr>
                <td> {data['markets'][9].symbol.slice(1)}</td>
                <td> {(data['markets'][9].supplyRate * 100).toFixed(2)} </td>
                <td>{parseFloat(totalLiquidity9).toFixed(2)}</td>
              </tr>

              <tr></tr>
            </table>
          </>
        )}
      </header>
    </div>
  )
}

export default App
