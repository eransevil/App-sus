import { utilService } from '../../../util.service.js'
import { storageService } from '../../../async-storage.service.js'


const KEEPS_KEY = 'keeps'
const gKeeps = [{
        id: utilService.makeId(),
        type: "keepTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: utilService.makeId(),
        type: "keepImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: utilService.makeId(),
        type: "keepTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];


export const keepService = {
    query,
    remove,
    save,
    getById,

}


function query() {
    return storageService.query(KEEPS_KEY)
        .then((keeps) => {
            console.log('keeps:', keeps)

            return keeps
        });
}


function remove(keepId) {
    return storageService.remove(KEEPS_KEY, keepId);
}

function save(keep) {
    if (keep.id) {
        return storageService.put(KEEPS_KEY, keep);
    } else {
        return storageService.post(KEEPS_KEY, keep);
    }
}

function getById(id) {
    return storageService.get(KEEPS_KEY, id);
}