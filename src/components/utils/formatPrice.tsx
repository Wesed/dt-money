export function FormatValue(value: number) {
  const formatPrice = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
  return formatPrice
}
