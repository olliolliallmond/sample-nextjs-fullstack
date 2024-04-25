'use server';

import { z } from 'zod'; // TS validation library

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
})

const CreateInvoice = FormSchema.omit({id: true, date: true})
 
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // store in cents to avoind JS floating-point errors and to improve accuracy
  const amountInCents = amount * 100; 

  // capture date, split at 'T' to keep date and exclude time
  const date = new Date().toISOString().split('T')[0]
  console.log("date: " + date)

  // const rawFormData = Object.fromEntries(formData.entries())

  // Console log visible in dev terminal running app
  // console.log(rawFormData);
}