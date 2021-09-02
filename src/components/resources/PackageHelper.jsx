export function validInputClass(value) {
    if (value != null && value !== '') {
        return true;
    } else {
        return false;
    }
}
export function formatToCurrency(amount) {
    if (amount === '' || amount === null) {
        amount = '0';
    }
    return parseFloat(amount)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
export const formatValidInputClass = (valid) => (valid ? '' : 'input-error');