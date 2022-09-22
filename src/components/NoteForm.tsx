import { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import type { NextPage } from "next";
import { INote } from "../pages/notes/create";

interface NoteFormProps {
    formValue: INote;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submit: () => void;
}

export const NoteForm: NextPage<NoteFormProps> = ({
    formValue, onChange, submit,
}) => {
    
    /*const [formField, setFormField] = useState<INote>({ title: "", body: "", type: "" });

    const { title, body, type } = formField;
    
    const handleFieldChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormField((formField) => ({
            ...formField,
            [e.currentTarget.id]: e.currentTarget.value,
        }));
    }*/

    
    
    return (
    <>
        {/*<div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">Title</label>
            <input type="text" id="title" onChange={handleFieldChange} value={title} required={true} className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm focus:ring-red-500 focus:border-red-500 block" />
        </div>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">Body</label>
            <textarea rows={4} id="body" onChange={handleFieldChange} value={body} required={true} className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm focus:ring-red-500 focus:border-red-500 block"></textarea>
        </div>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">Type</label>
            <input type="text" id="type" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm focus:ring-red-500 focus:border-red-500 block" onChange={handleFieldChange} value={type} />
        </div>
        <div className="mb-6">
            <Button color="purple" onClick={submit}>Send</Button>
    </div>*/}
    </>
    )
}