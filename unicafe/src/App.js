import {useState} from 'react'
import './App.css'

const Statistics = ({good, neutral, bad}) => {
    let allClicks = good + neutral + bad
    let average = (good - bad) / allClicks
    let positive = good / allClicks * 100 + '%'
    return (<>
            <h2>statistics</h2>
            {!allClicks
                ? <h3>No feedback given</h3>
                : <table>
                    <tbody>
                    <StatisticLine text="good" value={good}/>
                    <StatisticLine text="neutral" value={neutral}/>
                    <StatisticLine text="bad" value={bad}/>
                    <StatisticLine text="all" value={allClicks}/>
                    <StatisticLine text="average" value={average}/>
                    <StatisticLine text="positive" value={positive}/>
                    </tbody>
                </table>}

        </>
    )
}
const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}
const Button = ({text, handleClick}) => {
    return (
        <button onClick={handleClick} type="button">{text}</button>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    return (
        <div>
            <h2>give feedback</h2>
            <Button text="good" handleClick={() => setGood(good + 1)}/>
            <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
            <Button text="bad" handleClick={() => setBad(bad + 1)}/>

            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
            />
        </div>
    )
}

export default App;
