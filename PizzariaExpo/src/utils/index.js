export const formatCurrency = (value = 0) => {
    return `R$ ${value.toFixed(2)}`.replace('.', ',')
}