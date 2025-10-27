
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const PUEBLO_OF_ZUNI_CONTENT: TribeContent = {
  title: 'Pueblo of Zuni',
  summary: "The Pueblo of Zuni is a federally recognized tribe primarily located in western New Mexico, with ancestral lands and trust lands in Arizona. The Zuni people are known for their unique language, which is a linguistic isolate, and their rich artistic traditions, particularly in pottery, fetish carving, and silverwork.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Pueblo of Zuni is governed by its Constitution, which was approved in 1970. The governing body is the Zuni Tribal Council, composed of a Governor, Lieutenant Governor, and six council members, all elected by the tribal membership.</p>
        <p>Information about the tribal government can be found on the <a href='https://www.ashiwi.org/govcouncil.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Zuni Pueblo's official website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Zuni Tribal Council enacts laws and ordinances that are compiled into the Zuni Tribal Code. This code addresses a wide range of legal areas, including civil and criminal law, domestic relations, and natural resource management.</p>
        <p>A version of the <a href='https://narf.org/nill/codes/zuni_code/index.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Zuni Tribal Code</a> is hosted by the National Indian Law Library (NILL). For the most current laws, contacting the tribe directly is advised.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Pueblo of Zuni has a well-established judicial system, including the Zuni Tribal Court. The court adjudicates cases arising under the tribe's laws and customs, playing a vital role in the tribe's sovereignty.</p>
        <p>Information about the Zuni Tribal Courts can be found on the <a href='https://www.ashiwi.org/govjudicial.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>judicial section of the tribe's website</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Zuni Police Department. The department is responsible for enforcing tribal, federal, and applicable state laws within the reservation's boundaries to ensure the safety and security of the community.</p>
        <p>More information is available on the <a href='https://www.ashiwi.org/govprograms.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribal programs page</a> under Public Safety.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The A:shiwi (Zuni people) have lived in the Zuni River valley for thousands of years. They are a deeply traditional people, with a unique language and a complex ceremonial system that is central to their way of life. The Zuni are world-renowned for their craftsmanship, especially their inlay silverwork, pottery, and stone fetish carvings.</p>
        <p>The main Zuni Pueblo is in New Mexico, but the tribe has deep ancestral ties to lands in Arizona and continues to hold trust lands there. For more information on Zuni culture and tourism, visit the <a href='https://www.ashiwi.org/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Pueblo of Zuni website</a>.</p>
      `,
    },
  },
};
