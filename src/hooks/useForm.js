import { useState } from 'react'

const useForm = (steps) => {
    const [currentStep, setCurrentStep] = useState(0);
    function changeStep(i, event) {
        console.log(i);
        if (event) event.preventDefault();
        console.log(event);

        if (i < 0 || i >= steps.length) return;

        setCurrentStep(i);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false
    }
}

export default useForm;