export const taskStatus = ['todo', 'inprogress', 'done'] as const;
export type TaskStatus = typeof taskStatus[number];
