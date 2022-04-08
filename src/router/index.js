import express from 'express';
import * as Controller from '../controller';
import * as Middleware from '../middleware';

const router = express.Router();

router.post('/api/v1/notes', Controller.createNote)
router.get('/api/v1/notes', Controller.getNotes)
router.get('/api/v1/notes/:id', Middleware.getNoteById, Controller.getSingleNote)
router.put('/api/v1/notes/:id', Middleware.getNoteById, Controller.updateNote)
router.delete('/api/v1/notes/:id', Middleware.getNoteById, Controller.deleteNote)

export default router;
