import { createContext, useCallback, useEffect, useState } from "react";
import { MultiStepForm } from "./MultiStepForm";

const FORM_STEPS = [
  { label: 'The Car' },
  { label: 'You' },
  { label: '' },
];

const FORM_STATE = {
  selectedIndex: 0,
  steps: {
    person: {
      valid: false,
      dirty: false,
      value: {
        fName: '',
        sName: '',
        email: '',
        phone: '',
      }
    },
    car: {
      valid: false,
      dirty: false,
      value: {
        manufacturer: '',
        model: '',
        year: '',
        mileage: '',
      }
    },
    finished: {
      valid: true,
      dirty: false,
      value: {}
    }
  }
};

export const FormStateContext = createContext({
  form: FORM_STATE,
  setForm: (
    form: typeof FORM_STATE | ((form: typeof FORM_STATE) => typeof FORM_STATE)
  ) => {}
});

export const FormContainer = () => {
  const [form, setForm] = useState(FORM_STATE);
  
  const onComplete = useCallback((state: typeof FORM_STATE) => {
    console.log('state',state);
  }, []);


  useEffect(() => {
    const lastStepIndex = FORM_STEPS.length;

    if(form.selectedIndex === lastStepIndex) {
      // onComplete(FORM_STATE);
    }
  }, [form.selectedIndex]);

  return (
    <FormStateContext.Provider value={{ form, setForm }} >
      <MultiStepForm steps={FORM_STEPS} />
    </FormStateContext.Provider>
  );
};