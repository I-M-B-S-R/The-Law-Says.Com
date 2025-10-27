
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const QUECHAN_CONTENT: TribeContent = {
  title: 'Quechan Tribe',
  summary: "The Quechan Tribe (or 'Yuma' tribe) resides on the Fort Yuma Indian Reservation, which straddles the Colorado River on the border of Arizona and California. The Quechan people are the 'River People' with deep ancestral roots along the lower Colorado River.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Quechan Indian Tribe is governed by its Constitution and By-Laws, which were approved in 1936. The governing body is the seven-member Tribal Council, which includes a president and vice president, all elected by the tribal membership.</p>
        <p>Information about the tribal government structure can be found on the <a href='https://www.quechantribe.com/government.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Quechan Tribe website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Quechan Tribal Council enacts laws and ordinances that govern the reservation. The tribe has a comprehensive set of laws covering civil and criminal matters, traffic, and resource management.</p>
        <p>An online version of the <a href='https://www.quechantribe.com/departments-Law-and-Order-Codes.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Quechan Tribal Code</a> is available on the tribe's official website.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Quechan Tribal Court system has jurisdiction over legal matters arising within the reservation's boundaries. The court handles a variety of cases, including civil disputes, criminal proceedings involving tribal members, and family law matters.</p>
        <p>Information about court services can be found on the <a href='https://www.quechantribe.com/departments-Tribal-Court.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Quechan Tribal Court webpage</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Quechan Tribal Police Department. The department is responsible for enforcing tribal, federal, and applicable state laws on the reservation to ensure public safety.</p>
        <p>Contact information for the police department is available through the <a href='https://www.quechantribe.com/contact.html' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's contact page</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Quechan people have lived in the lower Colorado River valley for centuries, long before the establishment of Fort Yuma in their territory. They are known for their resilience and strong cultural traditions. Today, the Quechan Tribe operates several successful enterprises, including the Quechan Casino Resort, which is a major economic driver for the tribe and the surrounding region.</p>
        <p>For more information on the tribe's culture, history, and current events, visit the <a href='https://www.quechantribe.com/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Quechan Tribe website</a>.</p>
      `,
    },
  },
};
