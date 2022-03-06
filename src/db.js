import Dexie from 'dexie';

const databaseName = 'taskDb';

// TODO REMOVE ONCE FUNCTIONAL
// see db.dummy.data for the inserted data
const DEVELOPMENT_MODE = true;

if (DEVELOPMENT_MODE) {
    // Delete current potential database to start fully fresh
    Dexie.delete(databaseName);
}

export const db = new Dexie(databaseName);

db.version(1).stores({

    /**
     * USERS
     *  id              PRIMARY_KEY AUTO_INCREMENT
     *  name            STRING
     */
    users: '++id, name',

    /**
     * CATEGORIES
     *  id              PRIMARY_KEY AUTO_INCREMENT
     *  name            STRING
     */
    categories: '++id, name',

    /**
     * TASKS
     *  id              PRIMARY_KEY AUTO_INCREMENT
     *  title           STRING
     *  description     STRING
     *  categoryId      FOREIGN_KEY (CATEGORIES)
     *  priority        STRING
     *  label           STRING
     *  status          INT (0 = open, 1 = completed)
     */
    //TODO: make priority its own table
    //TODO: make label itss own table
    tasks: '++id, title, description, categoryId, priority, label, status',

});


if (DEVELOPMENT_MODE) {
    import('./db.dummy.data.js').then((module) => module.insertDummyData(db));
}