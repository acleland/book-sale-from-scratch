import { useState } from 'react';

export function useForm(inputs = {}) {
  const [book, setBook] = useState({ ...inputs });

  const handleChange = (event) => {
    setBook((prevState) => {
      return {
        ...prevState,
      };
    });
  };
}
