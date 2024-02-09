import vine from '@vinejs/vine'

export const RequestStoreNote =  vine.compile(
  vine.object({
    title: vine.string().trim().maxLength(100),
    contents : vine.string().trim().maxLength(500).escape(),
   })
)


