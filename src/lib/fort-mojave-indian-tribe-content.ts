
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const FORT_MOJAVE_INDIAN_TRIBE_CONTENT: TribeContent = {
  title: 'Fort Mojave Indian Tribe',
  summary: "The Fort Mojave Indian Reservation is located along the Colorado River in the tri-state area of Arizona, California, and Nevada. The Tribe's lands are situated in a valley that was occupied by the Pipa Aha Macav ('The People by the River') for thousands of years.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Fort Mojave Indian Tribe is governed by its Constitution and Bylaws, which were approved in 1957. The governing body is the Fort Mojave Tribal Council, which consists of seven members elected at-large by the tribal membership.</p>
        <p>Information about the tribal government can be found on the <a href='https://mojaveindiantribe.com/government/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Fort Mojave Indian Tribe website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Fort Mojave Tribal Council enacts laws and ordinances that govern the reservation. The Fort Mojave Law and Order Code is a comprehensive set of laws addressing criminal and civil matters, environmental protection, and business regulation.</p>
        <p>The <a href='https://narf.org/nill/codes/ftmojave_code/index.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>National Indian Law Library (NILL)</a> hosts a version of the tribe's Law and Order Code. For the most current version, contacting the tribe directly is recommended.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Fort Mojave Tribal Court system has jurisdiction over legal matters arising within the reservation. The court handles civil and criminal cases involving tribal members and others as provided by federal law.</p>
        <p>Contact information for the Tribal Court can be found on the <a href='https://mojaveindiantribe.com/judicial/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's judicial webpage</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Fort Mojave Tribal Police Department. The department works to ensure public safety and enforces tribal, state, and federal laws on the reservation's lands across Arizona, California, and Nevada.</p>
        <p>More information can be found on the <a href='https://mojaveindiantribe.com/public-safety/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Public Safety section of the tribe's website</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Mojave people have a deep, spiritual connection to the Colorado River, which is central to their culture and history. The Tribe is actively involved in preserving its language and traditions. Today, the Fort Mojave Indian Tribe is a major economic force in the region, operating the Avi Resort & Casino in Nevada, as well as extensive agricultural enterprises in Arizona and California.</p>
        <p>For more information on the tribe's culture and current events, visit the <a href='https://mojaveindiantribe.com/culture/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official tribal website</a>.</p>
      `,
    },
  },
};
