export const insertDummyData = (dexieDb) => {

    const dummyCategories = ['Todo', 'In Progress', 'Done'];

    // TODO: use hook functions to create entries
    const dummyTasks = [
        {
            title: 'Create a category',
            description: 'Create a category that the task can be assigned to.',
            priority: 'high',
            categoryId: 1,
            label: 'label test',
            status: 1
        },
        {
            title: 'Fix the task hook',
            description: 'Task hook is a mess being rewritten...',
            priority: 'high',
            categoryId: 2,
            label: 'label test',
            status: 0
        }
    ]

    const dummyUsers = ['John Doe', 'Jane Doe'];

    dummyCategories.forEach(item => dexieDb.categories.add({ name: item }));
    dummyTasks.forEach(item => dexieDb.tasks.add(item));
    dummyUsers.forEach(item => dexieDb.users.add({ name: item }));

}