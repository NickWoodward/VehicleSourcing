import { createContext, useCallback, useEffect, useState } from "react";
import { MultiStepForm } from "./MultiStepForm";


const FORM_STEPS = [
  { label: 'The Car' },
  { label: 'You' },
  { label: 'Part Exchange' },
];

export const FORM_STATE = {
  selectedIndex: 0,
  turnstile: '',
  px: false,
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
    partExchange: { 
      valid: false,
      dirty: false,
      value: {
        registrationNumber: '',
        yearOfManufacture: '',
        make: '',
        model: '',
        colour: '',
        engineCapacity: '',
        fuelType: '',
        motExpiryDate: '',
        taxDueDate: '',
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
    console.log('SUBMIT',state);
  }, []);


  return (
    <FormStateContext.Provider value={{ form, setForm }} >
      <MultiStepForm steps={FORM_STEPS} />
    </FormStateContext.Provider>
  );
};