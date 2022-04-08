import Note from '../models/note';

export const getNoteById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const note = await Note.findById(id)
        if (note) {
            req.note = note
            return next();
        }
        else if (note === null) {
            res.status(400).json({
                status: 'fail',
                message: 'Note not found',
            })
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Note not found',
        })
    }
};
