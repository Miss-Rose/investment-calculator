import { useState } from 'react';
import { Header} from './components/Header';
import { UserInput } from './components/UserInput';
import { Result } from './components/Result';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleState = (key, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [key]: +value,
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onUserInput={handleState}/>
      <Result data={userInput}/>
    </>
  )
}

export default App;