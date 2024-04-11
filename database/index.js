'use server'

import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers";
const cookieStore = cookies()
const client = createClient(cookieStore)

export const getTodos = async (table = 'todos', supabase = client) => {
    return supabase.from(table).select('*')
}

export const insertTodos = async (todo, table = 'todos', supabase = client) => {
    return supabase.from(table).insert(todo)
}

export const updateTodo = async (id, todo, table = 'todos', supabase = client) => {
    return supabase.form(table).update(todo).match({ id }).select()
}