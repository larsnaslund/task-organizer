import { rest } from 'msw';
import { setupWorker } from 'msw'

import { tasks } from './db.data';

const handlers = [
    rest.get('/api/tasks', (req, res, ctx) => res(ctx.json(tasks))),
];

export const worker = setupWorker(...handlers);