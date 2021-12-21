import differenceInSeconds from 'date-fns/differenceInSeconds';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInHours from 'date-fns/differenceInHours';

export const leftPadWithZeroIfNeeded = (num) => (
    `${num < 10 ? '0' : ''}${num}`
);

export const getTimeSpentString = (date, date2) => {
    if (!date) {
        return {
            days: '00',
            hours: '00',
            mins: '00',
            seconds: '00',
        };
    }
    const currentDate = date2;
    const secondsLeft = Math.round((currentDate.getTime() - date.getTime()) / 1000);
    const diff = {
        days: leftPadWithZeroIfNeeded(Math.floor(secondsLeft / 86400)),
        hours: leftPadWithZeroIfNeeded(Math.floor((secondsLeft % 86400) / 3600)),
        mins: leftPadWithZeroIfNeeded(Math.floor(((secondsLeft % 86400) % 3600) / 60)),
        seconds:
            secondsLeft % 60 < 10 ? `0${secondsLeft % 60}` : secondsLeft % 60
    };
    return diff;
    // let diffInSeconds = differenceInSeconds(currentDate, date);
    // let diffInMinutes = differenceInMinutes(currentDate, date);
    // let diffInHours = differenceInHours(currentDate, date);
    // console.log('asd090sad', diff);
    // console.log('asd090sad - 2', diffInMinutes);
    // console.log('asd090sad - 3', diffInHours);
    // if (diffInSeconds > 59) {
    //     diffInSeconds = 59;
    //     diffInMinutes += 1;
    // }
    // if (diffInMinutes > 59) {
    //     diffInMinutes = 59;
    //     diffInHours += 1;
    // }
    // return `${leftPadWithZeroIfNeeded(diffInHours)}:${leftPadWithZeroIfNeeded(diffInMinutes)}:${leftPadWithZeroIfNeeded(diffInSeconds)}`;
};
