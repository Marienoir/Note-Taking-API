import Note from '../models/note';

export const createNote = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newNote = await Note.create({ title, description })
        res.status(201).json({
            status: 'success',
            message: 'New note created',
            data: newNote
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: ''
        })
    }
};

export const getNotes = async (req, res) => {
    try {
        const note = await Note.find()
        res.status(200).json({
            status: 'success',
            message: 'Note(s) fetched successfully',
            data: note
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: ''
        })
    }
};

export const getSingleNote = async (req, res) => {
    try {
        const { note } = req;
        res.status(200).json({
            status: 'success',
            message: 'Note fetched successfully',
            data: note
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: ''
        })
    }
};

export const updateNote = async (req, res) => {
    try {
        const { _id } = req.note;
        const updatedNote = await Note.findByIdAndUpdate(_id, req.body,{new: true})
        res.status(200).json({
            status: 'success',
            message: 'Note updated successfully',
            data: updatedNote
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: ''
        })
    }
};

export const deleteNote = async (req, res) => {
    try {
        const { _id } = req.note;
        await Note.findByIdAndDelete(_id, req.body)
        res.status(200).json({
            status: 'success',
            message: 'Note deleted successfully',
            data: []
        })
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            message: ''
        })
    }
};