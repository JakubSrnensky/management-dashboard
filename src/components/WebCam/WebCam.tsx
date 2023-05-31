import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import WebCamStepFirst from './components/WebCamStepFirst';
import WebCamStepSecond from './components/WebCamStepSecond';
import WebCamStepThird from './components/WebCamStepThird';
import storeModal from '../../stores/storeModal';

export default function WebCam() {

  const { setIsOpen, setTitle } = storeModal()

  const [ step, setStep ] = useState<unknown>(1)

  useEffect(() => {

    if ( step === 1 ) {
      return setTitle("Vyfoť se")
    } else if ( step === 2 ) {
      return setTitle("Náhled fotky")
    } else if ( step === 3 ) {
      return setTitle("Dokončeno")
    }

  },[step])

  const handlerClickStepNext = (e: unknown) => {
    e.preventDefault()

    if (step === 3) {
      setIsOpen(false)
    }

    setStep((prev: number) => {

      if (prev === 3) {
        return 3
      }

      return prev + 1
    })
  }

  const handlerClickStepBack = (e: unknown) => {
    e.preventDefault()

    setStep((prev: number) => {
      return prev - 1
    })
  }

  return (
    <div className="webCam">

      {step === 1 && <WebCamStepFirst />}

      {step === 2 && <WebCamStepSecond />}

      {step === 3 && <WebCamStepThird />}

      {step === 2 && <Button as="button" design="secondary" onClick={(e:unknown) => handlerClickStepBack(e)}>
        Znovu vyfotit
      </Button>}
      
      <Button as="button" design="primary" onClick={(e:unknown) => handlerClickStepNext(e)}>
        {step === 1 && "Vyfotit"}
        {step === 2 && "Uložit fotku"}
        {step === 3 && "Zavřít"}
      </Button>
    </div>
  );
}