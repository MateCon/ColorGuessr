import { RGB } from '../types/interfaces';

const randomInRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
};

export const generateColor = (): RGB => {
    return {
        r: randomInRange(0, 255),
        g: randomInRange(0, 255),
        b: randomInRange(0, 255),
    };
};

// https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
const map = (value: number, x1: number, y1: number, x2: number, y2: number): number =>
    (value - x1) * (y2 - x2) / (y1 - x1) + x2;

export const getScore = (guess: RGB, target: RGB): number => {
    const diff = Math.abs(guess.r - target.r) + Math.abs(guess.g - target.g) + Math.abs(guess.b - target.b);
    return 5000 - map(diff, 0, 756, 0, 5000);
}

export const setBgColor = (color: RGB): void => {
    const root = document.getElementById("root");
    if (root) root.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
}

export const getTheme = (color: RGB): string => {
    if(color.r + color.g + color.b < 350) return "light";
    return "dark";
}

export const setTheme = (theme: string): void => {
    const root = document.getElementById("root");
    if (root) {
        if(theme === "dark") root.className = "dark-theme";
        if(theme === "light") root.className = "light-theme";
    }
};
