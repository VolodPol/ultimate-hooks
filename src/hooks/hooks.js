import {useEffect, useState} from "react";
import axios from 'axios'

export const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return {
        type,
        value,
        onChange
    }
}

export const useResource = (baseUrl) => {
    const [resource, setResource] = useState([])

    useEffect(() => {
        axios.get(baseUrl)
            .then(response => setResource(response.data))
    }, [baseUrl])

    const create = newObject => {
        axios.post(baseUrl, newObject)
            .then(response =>
                setResource(resource.concat(response.data))
            )
    }

    return [resource, { create }]
}