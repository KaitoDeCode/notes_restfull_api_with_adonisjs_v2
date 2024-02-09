import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
  'required' : 'Inputan {{ field }} wajib diisi',
  'string' : 'Nilai dari inputan {{ field }} wajib bertipe string',
  'email' : 'Nilai dari inputan bukan email yang valid'
})

export const RequestStoreNote =  vine.compile(
  vine.object({
    title: vine.string().trim().maxLength(100),
    contents : vine.string().trim().maxLength(500).escape(),
   })
)


