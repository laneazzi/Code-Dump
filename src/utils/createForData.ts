export const createFormData = (value: any) => {
  const form_data = new FormData();

  for (const key in value) {
    form_data.append(key, value[key]);
  }

  return form_data;
};
