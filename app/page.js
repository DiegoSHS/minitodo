'use client'
import { CheckboxGroup, CircularProgress, Checkbox } from "@nextui-org/react";
import { useEffect, useState } from "react";
export default function Index() {
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState([]);
    const createFilter = (filters) => {
        return filters.reduce((acc, filter) => {
            if (filter === 'important') {
                return { ...acc, important: true }
            }
            if (filter === 'done') {
                return { ...acc, done: true }
            }
            return acc
        }, {})
    }
    const handleFilter = () => {
        const filters = createFilter(filter)
        console.log(filters)
    }
    useEffect(() => {
        handleFilter()
    }, [filter])
    return (
        <div className="absolute flex flex-col items-center justify-center gap-2">
            <CheckboxGroup label='filtro' orientation="horizontal" onValueChange={setFilter}>
                <Checkbox radius='full' value={'important'}>Favoritas</Checkbox>
                <Checkbox radius='full' value={'done'}>Completadas</Checkbox>
            </CheckboxGroup>
            {
                loading ? <CircularProgress size="lg" className="mt-5"></CircularProgress> : <p>Lista de tareas</p>
            }
        </div>
    )
}