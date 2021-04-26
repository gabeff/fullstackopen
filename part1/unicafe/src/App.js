import React, { useState } from 'react'

const Statistic = (props) => {

  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad

  return(
    <div>
      <h1>statistics</h1>
      {(total > 0) ?
        <table>
          <tbody>
            <Statistic text="good" value={props.good}/>
            <Statistic text="neutral" value={props.neutral}/>
            <Statistic text="bad" value={props.bad}/>
            <Statistic text="all" value={total}/>
            <Statistic text="average" value={(props.good+(props.bad*-1))/total}/>
            <Statistic text="positive" value={`${(props.good*100)/total} %`}/>
          </tbody>
        </table>
      : <p>No feedback given</p>
      }
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button type="button" onClick={() => setGood(good+1)}>good</button>
      <button type="button" onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button type="button" onClick={() => setBad(bad+1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App