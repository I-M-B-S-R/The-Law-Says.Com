
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const WHITE_MOUNTAIN_APACHE_CONTENT: TribeContent = {
  title: 'White Mountain Apache Tribe',
  summary: "The White Mountain Apache Tribe resides on the Fort Apache Indian Reservation in east-central Arizona. The reservation spans over 1.6 million acres and is known for its beautiful mountain scenery, extensive ponderosa pine forests, and abundant wildlife, making it a premier destination for outdoor recreation.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The White Mountain Apache Tribe is governed by its Constitution and By-Laws, which were approved in 1938. The governing body is the Tribal Council, composed of a chairman, vice-chairman, and nine council members elected from various districts on the reservation.</p>
        <p>Information about the Tribal Council can be found on the <a href='https://www.wmat.nsn.us/tribal-council' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official White Mountain Apache Tribe website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The White Mountain Apache Tribal Council enacts laws that are compiled into the tribe's Law and Order Code. This comprehensive code covers a wide range of subjects, including criminal and civil law, domestic relations, environmental protection, and fish and game regulations.</p>
        <p>The tribe's Law and Order Code is available online through the <a href='https://www.wmat-nsn.gov/codes' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's official website</a>.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The White Mountain Apache Tribe has its own judicial system, including the Tribal Court and a Court of Appeals. The courts have jurisdiction over legal matters arising under the tribe's laws and play a crucial role in the tribe's sovereignty and self-governance.</p>
        <p>Information about the court system can be accessed via the <a href='https://www.wmat.nsn.us/judicial-branch' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Judicial Branch section of the tribe's website</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the White Mountain Apache Police Department. The department is responsible for enforcing tribal, federal, and applicable state laws across the reservation.</p>
        <p>Contact information for the police department is available through the <a href='https://www.wmat.nsn.us/contact' target='_blank' rel='noopener noreferrer' class='text-primary underline'>contact page on the tribal website</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Apache people have a long and proud history in the American Southwest. The Fort Apache Reservation was established in 1871. The tribe has been a leader in managing its own natural resources, particularly its timber industry and vast recreational opportunities.</p>
        <p>Today, the tribe operates the Hon-Dah Resort Casino and the Sunrise Park Resort, a popular ski destination. The White Mountain Apache Tribe is also renowned for its world-class elk hunting and fishing in its many lakes and streams. For more information, visit the <a href='https://www.wmat.nsn.us/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official White Mountain Apache Tribe website</a>.</p>
      `,
    },
  },
};
