export const insertDummyData = (dexieDb) => {

    const dummyCategories = ['Todo', 'In Progress', 'Done', 'Review', 'Testing'];

    // TODO: use hook functions to create entries
    const dummyTasks = [
        {
            title: 'Test reponsiveness',
            description: 'Test that things work on different screen sizes',
            priority: 1,
            categoryId: 5,
            label: 'testing',
            status: 0
        },
        {
            title: 'Create a category',
            description: 'Create a category that the task can be assigned to.',
            priority: 2,
            categoryId: 1,
            label: 'label test',
            status: 1
        },
        {
            title: 'Fix the task hook',
            description: 'Task hook is a mess being rewritten...',
            priority: 3,
            categoryId: 2,
            label: 'label test',
            status: 0
        },
        {
            title: 'Filler task 1',
            description: 'Filler Lorem Ipsum',
            priority: 4,
            categoryId: 4,
            label: 'label test',
            status: 0
        },
        {
            title: 'Filler task 2',
            description: 'Filler Lorem Ipsum',
            priority: 4,
            categoryId: 4,
            label: 'label test',
            status: 0
        },
        {
            title: 'Filler task 3',
            description: 'Filler Lorem Ipsum',
            priority: 3,
            categoryId: 4,
            label: 'label test',
            status: 0
        },
        {
            title: 'Filler task 4',
            description: 'Filler Lorem Ipsum',
            priority: 2,
            categoryId: 4,
            label: 'label test',
            status: 0
        },
        {
            title: 'Filler task 5',
            description: 'Filler Lorem Ipsum',
            priority: 1,
            categoryId: 4,
            label: 'label test',
            status: 0
        },
        {
            title: 'Filler task 6',
            description: 'Filler Lorem Ipsum',
            priority: 5,
            categoryId: 1,
            label: 'label test',
            status: 0
        },
        ,
        {
            title: 'Random done',
            description: 'Get something random done',
            priority: 1,
            categoryId: 3,
            label: 'label test',
            status: 0
        }
    ]

    const dummyUsers = ['John Doe', 'Jane Doe'];

    dummyCategories.forEach(item => dexieDb.categories.add({ name: item }));
    dummyTasks.forEach(item => dexieDb.tasks.add(item));
    dummyUsers.forEach(item => dexieDb.users.add({ name: item }));

}