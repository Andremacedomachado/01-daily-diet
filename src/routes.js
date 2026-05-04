import { Database } from "./database.js"
import { buildeRoutePath } from "./utils/build-route-path.js"

const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: buildeRoutePath('/meals'),
        handler: (req, res) => {
            //route for meal listing
            const { search } = req.query

            const meals = database.select('meals', search ? {
                name: search,
                description: search
            } : null)

            return res.writeHead(200).end(JSON.stringify(meals))
        }
    },
    {
        method: 'GET',
        path: buildeRoutePath('/meals/:id'),
        handler: (req, res) => {
            //route for obtaining meal data
            const { id } = req.params
            const meal = database.select('meals', { id })
            return res.writeHead(200).end(JSON.stringify([meal]))
        }
    },
    {
        method: 'POST',
        path: buildeRoutePath('/meals'),
        handler: (req, res) => {
            //route to create a meal
            const { name, description, onDiet = false } = req.body
            const id = crypto.randomUUID()
            const created_at = new Date()
            const data = { id, name, description, created_at, onDiet }

            const meal = database.insert('meals', data)
            return res.writeHead(201).end()
        }
    },
    {
        method: 'PUT',
        path: buildeRoutePath('/meals/:id'),
        handler: (req, res) => {
            //route to update a meal
            const { id } = req.params
            const { name, description, created_at, onDiet } = req.body
            const data = { name, description, created_at, onDiet }

            database.update('meals', id, data)

            return res.writeHead(200).end()
        }
    },
    {
        method: 'DELETE',
        path: buildeRoutePath('/meals/:id'),
        handler: (req, res) => {
            //route to delete a meal
            const { id } = req.params
            const meal = database.delete('meals', id)
            return res.writeHead(204).end()
        }
    },

    {
        method: 'GET',
        path: buildeRoutePath('/meals/metrics'),
        handler: (req, res) => {
            //route for obtaining diet metrics
            return res.writeHead(200).end(JSON.stringify({ message: 'Not implemented' }))
        }
    }

]