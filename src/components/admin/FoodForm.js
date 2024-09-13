import { useEffect, useState } from "react";
import { useItemsContext } from "../../others/itemsContext";
import { BASE_URL, MAX_FILE_SIZE } from "../../constant";
import { FileOpen } from "@mui/icons-material";
import { Backdrop, Button, CircularProgress, DialogActions, DialogTitle, InputAdornment, Typography } from "@mui/material";

const API_KEY = import.meta.env.VITE_API_KEY;

const initialFormValues = {
    name: "",
    description: "",
    price: "",
    image: {preview: "", raw:""}
}

function FoodForm({open, setOpenItemForm, isEdit, editItemId}){
    const {itemsData, addNewItem, updateItem} = useItemsContext();
    const [isLoading, setIsLoading] = useState(false);

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
            const itemToEdit = itemsData.find((item)=> item.id === editItemId);

            if(itemToEdit){
                setValues({
                    name: itemToEdit.name,
                    description: itemToEdit.description,
                    price: itemToEdit.price.toString(),
                    image: {
                        preview: itemToEdit.image.display_url,
                        raw: itemToEdit.image
                    }
                });
            }
        } else {
            setValues(initialFormValues);
        }
    }, []);

    function handleFileChange(e){
        if(e.target.files === null || e.target.files.length === 0){
            return;
        }

        const fileObj = e.target.files && e.target?.files?.length > 0 && e.target.files[0];

        if(fileObj.size > MAX_FILE_SIZE){
            setFormErrors((prevFormErrors)=>({
                ...prevFormErrors,
                image: `Image size (${Number(MAX_FILE_SIZE/1000000).toFixed(2)}MB) exceeds the maximum allowed 2MB. Please choose a smaller file.`
            }));

            setValues((prevValues)=>({
                ...prevValues,
                image: {preview: "", raw: ""},
            }));
            URL.revokeObjectURL(fileObj);
            e.target.value = null;
            return;
        }

        handleInputChange("image", {raw: fileObj, preview: URL.createObjectURL(fileObj)});

        URL.revokeObjectURL(fileObj);
        e.target.value = null;
    }

    async function uploadImage(image){
        const formData = new FormData();
        formData.append("image", image);

        try{
            const response = await fetch(`${BASE_URL}?key=${API_KEY}`,
            {method: "POST", body: formData});

            if(response.ok){
                const responseData =await response.json();

                if(responseData.success){
                    const data = responseData.data;
                    return data;
                } else {
                    console.error("Image upload failed:", responseData);
                    setFormErrors((prevFormErrors)=>({
                        ...prevFormErrors, 
                        image: "Image upload failed. Please try again"
                    }));
                }
            } else{
                console.error("HTTP error:", response.status);
            }
        } catch(error) {
            console.error("Fetch error:", error);
        }
    }

    async function handleAddItemToMenu(event){
        event.preventDefault();
        setIsLoading(true);
        setFormErrors({});
        const validationErrors={};

        if(!values.name.trim()){
            validationErrors.name = "Name is required";
        }
        if(!values.description.trim()){
            validationErrors.description = "Description is required";
        }
        if(!values.price){
            validationErrors.price = "Price is required";
        } else {
            const parsedPrice = parseFloat(values.price);
            if(isNaN(parsedPrice) || parsedPrice <= 0 || parsedPrice >= 1000){
                validationErrors.price = "Invalid price";
            }
        }
        if (!values.image.raw){
            validationErrors.image = "Image is required";
        } else if (values.image.raw.size > MAX_FILE_SIZE){
            validationErrors.image = `Image size exceeds the maximum allowed 2MB. Please choose a smaller file.`;
        }

        if(Object.keys(validationErrors).length > 0){
            setFormErrors(validationErrors);
            setIsLoading(false);
            return;
        }

        try{
            const uploadedImage = values.image.raw.lastModifiedDate || !values.image.raw.display_url
                ? await uploadImage(values.image.raw) : values.image.raw;

            if(uploadedImage){
                const newItem = {
                    id: isEdit ? editItemId : crypto.randomUUID(),
                    name: values.name,
                    description: values.description,
                    price: Number(parseFloat(values.price).toFixed(2)),
                    image: uploadedImage
                }

                if(isEdit){
                    updateItem(editItemId, newItem);
                } else {
                    addNewItem(newItem);
                }

                resetForm();
                handleClose();
            } else {
                setFormErrors((prevFormErrors)=>({
                    ...prevFormErrors,
                    image: "Image upload failed. Please try again.",
                }));
                return;
            }
        } catch (error){
            console.error("Error adding new item to menu:", error);
        } finally {
            setIsLoading(false);
        }
    }

    function handleClose(_event, reason){
        if(reason === "backdropClick" || reason === "escapeKeyDown") return;
        resetForm();
        setOpenItemForm(false);
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <form noValidate onSubmit={handleAddItemToMenu}>
                    <DialogTitle>Add Food Item</DialogTitle>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            label="Name"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={(e)=>{handleInputChange("name", e.target.value)}}
                            type="text"
                            fullWidth
                            variant="outlined"
                            required
                            error={formErrors.name !== undefined}
                            helperText={formErrors.name}
                        />
                        <TextField
                            margin="dense"
                            label="Description"
                            id="description"
                            name="description"
                            value={values.description}
                            onChange={(e)=>{handleInputChange("description", e.target.value)}}
                            type="text"
                            fullWidth
                            variant="outlined"
                            required
                            multiline
                            maxRows={4}
                            error={formErrors.description !== undefined}
                            helperText={formErrors.description}
                        />
                        <TextField
                            InputProps={{
                                startAdornment: (<InputAdornment position="start">RM</InputAdornment>)
                            }}
                            margin="dense"
                            label="Price"
                            id="price"
                            name="price"
                            value={values.price}
                            onChange={(e)=>{handleInputChange("price", e.target.value)}}
                            type="text"
                            fullWidth
                            variant="outlined"
                            required
                            error={formErrors.price !== undefined}
                            helperText={formErrors.price}
                        />

                        <Box
                            display={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                marginTop: "1rem"
                            }}
                        >
                            <InputFileUpload
                                handleFileChange={handleFileChange}
                                marginRight={2}
                                flexShrink={0}
                            />

                            {values.image.raw !== "" && formErrors.image === undefined ? (
                                <Typography variant="subtitle1">
                                    Chosen file:{" "}
                                    <strong>
                                        {values.image.row.name || values.image.raw.title}
                                    </strong>
                                </Typography>
                            ) : (
                                <Typography 
                                    variant="subtitle1"
                                    color={formErrors.image !== undefined ? "error" : "text.secondary"}
                                >
                                    {formErrors.image !== undefined ? formErrors.image : "No image chosen"}
                                </Typography>
                            )}
                        </Box>

                        {values.image.preview !== "" && (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                            >
                                <Typography variant="subtitle1" sx={{mt: 2}}>
                                    Image Preview
                                </Typography>
                                <img 
                                    src={values.image.preview}
                                    alt={`a preview of uploaded image ${values.name}`}
                                    style={{
                                        width: "100%",
                                        maxWidth: "300px",
                                        borderRadius: "5px",
                                        border: "1px solid black"
                                    }}
                                />
                            </Box>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} type="button">Cancel</Button>
                        <Button variant="contained" type="submit" disabled={Object.values(formErrors).some(
                                (error)=> error !== undefined
                            )}
                        >
                            {isEdit ? "Update" : "Add"}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>

            <Backdrop sx={{color: "#fff", zIndex: (theme)=> theme.zIndex.modal + 1}}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </>
    )
}

FoodForm.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpenItemForm: PropTypes.func.isRequired,
    isEdit: PropTypes.bool.isRequired,
    editItemId: PropTypes.toString
}

export default FoodForm;