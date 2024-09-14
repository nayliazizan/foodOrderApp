import { useState } from "react";

function useForm(initialValues, verificationSchema){
    const [values, setValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    function handleInputChange(fieldName, value){
        setValues((prevValues)=> ({...prevValues, [fieldName]: value}));

        const fieldVerification = verificationSchema[fieldName];
        if(fieldVerification && typeof fieldVerification.validate === "function"){
            const error = fieldVerification.validate(value);

            if(error){
                setFormErrors((prevErrors)=> ({...prevErrors, [fieldName]: error}));
            } else {
                setFormErrors((prevErrors)=> ({...prevErrors, [fieldName]: undefined}));
            }
        }
    }

    function resetForm(){
        setValues(initialValues);
        setFormErrors({});
    }

    return{
        values,
        setValues,
        formErrors,
        setFormErrors,
        handleInputChange,
        resetForm
    };
}

export default useForm;