export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('id-ID').format(new Date(date))
