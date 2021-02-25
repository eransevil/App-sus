import { utilService } from '../../../util.service.js'
import { storageService } from '../../../async-storage.service.js'


const KEEPS_KEY = 'keeps'
const gKeeps = [{

        id: utilService.makeId(),
        type: "noteTxt",
        isPinned: true,
        info: {
            txt: "Notes Me!"
        }
    },
    {
        id: utilService.makeId(),
        type: "noteImg",
        info: {
            url: "img/dog.jpg",
            title: " my image"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: utilService.makeId(),
        type: "noteTodos",
        info: {
            title: 'ToDo:',
            label: "How was it:",
            todos: [
                { txt: "shopping", doneAt: null },
                { txt: "go to run", doneAt: null },
                { txt: "pay to the  gardener", doneAt: 187111111 }
            ]
        }
    }
]


export const keepService = {
    query,
    deleteNote,
    saveNote,
    getById,
    getEmptyNote,
    addNewNote,

}

function query() {
    return storageService.query(KEEPS_KEY)
        .then(keeps => {
            if (!keeps.length) {
                keeps = gKeeps;
                utilService.saveToStorage(KEEPS_KEY, gKeeps);
            }
            console.log(keeps, 'keeps');

            return keeps;
        });
}

function deleteNote(keepId) {
    return storageService.remove(KEEPS_KEY, keepId);
}

function saveNote(keepId) {
    if (keepId) {
        return storageService.put(KEEPS_KEY, keepId);
    } else {
        return storageService.post(KEEPS_KEY, keepId);
    }
}


function getById(id) {
    return storageService.get(KEEPS_KEY, id);
}

function getEmptyNote(type) {
    const newNote = {
        type: type,
        id: utilService.makeId(),
    };
    switch (type) {
        case 'noteTxt':
            newNote.info = { txt: '' };
            break;
        case 'noteImg':
            newNote.info = { url: '', title: '' };
            break;
    }
    return newNote;
}

function addNewNote(newNote) {
    console.log('newNote:', newNote)

    switch (newNote.type) {
        case 'noteImg':
            newNote.info.url = newNote.info.txt;
            newNote.info.title = 'title';
            break;
    }
    gKeeps.unshift(newNote);
    utilService.saveToStorage(KEEPS_KEY, gKeeps);
}