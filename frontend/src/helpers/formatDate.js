import moment from 'moment';

function formatDate(date, type, format = 'lll') {
    if (type === 'FromNow') {
        return moment(date).fromNow();
    }
    return moment(date).format(format);
}

export default formatDate;