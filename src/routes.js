import { buildeRoutePath } from "./utils/build-route-path.js"

export const routes = [
    {
        method: 'GET',
        path: buildeRoutePath('/meals'),
        handler: (req, res) => {
            //route for meal listing

            return res.writeHead(200).end(JSON.stringify({ message: 'Not implemented' }))
        }
    },
    {
        method: 'GET',
        path: buildeRoutePath('/meals/:id'),
        handler: (req, res) => {
            //route for obtaining meal data

            return res.writeHead(200).end(JSON.stringify({ message: 'Not implemented' }))
        }
    },
    {
        method: 'POST',
        path: buildeRoutePath('/meals'),
        handler: (req, res) => {
            //route to create a meal
            return res.writeHead(201).end(JSON.stringify({ message: 'Not implemented' }))
        }
    },
    {
        method: 'PUT',
        path: buildeRoutePath('/meals/:id'),
        handler: (req, res) => {
            //route to update a meal
            return res.writeHead(200).end(JSON.stringify({ message: 'Not implemented' }))
        }
    },
    {
        method: 'DELETE',
        path: buildeRoutePath('/meals/:id'),
        handler: (req, res) => {
            //route to delete a meal
            return res.writeHead(204).end(JSON.stringify({ message: 'Not implemented' }))
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