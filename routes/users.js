import express from 'express'

import {getUsers} from '../controllers/users.js'
import {createUser} from '../controllers/users.js'
import {addGeneralTask} from '../controllers/users.js'
import {deleteGeneralTask} from '../controllers/users.js'
import {addSong} from '../controllers/users.js'
import {deleteSong} from '../controllers/users.js'
import {addSongTask} from '../controllers/users.js'
import {deleteSongTask} from '../controllers/users.js'
import {getUser} from '../controllers/users.js'
import auth from '../middleware/auth.js'

import {signin} from '../controllers/users.js'
import {signup} from '../controllers/users.js'


const router = express.Router()



router.get('/', getUsers)
router.get('/:id', auth, getUser)
router.post('/', createUser)
router.patch('/add_gen_task/:id', addGeneralTask)
router.delete('/delete_gen_task/:id', deleteGeneralTask)
router.patch('/add_song/:id', addSong)
router.delete('/delete_song/:id', deleteSong)
router.patch('/add_song_task/:id', addSongTask)
router.delete('/delete_song_task/:id', deleteSongTask)

router.post('/signin', signin)
router.post('/signup', signup)

export default router