export const minutesInHours = (time: number): string => {
    const minutes: number = time % 60
    const hours: number = Math.floor(time / 60);
    return `${hours}:${minutes}`
}