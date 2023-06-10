export const minutesInHours = (time: number) => {
    const minutes = time % 60
    const hours = Math.floor(time / 60);
    return `${hours}:${minutes}`
}