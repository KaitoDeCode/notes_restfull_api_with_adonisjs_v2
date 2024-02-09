import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Note from '#models/note'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Note.createMany([
      {
        title : "Belajar Adonis",
        contents : "lasjkdnaksjdnaksdnkasndkasndkasndkasjdnkasdnkajsdnkasndkjasndkjanskdjnaskdnasdkasndkasndkansdk"
      },
      {
        title : "Belajar Adonis",
        contents : "lasjkdnaksjdnaksdnkasndkasndkasndkasjdnkasdnkajsdnkasndkjasndkjanskdjnaskdnasdkasndkasndkansdk"
      },
      {
        title : "Belajar Adonis",
        contents : "lasjkdnaksjdnaksdnkasndkasndkasndkasjdnkasdnkajsdnkasndkjasndkjanskdjnaskdnasdkasndkasndkansdk"
      },
      {
        title : "Belajar Adonis",
        contents : "lasjkdnaksjdnaksdnkasndkasndkasndkasjdnkasdnkajsdnkasndkjasndkjanskdjnaskdnasdkasndkasndkansdk"
      },
      {
        title : "Belajar Adonis",
        contents : "lasjkdnaksjdnaksdnkasndkasndkasndkasjdnkasdnkajsdnkasndkjasndkjanskdjnaskdnasdkasndkasndkansdk"
      },
      {
        title : "Belajar Adonis",
        contents : "lasjkdnaksjdnaksdnkasndkasndkasndkasjdnkasdnkajsdnkasndkjasndkjanskdjnaskdnasdkasndkasndkansdk"
      },
      {
        title : "Belajar Adonis",
        contents : "lasjkdnaksjdnaksdnkasndkasndkasndkasjdnkasdnkajsdnkasndkjasndkjanskdjnaskdnasdkasndkasndkansdk"
      },
      {
        title : "Belajar Adonis",
        contents : "lasjkdnaksjdnaksdnkasndkasndkasndkasjdnkasdnkajsdnkasndkjasndkjanskdjnaskdnasdkasndkasndkansdk"
      },
      {
        title : "Belajar Adonis",
        contents : "lasjkdnaksjdnaksdnkasndkasndkasndkasjdnkasdnkajsdnkasndkjasndkjanskdjnaskdnasdkasndkasndkansdk"
      },
      {
        title : "Belajar Adonis",
        contents : "lasjkdnaksjdnaksdnkasndkasndkasndkasjdnkasdnkajsdnkasndkjasndkjanskdjnaskdnasdkasndkasndkansdk"
      },
      {
        title : "Belajar Adonis",
        contents : "lasjkdnaksjdnaksdnkasndkasndkasndkasjdnkasdnkajsdnkasndkjasndkjanskdjnaskdnasdkasndkasndkansdk"
      },
      {
        title : "Belajar Adonis",
        contents : "lasjkdnaksjdnaksdnkasndkasndkasndkasjdnkasdnkajsdnkasndkjasndkjanskdjnaskdnasdkasndkasndkansdk"
      },
    ]);
  }
}
