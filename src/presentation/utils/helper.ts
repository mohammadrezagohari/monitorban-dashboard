export function formatTime(second: number) {
    const m = Math.floor(second / 60)
        .toString()
        .padStart(1, "0");
    const s = (second % 60).toString().padStart(2, "0");

    return `${Number(m) > 9 ? m : "0" + m}:${s}`;
};