import {stringInclues} from '../util/common';

export const FILTER_ALL = 'all';
export const FILTER_ACTIVE = 'active';
export const FILTER_COMPLETED = 'completed';

// export function applyFilter(list, filter) {
//     switch (filter) {
//         case FILTER_COMPLETED:
//             return list.filter(item => item.completed === true);

//         case FILTER_ACTIVE:
//             return list.filter(item => item.completed !== true);

//         default:
//             return list;
//     }
// }

export function applyFilter(list, filter) {
    console.log(list);
    switch (filter) {
        case FILTER_COMPLETED:
            // return list.filter(item => item.checked === true);
            return list.filter(item => item.checked === true);


        case FILTER_ACTIVE:
            // return list.filter(item => item.checked !== true);
            return list.filter(item => item.checked !== true);


        default:
            return list;
    }
}

export function search(list, query) {
    let q = query.trim().toLowerCase();

    console.log("Query", q);

    // return list.filter(({text}) => stringInclues(text.toLowerCase(), q));
    return list.filter(({todo}) => stringInclues(todo.toLowerCase(), q));
}


export function getOptions() {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Active',
        [FILTER_COMPLETED]: 'Completed'
    };
}
