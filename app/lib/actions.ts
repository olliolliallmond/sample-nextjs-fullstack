'use server';
 
export async function createInvoice(formData: FormData) {
  // const rawFormData = {
  //   customerId: formData.get('customerId'),
  //   amount: formData.get('amount'),
  //   status: formData.get('status'),
  // };
  const rawFormData = Object.fromEntries(formData.entries())
  // Console log visible in dev terminal running app
  console.log(rawFormData);
}