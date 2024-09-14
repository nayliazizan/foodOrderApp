import { MAX_FILE_SIZE } from "../constant";

const  formVerification = {
    name: {
        validate: (value)=> (value.trim() === "" ? "Name is required": undefined)
    },

    description: {
        validate: (value)=> value.trim() === "" ? "Description is required": undefined
    },

    price: {
        validate: (value)=> {
            if(value === ""){
                return "Price is required";
            }

            if(Number(value) === 0) return "Price must be greater than 0";

            const regex = /^[+-]?([0-9]*[.])?[0-9]+$/;
            if(!regex.test(value)){
                return "Invalid price format. Please enter a valid number";
            }
            
            if(value.includes("-") || value.includes("+") || Number.isNaN(parseFloat(value))){
                return "Invalid price format. Please enter a valid number";
            }
            
            const numericValue = parseFloat(value);
            if(numericValue < 0){
                return "Price must be greater than 0";
            } else if (numericValue > 1000) {
                return "Price must be less than 1000";
            }

            return undefined;
        }
    },

    image: {
        validate: (value) => value.raw === "" || value.preview === ""
            ? "Image is required" : value.raw.size > MAX_FILE_SIZE
            ? `Image size (${Number(MAX_FILE_SIZE/1000000).toFixed(2)}MB) exceeds the maximum allowed 2MB. Please choose a smaller file` : undefined
    }
}

export default formVerification;