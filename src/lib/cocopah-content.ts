
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const COCOPAH_CONTENT: TribeContent = {
  title: 'Cocopah Indian Tribe',
  summary: "The Cocopah Indian Tribe, known as the 'River People,' have lived along the lower Colorado River and delta for centuries. The Cocopah Reservation was established in 1917 and is comprised of three non-contiguous bodies of land: the North, West, and East Reservations. The tribal headquarters is located in Somerton, Arizona.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Cocopah Tribe is governed by a constitution and by-laws approved by the Secretary of the Interior. The governing body is the Tribal Council, which consists of five members: a chairperson, a vice-chairperson, and three council members, all elected by the tribal membership.</p>
        <p>More information about the tribal government structure can be found on the <a href='https://www.cocopah.com/tribal-council.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Cocopah Tribe website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Cocopah Tribal Council enacts laws, codes, and ordinances to govern the reservation. These laws cover a wide range of areas including civil and criminal matters, traffic, environmental regulations, and business operations.</p>
        <p>The official Tribal Laws and Ordinances are available to the public and can be found on the <a href='https://www.cocopah.com/laws-ordinances.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's website</a>.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Cocopah Tribal Court has jurisdiction over legal matters arising within the reservation's boundaries. The court system adjudicates civil and criminal cases involving tribal members and, in some cases, non-members as provided by federal law.</p>
        <p>Information about the Cocopah Tribal Court can be accessed through the <a href='https://www.cocopah.com/tribal-court.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Cocopah Tribe's official website</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Cocopah Tribal Police Department. The department is responsible for enforcing tribal, state, and federal laws on the reservation, ensuring public safety and order for residents and visitors.</p>
        <p>Contact information for the police department is available on the <a href='https://www.cocopah.com/cocopah-police.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Cocopah Police Department's webpage</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Cocopah, or 'Kwapa,' are the 'River People' who have traditionally lived along the lower Colorado River. Today, the tribe operates a number of successful enterprises, including the Cocopah Resort and Casino, Cocopah Korner, and Cocopah RV and Golf Resort. They also have extensive agricultural holdings.</p>
        <p>The tribe works to preserve its language and culture through various programs and events. Information about the tribe's history, culture, and current events can be found on the <a href='https://www.cocopah.com/about-us.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>About Us section of their website</a>.</p>
      `,
    },
  },
};
