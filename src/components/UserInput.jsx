import { InputGroup } from './InputGroup';

export const UserInput = ({ userInput, onUserInput}) => {

  const handleChange = (event, label) => {
    onUserInput(label, event.target.value);
  }

  return (
    <section id='user-input'>

      <div className='input-group'>
        <InputGroup
          value={userInput.initialInvestment}
          label='initial Investment'
          onChange={(event) => handleChange(event,'initialInvestment')}
          />
        <InputGroup
          value={userInput.annualInvestment}
          label='annual Investment'
          onChange={(event) => handleChange(event, 'annualInvestment')}
        />
        <InputGroup
          value={userInput.expectedReturn}
          label='expected Return'
          onChange={(event) => handleChange(event, 'expectedReturn')}
        />
        <InputGroup
          value={userInput.duration}
          label='duration'
          onChange={(event) => handleChange(event, 'duration')}
        />
      </div>
    </section>
  );
};