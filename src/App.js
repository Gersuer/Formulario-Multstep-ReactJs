import './App.css';

//components - icons
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './components/UserForm';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
import Steps from './components/Steps';


//hooks
import useForm from './hooks/useForm';
import { useState } from 'react';

const formTemplate = {
  name: '',
  email: '',
  review: '',
  comment: '',
}

function App() {
  // Estado que irá inicializar os inputs com valores digitados pelo usuário ou vazios
  const [data, setData] = useState(formTemplate);

  // Função responsável por fazer o update dos dados nos inputs
  const updateHandle = (key, value) => {

    setData((previous) => {
      console.log(previous, key, value)
      return { ...previous, [key]: value }
    })
  }

  const formComponents = [
    <UserForm data={data} updateHandle={updateHandle} />,
    <ReviewForm data={data} updateHandle={updateHandle} />,
    <Thanks data={data} updateHandle={updateHandle} />
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <div className="app">
      <header className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com sua compra, por favor preencha o formulário de satisfação para avaliar seu produto.</p>
      </header>
      <div className="form-container">
        <Steps
          currentStep={currentStep}
        />
        <form className='form-content' onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">

            {!isFirstStep && (

              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type='button'>
                <span>Enviar</span>
                <FiSend />
              </button>
            )}

          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
