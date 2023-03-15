export const ValidationService = {
  cep(cep: string) {
      cep.replace(/\D/g, '').length === 8;
  },
}