import { useEffect, useState } from "react";
import { useItemsContext } from "../../others/itemsContext";

const API_KEY = import.meta.env.VITE_API_KEY;

const initialFormValues = {
    name: "",
    description: "",
    price: "",
    image: {preview: "", raw:""}
}

function FoodForm({open, setOpenItemForm, isEdit, editItemId}){
    const {itemsData, addNewItem, updateItem} = useItemsContext();
    const [isLoading, setLoading] = useState(false);

    const {
        values,
        setValues,
        handleInputChange,
        formErrors,
        setFormErrors,
        resetForm
    } = useForm(initialFormValues, formValidationSchema);

    useEffect(()=>{
        if(isEdit && editItemId){
            
        }
    })
}