
interface SectionContent {
  title: string;
  content: string;
}

interface TribeContent {
  title: string;
  summary: string;
  sections: Record<string, SectionContent>;
}

export const YAVAPAI_PRESCOTT_CONTENT: TribeContent = {
  title: 'Yavapai-Prescott Indian Tribe',
  summary: "The Yavapai-Prescott Indian Tribe is a federally recognized tribe located in Prescott, Arizona. The reservation, established in 1935, consists of approximately 1,400 acres adjacent to the city. The tribe is known for its successful economic development and its deep roots in the Prescott region.",
  sections: {
    constitution: {
      title: 'Tribal Constitution',
      content: `
        <p>The Yavapai-Prescott Indian Tribe is governed by its Constitution and By-laws. The governing body is the Board of Directors, a five-member council elected by the tribal membership, which oversees all tribal operations and government functions.</p>
        <p>Information about the Board of Directors can be found on the <a href='https://www.ypit.com/board-of-directors' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Yavapai-Prescott Indian Tribe website</a>.</p>
      `,
    },
    code: {
      title: 'Tribal Code/Ordinances',
      content: `
        <p>The Yavapai-Prescott Tribal Board of Directors enacts laws and ordinances that govern the reservation. For access to the official and most current versions of the tribal code, it is best to contact the tribal government offices directly, as a comprehensive online version is not publicly available.</p>
      `,
    },
    courts: {
      title: 'Tribal Courts',
      content: `
        <p>The Tribe operates its own judicial system to handle legal matters arising under its laws. For specific information about court services and procedures, individuals should contact the tribal administration.</p>
      `,
    },
    enforcement: {
      title: 'Law Enforcement',
      content: `
        <p>Law enforcement services are provided by the Yavapai-Prescott Tribal Police Department. The department is responsible for enforcing tribal, federal, and applicable state laws on the reservation's lands, ensuring the safety of the community and its enterprises.</p>
        <p>Contact information for the police department is available on the <a href='https://www.ypit.com/police-department' target='_blank' rel='noopener noreferrer' class='text-primary underline'>tribe's website</a>.</p>
      `,
    },
    history: {
      title: 'Historical & Current Information',
      content: `
        <p>The Yavapai people, the 'People of the Sun,' have inhabited central Arizona for centuries. After periods of conflict and relocation, the Yavapai-Prescott Indian Reservation was established in the 1930s on lands their ancestors once occupied.</p>
        <p>Today, the Yavapai-Prescott Indian Tribe is a major economic force in the Prescott area, operating the Bucky's Casino, Yavapai Casino, the Prescott Resort and Conference Center, and the Frontier Village Center. For more information, visit the <a href='https://www.ypit.com/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>official Yavapai-Prescott Indian Tribe website</a>.</p>
      `,
    },
  },
};
