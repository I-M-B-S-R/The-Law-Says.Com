
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const SAN_CARLOS_APACHE_CONTENT: TribeContent = {
  title: 'San Carlos Apache Tribe',
  summary: "The San Carlos Apache Reservation was established by executive order in 1872. Located in southeastern Arizona, it is home to the San Carlos Apache people, who are composed of several bands of the Apache nation. The reservation is known for its rugged beauty, vast wilderness areas, and rich natural resources.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The San Carlos Apache Tribe is governed by a Constitution and By-Laws, which were approved in 1936 and amended in 1954. The governing body is the San Carlos Apache Tribal Council, composed of 11 members, including a chairman, vice-chairman, and members representing four different districts on the reservation.</p>
        <p>Information about the Tribal Council can be found on the <a href='https://www.sancarlosapache.com/tribal_council.htm' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official San Carlos Apache Tribe website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The San Carlos Apache Tribal Council enacts laws and ordinances that are compiled into the San Carlos Apache Law and Order Code. This code addresses a wide range of subjects, including criminal and civil law, domestic relations, environmental protection, and business regulations.</p>
        <p>The tribe's Law and Order Code is available online through the <a href='https://www.sancarlosapache.com/law_and_order_code.htm' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's official website</a>.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The San Carlos Apache Tribe has its own judicial system, which includes the Tribal Court and a Court of Appeals. The courts have jurisdiction over legal matters arising under the tribe's laws and play a crucial role in the tribe's sovereignty and self-governance.</p>
        <p>Information about the court system can be accessed via the <a href='https://www.sancarlosapache.com/judicial_branch.htm' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Judicial Branch section of the tribe's website</a>.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the San Carlos Apache Police Department. The department is responsible for enforcing tribal, federal, and applicable state laws across the reservation's 1.8 million acres.</p>
        <p>Contact information for the police department is available through the <a href='https://www.sancarlosapache.com/law_enforcement.htm' target='_blank' rel='noopener noreferrer' class='text-primary underline'>law enforcement page on the tribal website</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Apache people have a long and proud history in the American Southwest. The San Carlos Reservation was created to consolidate various Apache bands, leading to a complex history. The tribe has been a leader in asserting its sovereignty and managing its natural resources.</p>
        <p>Today, the tribe operates several enterprises, including the Apache Gold Casino and the Apache Sky Casino. It is also known for its outstanding big game hunting and recreational opportunities. For more information on the tribe's history and current events, visit the <a href='https://www.sancarlosapache.com/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official San Carlos Apache Tribe website</a>.</p>
      `,
    },
  },
};
