import { rest } from 'msw';
import { setupWorker } from 'msw'

const handlers = [

    /*
        TODO refactor or fully remove where used
    
        rest.get('/api/tasks', (req, res, ctx) => res(ctx.json(tasks))),
        rest.get('/api/priorities', (req, res, ctx) => res(ctx.json(priorities))),
    */
];

export const worker = setupWorker(...handlers);
